import { ElSlider } from "element-plus";
import "element-plus/theme-chalk/src/slider.scss";
import { computed, defineComponent } from "vue";
import { proFieldSliderProps } from "./typing";
const ProFieldSlider = defineComponent(
  (props, ctx) => {
    const state = computed({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => /* @__PURE__ */ React.createElement(ElSlider, { "v-model": state.value, ...props });
  },
  {
    name: "ProFieldSlider"
  }
);
ProFieldSlider.props = proFieldSliderProps;
export * from "./typing";
var Slider_default = ProFieldSlider;
export {
  ProFieldSlider,
  Slider_default as default
};
//# sourceMappingURL=index.mjs.map