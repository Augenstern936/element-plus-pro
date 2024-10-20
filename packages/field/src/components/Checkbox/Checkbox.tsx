/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-10-15 16:04:43
 * @FilePath: \element-plus-pro\packages\field\src\components\Checkbox\Checkbox.tsx
 */
import { useVModel } from "@vueuse/core";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFieldCheckboxProps, proFieldCheckboxProps } from "./typing";
import useRender from "./useRender";

const ProFieldCheckbox = defineComponent<ProFieldCheckboxProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);

    return useRender("checkbox", props, model, ctx);
  },
  {
    name: "ProFieldCheckbox"
  }
) as DefineComponent<ProFieldCheckboxProps>;

ProFieldCheckbox.props = proFieldCheckboxProps;

export default ProFieldCheckbox;
