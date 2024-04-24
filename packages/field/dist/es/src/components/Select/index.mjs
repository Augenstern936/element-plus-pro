import { defineComponent as d, computed as u, createVNode as a, mergeProps as n } from "vue";
import { ElSelect as i, ElOption as p } from "element-plus";
import "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.4.1_vue@3.3.7/node_modules/element-plus/theme-chalk/src/option.scss.mjs";
import "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.4.1_vue@3.3.7/node_modules/element-plus/theme-chalk/src/select.scss.mjs";
const c = /* @__PURE__ */ d((t, m) => {
  const l = u({
    get: () => t.modelValue,
    set: (e) => {
      m.emit("update:modelValue", e);
    }
  });
  return () => a(i, {
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, {
    default: () => {
      var e;
      return [(e = t.options) == null ? void 0 : e.map((o, r) => a(p, n(o, {
        key: r
      }), {
        default: () => [o.label]
      }))];
    }
  });
}, {
  name: "ProFieldSelect"
}), S = c;
export {
  c as ProFieldSelect,
  S as default
};
