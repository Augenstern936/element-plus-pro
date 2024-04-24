import { defineComponent, computed, createVNode, mergeProps } from "vue";
import { ElTreeSelect } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/tree-select.scss.mjs";
const ProFieldTreeSelect = /* @__PURE__ */ defineComponent((props, ctx) => {
  const state = computed({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      ctx.emit("update:modelValue", value);
    }
  });
  return () => createVNode(ElTreeSelect, mergeProps({
    "modelValue": state.value,
    "onUpdate:modelValue": ($event) => state.value = $event
  }, props), null);
}, {
  name: "ProFieldTreeSelect"
});
export {
  ProFieldTreeSelect,
  ProFieldTreeSelect as default
};
