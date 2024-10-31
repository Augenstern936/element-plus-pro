/*
 * @Description:
 * @Date: 2024-06-25 09:54:28
 * @LastEditTime: 2024-10-29 23:42:00
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
    const orders = slotList.map(solt => {
      const props = solt.props ?? {};
      return props.order && Number.isNaN(props.order) ? 0 : (props.order ?? 0);
    });
    const maxOrder = Number.isInteger(Math.max(...orders)) ? Math.max(...orders) : 0;
    const columnsConfig = (props?.columns ?? []).map((item: any, index) => {
      return { ...item, index, order: item.order ?? (index < maxOrder ? index : index + maxOrder) };
    });
    let data = slotList.concat(columnsConfig);
    console.log(data, "data");
    data.sort((a: any, b: any) => {
      const aOrder = isProFormFieldComponent(a) ? a.props?.order : a.order;
      const bOrder = isProFormFieldComponent(b) ? b.props?.order : b.order;
      return (aOrder ?? 0) - (bOrder ?? 0);
    });
    return data;
  });

  const isProFormFieldComponent = (slot: SlotConfig) => {
    return isObject(slot.type) && components[slot.type.name as keyof typeof components];
  };

  return {
    columns
  };
};

export default useFormProps;
