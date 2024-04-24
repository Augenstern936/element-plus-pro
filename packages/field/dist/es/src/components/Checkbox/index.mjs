import { defineComponent, computed, createVNode, Fragment, mergeProps } from "vue";
import { ElCheckboxGroup, ElCheckbox, ElCheckboxButton } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/checkbox-button.scss.mjs";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/checkbox-group.scss.mjs";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/checkbox.scss.mjs";
import { proFieldCheckboxProps } from "./typing.mjs";
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
export {
  ProFieldCheckbox,
  ProFieldCheckbox as default,
  proFieldCheckboxProps
};
