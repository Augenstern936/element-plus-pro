/*
 * @Description: 处理元素
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-12-15 14:07:12
 * @LastEditTime: 2024-12-17 13:40:21
 */
import { computed } from "vue-demi";
import { ProInterceptorProps } from "../typing";

export const useSlotsDefault = (
  props: Omit<ProInterceptorProps, "response">,
  slots: any,
  ref: Record<string, any>,
  callback: Function
) => {
  const event = ["click", "change", "input"];

  const Element = computed(() => {
    const node = slots.default?.()[0] as any;
    const triggerEvent = `on${props.trigger && event.includes(props.trigger) ? "Click" : "Click"}`;
    if (typeof props?.condition === "function") {
      return props.condition() === true ? getNewVNode(node, triggerEvent) : node;
    }
    return getNewVNode(node, triggerEvent);
  });

  const getNewVNode = (node: any, eventName: string) => {
    if (!node?.props?.[eventName]) return node;
    const originEvent = node.props[eventName];
    node.props[eventName] = (...args: any[]) => {
      return !isCallInternalOpenFunction(node.props[eventName]) ? callback() : originEvent(ref, ...args);
    };
    return node;
  };

  const isCallInternalOpenFunction = (func: Function) => {
    const getFirstParamName = (funcStr: string) => {
      const funcMatch = funcStr.match(/^function\s*\w*\s*\(\s*(\w+)\s*/);
      if (funcMatch && funcMatch[0]) funcMatch[0];
      const arrowFuncMatch = funcStr.match(/^\(\s*(\S+)\s*,\s*\S+\s*\)\s*=>/);
      return arrowFuncMatch ? arrowFuncMatch[1] : null;
    };

    const funcStr = func.toString();

    const param = getFirstParamName(funcStr) as string;

    if (!param) return false;

    if (funcStr.includes(`${param}?.open()`)) return true;

    if (funcStr.includes(`${param}.open?.()`)) return true;

    if (funcStr.includes(`${param}?.open?.()`)) return true;

    return false;
  };

  return {
    Element
  };
};
