/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-11-10 17:44:29
 * @FilePath: \element-plus-pro\packages\field\src\components\Slider\Slider.tsx
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
        return <ElSlider onChange={v => props?.onChange?.(v)} {...props?.fieldProps} v-model={model.value} />;
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
