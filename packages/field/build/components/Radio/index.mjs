import { ElRadio, ElRadioButton, ElRadioGroup } from "element-plus";
import "element-plus/theme-chalk/src/radio-button.scss";
import "element-plus/theme-chalk/src/radio-group.scss";
import "element-plus/theme-chalk/src/radio.scss";
import { computed, defineComponent } from "vue";
import { proFieldRadioProps } from "./typing";
const ProFieldRadio = defineComponent(
  (props, ctx) => {
    const state = computed({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => {
      var _a;
      return /* @__PURE__ */ React.createElement(ElRadioGroup, { "v-model": state.value }, (_a = props.options) == null ? void 0 : _a.map((option, i) => /* @__PURE__ */ React.createElement(React.Fragment, null, option.type == "radio" ? /* @__PURE__ */ React.createElement(ElRadio, { ...option, key: i }, option.label) : /* @__PURE__ */ React.createElement(ElRadioButton, { label: option.value, key: i }, option.label))));
    };
  },
  {
    name: "ProFieldRadio"
  }
);
ProFieldRadio.props = proFieldRadioProps;
export * from "./typing";
var Radio_default = ProFieldRadio;
export {
  ProFieldRadio,
  Radio_default as default
};
//# sourceMappingURL=index.mjs.map