import { ElOption, ElSelect } from "element-plus";
import "element-plus/theme-chalk/src/option.scss";
import "element-plus/theme-chalk/src/select.scss";
import { computed, defineComponent } from "vue";
const ProFieldSelect = defineComponent(
  (props, ctx) => {
    const state = computed({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => /* @__PURE__ */ React.createElement(ElSelect, { "v-model": state.value }, props.options?.map((option, index) => /* @__PURE__ */ React.createElement(ElOption, { ...option, key: index }, option.label)));
  },
  {
    name: "ProFieldSelect"
  }
);
export * from "./typing";
var Select_default = ProFieldSelect;
export {
  ProFieldSelect,
  Select_default as default
};
