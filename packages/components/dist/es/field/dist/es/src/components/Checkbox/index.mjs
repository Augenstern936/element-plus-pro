import { defineComponent, computed, createVNode, Fragment, mergeProps } from "vue";
import { ElCheckboxGroup, ElCheckbox, ElCheckboxButton } from "element-plus";
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
