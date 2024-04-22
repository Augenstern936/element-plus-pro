import { ElTreeSelect } from "element-plus";
import "element-plus/theme-chalk/src/tree-select.scss";
import { computed, defineComponent } from "vue";
const ProFieldTreeSelect = defineComponent(
  (props, ctx) => {
    const state = computed({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => /* @__PURE__ */ React.createElement(ElTreeSelect, { "v-model": state.value, ...props });
  },
  {
    name: "ProFieldTreeSelect"
  }
);
export * from "./typing";
var TreeSelect_default = ProFieldTreeSelect;
export {
  ProFieldTreeSelect,
  TreeSelect_default as default
};
//# sourceMappingURL=index.mjs.map