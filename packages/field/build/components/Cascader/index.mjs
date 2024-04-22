import { ElCascader } from "element-plus";
import "element-plus/theme-chalk/src/cascader.scss";
import { computed, defineComponent } from "vue";
import { proFieldCascaderProps } from "./typing";
const ProFieldCascader = defineComponent(
  (props, ctx) => {
    const state = computed({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => /* @__PURE__ */ React.createElement(ElCascader, { "v-model": state.value, ...props });
  },
  {
    name: "ProFieldCascader"
  }
);
ProFieldCascader.props = proFieldCascaderProps;
export * from "./typing";
var Cascader_default = ProFieldCascader;
export {
  ProFieldCascader,
  Cascader_default as default
};
//# sourceMappingURL=index.mjs.map