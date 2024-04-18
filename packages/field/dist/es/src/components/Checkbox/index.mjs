import "../../../node_modules/.pnpm/vue@3.4.21_typescript@5.4.4/node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { ElCheckbox, ElCheckboxButton, ElCheckboxGroup } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/checkbox-button.scss.mjs";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/checkbox-group.scss.mjs";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/checkbox.scss.mjs";
import { proFieldCheckboxProps } from "./typing.mjs";
import { defineComponent, computed, createVNode, Fragment, mergeProps } from "../../../node_modules/.pnpm/@vue_runtime-core@3.4.21/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
const ProFieldCheckbox = /* @__PURE__ */ defineComponent((props, ctx) => {
  const state = computed({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      ctx.emit("update:modelValue", value);
    }
  });
  return () => createVNode(ElCheckboxGroup, {
    "modelValue": state.value,
    "onUpdate:modelValue": ($event) => state.value = $event
  }, {
    default: () => {
      var _a;
      return [(_a = props.options) == null ? void 0 : _a.map((option, i) => createVNode(Fragment, null, [props.type == "checkbox" ? createVNode(ElCheckbox, mergeProps(option, {
        "key": i
      }), null) : createVNode(ElCheckboxButton, mergeProps(option, {
        "key": i
      }), {
        default: () => [option.label]
      })]))];
    }
  });
}, {
  name: "ProFieldCheckbox"
});
ProFieldCheckbox.props = proFieldCheckboxProps;
const ProFieldCheckbox$1 = ProFieldCheckbox;
export {
  ProFieldCheckbox,
  ProFieldCheckbox$1 as default,
  proFieldCheckboxProps
};
