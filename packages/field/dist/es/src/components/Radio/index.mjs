import "../../../node_modules/.pnpm/vue@3.4.21_typescript@5.4.4/node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { ElRadio, ElRadioButton, ElRadioGroup } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/radio-button.scss.mjs";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/radio-group.scss.mjs";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/radio.scss.mjs";
import { proFieldRadioProps } from "./typing.mjs";
import { defineComponent, computed, createVNode, Fragment, mergeProps } from "../../../node_modules/.pnpm/@vue_runtime-core@3.4.21/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
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
const ProFieldRadio$1 = ProFieldRadio;
export {
  ProFieldRadio,
  ProFieldRadio$1 as default,
  proFieldRadioProps
};
