/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-10-15 15:21:52
 * @FilePath: \element-plus-pro\packages\field\src\components\Checkbox\CheckboxButton.tsx
 */
import { useVModel } from "@vueuse/core";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFieldCheckboxButtonProps, proFieldCheckboxButtonProps } from "./typing";
import useRender from "./useRender";

const ProFieldCheckboxButton = defineComponent<ProFieldCheckboxButtonProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);

    return useRender("checkbox-button", props, model, ctx);
  },
  {
    name: "ProFieldCheckboxButton"
  }
) as DefineComponent<ProFieldCheckboxButtonProps>;

ProFieldCheckboxButton.props = proFieldCheckboxButtonProps;

export default ProFieldCheckboxButton;
