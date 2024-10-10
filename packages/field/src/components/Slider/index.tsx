/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-10-08 22:09:40
 * @FilePath: \element-plus-pro\packages\field\src\components\Slider\index.tsx
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
        return <ElText>{model.value}</ElText>;
      }
      if (props.mode === "edit") {
        return <ElSlider {...props} v-model={model.value} />;
      }
      return "";
    };

    return render;
  },
  {
    name: "ProFieldSlider"
  }
) as DefineComponent<ProFieldSliderProps>;

ProFieldSlider.props = proFieldSliderProps as any;

export * from "./props";

export { ProFieldSlider };

export default ProFieldSlider;
