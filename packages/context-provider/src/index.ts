/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-10-29 16:35:31
 * @LastEditTime: 2024-10-30 09:38:41
 * @FilePath: \element-plus-pro\packages\context-provider\src\index.ts
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import { defineComponent, PropType, provide } from "vue";

export interface ProContextProviderProps {
  value?: Record<string, any>;
}

const ContextProvider = defineComponent<ProContextProviderProps>({
  name: "ProContextProvider",
  props: {
    value: {
      type: Object as PropType<Record<string, any>>,
      default: {}
    }
  },
  setup(props, ctx) {
    if (props.value && Object.keys(props.value).length) {
      for (const key in props.value) {
        if (Object.prototype.hasOwnProperty.call(props.value, key)) {
          provide(key, props.value[key]);
        }
      }
    }
    return () => ctx.slots?.default?.();
  }
});

export const ProContextProvider = ContextProvider;

export default withInstall(ContextProvider);
