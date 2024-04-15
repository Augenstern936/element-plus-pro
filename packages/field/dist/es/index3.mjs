import { defineComponent as o, computed as a, createVNode as i, mergeProps as n } from "vue";
import { useSizeProp as m, ElTimeSelect as d } from "element-plus";
import { Clock as u, CircleClose as p } from "@element-plus/icons-vue";
const c = {
  format: {
    type: String,
    default: "HH:mm"
  },
  modelValue: String,
  disabled: Boolean,
  editable: {
    type: Boolean,
    default: !0
  },
  effect: {
    type: String,
    default: "light"
  },
  clearable: {
    type: Boolean,
    default: !0
  },
  size: m,
  placeholder: String,
  start: {
    type: String,
    default: "09:00"
  },
  end: {
    type: String,
    default: "18:00"
  },
  step: {
    type: String,
    default: "00:30"
  },
  minTime: String,
  maxTime: String,
  name: String,
  prefixIcon: {
    type: [String, Object],
    default: () => u
  },
  clearIcon: {
    type: [String, Object],
    default: () => p
  },
  style: {
    type: Object,
    default: {}
  }
}, f = /* @__PURE__ */ o((t, r) => {
  const l = a({
    get: () => t.modelValue,
    set: (e) => {
      r.emit("upTime:modelValue", e);
    }
  });
  return () => i(d, n({
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, t), null);
}, {
  name: "ProFieldTimeSelect"
});
f.props = c;
export {
  f as ProFieldTimeSelect,
  f as default,
  c as proFieldTimeSelectProps
};
