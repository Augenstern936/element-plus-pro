/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-11-11 20:30:37
 *
 */
import { useVModel } from "@vueuse/core";
import { ElSlider, ElText } from "element-plus";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFieldSliderProps, proFieldSliderProps } from "./props";

const ProFieldSlider = defineComponent<ProFieldSliderProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);

    const render = () => {
      if (props.mode === "read") {
        return <ElText>{model.value || model.value === 0 ? model.value : props.emptyText}</ElText>;
      }
      if (props.mode === "edit") {
        return <ElSlider {...props?.fieldProps} v-model={model.value} />;
      }
      return <></>;
    };

    return () => <div style={{ width: "100%" }}>{render()}</div>;
  },
  {
    name: "ProFieldSlider"
  }
) as DefineComponent<ProFieldSliderProps>;

ProFieldSlider.props = proFieldSliderProps;

export default ProFieldSlider;
