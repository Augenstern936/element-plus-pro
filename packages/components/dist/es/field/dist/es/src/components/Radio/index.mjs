import { defineComponent, computed, createVNode, Fragment, mergeProps } from "vue";
import { ElRadioGroup, ElRadio, ElRadioButton } from "element-plus";
import { proFieldRadioProps } from "./typing.mjs";
const ProFieldRadio = /* @__PURE__ */ defineComponent((props, ctx) => {
  const state = computed({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      ctx.emit("update:modelValue", value);
    }
  });
  return () => createVNode(ElRadioGroup, {
    "modelValue": state.value,
    "onUpdate:modelValue": ($event) => state.value = $event
  }, {
    default: () => {
      var _a;
      return [(_a = props.options) == null ? void 0 : _a.map((option, i) => createVNode(Fragment, null, [option.type == "radio" ? createVNode(ElRadio, mergeProps(option, {
        "key": i
      }), {
        default: () => [option.label]
      }) : createVNode(ElRadioButton, {
        "label": option.value,
        "key": i
      }, {
        default: () => [option.label]
      })]))];
    }
  });
}, {
  name: "ProFieldRadio"
});
ProFieldRadio.props = proFieldRadioProps;
export {
  ProFieldRadio,
  ProFieldRadio as default,
  proFieldRadioProps
};
