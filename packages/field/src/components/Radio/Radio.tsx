/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-10-08 22:07:16
 * @FilePath: \element-plus-pro\packages\field\src\components\Radio\Radio.tsx
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
