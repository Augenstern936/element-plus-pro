/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2025-01-02 16:22:40
 *
 */
import { useVModel } from "@vueuse/core";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFieldRadioProps, proFieldRadioProps } from "./typing";
import useRender from "./useRender";

const ProFieldRadio = defineComponent<ProFieldRadioProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return useRender("radio", props, model);
  },
  {
    name: "ProFieldRadio"
  }
) as DefineComponent<ProFieldRadioProps>;

ProFieldRadio.props = proFieldRadioProps;

export default ProFieldRadio;
