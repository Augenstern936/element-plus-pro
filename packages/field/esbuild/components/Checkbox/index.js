import { ElCheckbox, ElCheckboxButton, ElCheckboxGroup } from "element-plus";
import "element-plus/theme-chalk/src/checkbox-button.scss";
import "element-plus/theme-chalk/src/checkbox-group.scss";
import "element-plus/theme-chalk/src/checkbox.scss";
import { computed, defineComponent } from "vue";
import { proFieldCheckboxProps } from "./typing";
const ProFieldCheckbox = defineComponent(
  (props, ctx) => {
    const state = computed({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => /* @__PURE__ */ React.createElement(ElCheckboxGroup, { "v-model": state.value }, props.options?.map((option, i) => /* @__PURE__ */ React.createElement(React.Fragment, null, props.type == "checkbox" ? /* @__PURE__ */ React.createElement(ElCheckbox, { ...option, key: i }) : /* @__PURE__ */ React.createElement(ElCheckboxButton, { ...option, key: i }, option.label))));
  },
  {
    name: "ProFieldCheckbox"
  }
);
ProFieldCheckbox.props = proFieldCheckboxProps;
export * from "./typing";
var Checkbox_default = ProFieldCheckbox;
export {
  ProFieldCheckbox,
  Checkbox_default as default
};
