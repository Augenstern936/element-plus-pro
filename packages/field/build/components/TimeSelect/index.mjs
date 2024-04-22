import { ElTimeSelect } from "element-plus";
import "element-plus/theme-chalk/src/time-select.scss";
import { computed, defineComponent } from "vue";
import { proFieldTimeSelectProps } from "./typing";
const ProFieldTimeSelect = defineComponent(
  (props, ctx) => {
    const state = computed({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("upTime:modelValue", value);
      }
    });
    return () => /* @__PURE__ */ React.createElement(ElTimeSelect, { "v-model": state.value, ...props });
  },
  {
    name: "ProFieldTimeSelect"
  }
);
ProFieldTimeSelect.props = proFieldTimeSelectProps;
export * from "./typing";
var TimeSelect_default = ProFieldTimeSelect;
export {
  ProFieldTimeSelect,
  TimeSelect_default as default
};
//# sourceMappingURL=index.mjs.map