/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-11-15 14:30:16
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
