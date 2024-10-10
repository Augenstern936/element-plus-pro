/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-09-13 15:18:05
 * @FilePath: \element-plus-pro\packages\field\src\components\Radio\RadioButton.tsx
 */
import { useVModel } from "@vueuse/core";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFieldRadioButtonProps, proFieldRadioButtonProps } from "./typing";
import useRender from "./useRender";

export const ProFieldRadioButton = defineComponent<ProFieldRadioButtonProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);

    return useRender("radio-button", props, model);
  },
  {
    name: "ProFieldRadioButton"
  }
) as DefineComponent<ProFieldRadioButtonProps>;

ProFieldRadioButton.props = proFieldRadioButtonProps;
