import { defineComponent, computed, createVNode, mergeProps } from "vue";
import { ElSelect, ElOption } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/option.scss.mjs";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/select.scss.mjs";
const ProFieldSelect = /* @__PURE__ */ defineComponent((props, ctx) => {
  const state = computed({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      ctx.emit("update:modelValue", value);
    }
  });
  return () => createVNode(ElSelect, {
    "modelValue": state.value,
    "onUpdate:modelValue": ($event) => state.value = $event
  }, {
    default: () => {
      var _a;
      return [(_a = props.options) == null ? void 0 : _a.map((option, index) => createVNode(ElOption, mergeProps(option, {
        "key": index
      }), {
        default: () => [option.label]
      }))];
    }
  });
}, {
  name: "ProFieldSelect"
});
const ProFieldSelect$1 = ProFieldSelect;
export {
  ProFieldSelect,
  ProFieldSelect$1 as default
};
