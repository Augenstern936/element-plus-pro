import { ElRate } from "element-plus";
import "element-plus/theme-chalk/src/rate.scss";
import { computed, defineComponent } from "vue";
import { proFieldRateProps } from "./typing";
const ProFieldRate = defineComponent(
  (props, ctx) => {
    const state = computed({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => /* @__PURE__ */ React.createElement(ElRate, { "v-model": state.value, ...props });
  },
  {
    name: "ProFieldRate"
  }
);
ProFieldRate.props = proFieldRateProps;
export * from "./typing";
var Rate_default = ProFieldRate;
export {
  ProFieldRate,
  Rate_default as default
};
//# sourceMappingURL=index.mjs.map