import { ElColorPicker } from "element-plus";
import "element-plus/theme-chalk/src/color-picker.scss";
import { computed, defineComponent } from "vue";
import { proFieldColor } from "./typing";
const ProFieldColor = defineComponent(
  (props, ctx) => {
    const state = computed({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => /* @__PURE__ */ React.createElement(ElColorPicker, { "v-model": state.value, ...props });
  },
  {
    name: "ProFieldColor"
  }
);
ProFieldColor.props = proFieldColor;
export * from "./typing";
var Color_default = ProFieldColor;
export {
  ProFieldColor,
  Color_default as default
};
//# sourceMappingURL=index.mjs.map