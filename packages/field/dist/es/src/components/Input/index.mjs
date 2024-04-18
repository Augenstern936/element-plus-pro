import "../../../node_modules/.pnpm/vue@3.4.21_typescript@5.4.4/node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { inputProps, ElInput } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/input.scss.mjs";
import { createVNode, mergeProps, defineComponent, computed } from "../../../node_modules/.pnpm/@vue_runtime-core@3.4.21/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
const ProFieldInput = /* @__PURE__ */ defineComponent((props, ctx) => {
  const state = computed({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      ctx.emit("update:modelValue", value);
    }
  });
  return () => createVNode(ElInput, mergeProps({
    "modelValue": state.value,
    "onUpdate:modelValue": ($event) => state.value = $event
  }, props), null);
});
ProFieldInput.props = {
  ...inputProps,
  type: {
    type: String,
    default: "text"
  }
};
const ProFieldText = (props) => {
  return createVNode(ProFieldInput, mergeProps(props, {
    "type": "text"
  }), null);
};
const ProFieldPassword = (props) => {
  return createVNode(ProFieldInput, mergeProps(props, {
    "type": "password"
  }), null);
};
const ProFieldTextarea = (props) => {
  return createVNode(ProFieldInput, mergeProps(props, {
    "type": "textarea"
  }), null);
};
export {
  ProFieldPassword,
  ProFieldText,
  ProFieldTextarea
};
