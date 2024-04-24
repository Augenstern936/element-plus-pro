import { defineComponent, computed, createVNode, mergeProps } from "vue";
import { ElTreeSelect } from "element-plus";
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
