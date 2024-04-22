import { ElInput, inputProps } from "element-plus";
import "element-plus/theme-chalk/src/input.scss";
import { computed, defineComponent } from "vue";
const ProFieldInput = defineComponent((props, ctx) => {
  const state = computed({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      ctx.emit("update:modelValue", value);
    }
  });
  return () => /* @__PURE__ */ React.createElement(ElInput, { "v-model": state.value, ...props });
});
ProFieldInput.props = {
  ...inputProps,
  type: {
    type: String,
    default: "text"
  }
};
const ProFieldText = (props) => {
  return /* @__PURE__ */ React.createElement(ProFieldInput, { ...props, type: "text" });
};
const ProFieldPassword = (props) => {
  return /* @__PURE__ */ React.createElement(ProFieldInput, { ...props, type: "password" });
};
const ProFieldTextarea = (props) => {
  return /* @__PURE__ */ React.createElement(ProFieldInput, { ...props, type: "textarea" });
};
export {
  ProFieldPassword,
  ProFieldText,
  ProFieldTextarea
};
//# sourceMappingURL=index.mjs.map