import { ElSwitch } from "element-plus";
import "element-plus/theme-chalk/src/switch.scss";
import { computed, defineComponent } from "vue";
import { proFieldSwitchProps } from "./typing";
const ProFieldSwitch = defineComponent(
  (props, ctx) => {
    const state = computed({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => /* @__PURE__ */ React.createElement(ElSwitch, { "v-model": state.value, ...props });
  },
  {
    name: "ProFieldSwitch"
  }
);
ProFieldSwitch.props = proFieldSwitchProps;
export * from "./typing";
var Switch_default = ProFieldSwitch;
export {
  ProFieldSwitch,
  Switch_default as default
};
