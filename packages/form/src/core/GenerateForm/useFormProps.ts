/*
 * @Description:
 * @Date: 2024-06-25 09:54:28
 * @LastEditTime: 2024-11-01 22:20:48
 */
import { isObject } from "@vueuse/core";
import { computed } from "vue-demi";
import * as components from "../../components";
import { GenerateFormProps } from "./typing";

interface SlotConfig {
  type: string | { name: string };
  props: Record<string, any>;
}

const useFormProps = (props: GenerateFormProps, slots: SlotConfig[]) => {
  const columns = computed(() => {
    const slotList = (slots ?? []).map((item, index) => ({
      ...item,
      index,
      is: "slot"
    }));
    const configs = [...slotList, ...(props.columns ?? [])].filter(
      (item: any) => (item?.__v_isVNode && String(item?.type) !== "Symbol(v-cmt)") || !item?.__v_isVNode
    );
    return sort(configs);
  });

  const sort = (list: any[]) => {
    let lastOrder: null | number = null;
    const orders = list.filter(v => typeof v.order === "number");
    const minOrder = Math.min(...orders.map(v => v.order));
    const maxOrder = Math.max(...orders.map(v => v.order));
    const getOrder = (arr: any[], i: number, curr: null | number = null) => {
      if (!curr && typeof arr[i].order === "number") {
        return arr[i].order;
      }
      if (!orders.length) return 0;
      if (lastOrder === null) {
        lastOrder = minOrder + 1 < maxOrder ? minOrder + 1 : maxOrder + 1;
        const index = list.findIndex(item => item.order === lastOrder);
        return index === -1 ? lastOrder : lastOrder + 1;
      }
      lastOrder = lastOrder + 1;
      const index = list.findIndex(item => item.order === lastOrder);
      if (index == -1) return lastOrder;
      return getOrder(list, index, lastOrder);
    };
    const data = list.map((item, index) => ({
      ...item,
      order: getOrder(list, index)
    }));
    return data.sort((a, b) => {
      const aOrder = isProFormFieldComponent(a) ? (a.props?.order ?? a.order) : a.order;
      const bOrder = isProFormFieldComponent(b) ? (b.props?.order ?? b.order) : b.order;
      return (aOrder ?? 0) - (bOrder ?? 0);
    });
  };

  const isProFormFieldComponent = (slot: SlotConfig) => {
    return isObject(slot.type) && components[slot.type.name as keyof typeof components];
  };

  return {
    columns
  };
};

export default useFormProps;
