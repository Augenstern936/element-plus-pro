/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-10-08 22:10:11
 * @FilePath: \element-plus-pro\packages\field\src\components\TreeSelect\index.tsx
 */
import { useVModel } from "@vueuse/core";
import { ElTreeSelect } from "element-plus";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFieldTreeSelectProps } from "./props";

const ProFieldTreeSelect = defineComponent<ProFieldTreeSelectProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);

    return () => <ElTreeSelect {...props} v-model={model.value} />;
  },
  {
    name: "ProFieldTreeSelect"
  }
) as DefineComponent<ProFieldTreeSelectProps>;

export * from "./props";

export { ProFieldTreeSelect };

export default ProFieldTreeSelect;
