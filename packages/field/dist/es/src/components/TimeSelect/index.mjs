import { defineComponent, computed, createVNode, mergeProps } from "vue";
import { ElTimeSelect } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/time-select.scss.mjs";
import { proFieldTimeSelectProps } from "./typing.mjs";
const ProFieldTimeSelect = /* @__PURE__ */ defineComponent((props, ctx) => {
  const state = computed({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      ctx.emit("upTime:modelValue", value);
    }
  });
  return () => createVNode(ElTimeSelect, mergeProps({
    "modelValue": state.value,
    "onUpdate:modelValue": ($event) => state.value = $event
  }, props), null);
}, {
  name: "ProFieldTimeSelect"
});
ProFieldTimeSelect.props = proFieldTimeSelectProps;
const ProFieldTimeSelect$1 = ProFieldTimeSelect;
export {
  ProFieldTimeSelect,
  ProFieldTimeSelect$1 as default,
  proFieldTimeSelectProps
};
