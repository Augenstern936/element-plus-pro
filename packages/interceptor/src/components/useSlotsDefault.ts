/*
 * @Description: 处理元素
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-12-15 14:07:12
 * @LastEditTime: 2024-12-15 14:45:22
 */
import { computed } from "vue-demi";
import { ProInterceptorProps } from "../typing";

export const useSlotsDefault = (props: Omit<ProInterceptorProps, "response">, slots: any, callback: Function) => {
  const event = ["click", "change", "input"];

  const Element = computed(() => {
    const node = slots.default?.()[0] as any;
    const triggerEvent = `on${props.trigger && event.includes(props.trigger) ? "Click" : "Click"}`;
    if (typeof props?.condition === "function") {
      console.log(props.condition(), "props.condition()");
      return props.condition() === true ? getNewVNode(node, triggerEvent) : node;
    }
    return getNewVNode(node, triggerEvent);
  });

  const getNewVNode = (node: any, eventName: string) => {
    if (!node?.props?.[eventName]) return node;
    node.props[eventName] = callback;
    return node;
  };

  return {
    Element
  };
};
