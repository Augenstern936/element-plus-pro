/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-10-29 16:35:31
 * @LastEditTime: 2024-11-17 13:54:48
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import { defineComponent, PropType, provide } from "vue-demi";

export interface ProProviderProps {
  value?: Record<string, any>;
}

export const ProProvider = defineComponent<ProProviderProps>({
  name: "ProProvider",
  props: {
    value: {
      type: Object as PropType<Record<string, any>>,
      default: {}
    }
  },
  setup(props, ctx) {
    if (props.value && Object.keys(props.value).length) {
      provide("provide-value", props.value);
      for (const key in props.value) {
        if (Object.prototype.hasOwnProperty.call(props.value, key)) {
          provide(key, props.value[key]);
        }
      }
    }
    return () => ctx.slots?.default?.();
  }
});

export default withInstall(ProProvider);
