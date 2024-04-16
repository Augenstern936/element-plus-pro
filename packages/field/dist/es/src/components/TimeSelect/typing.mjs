import { Clock as e, CircleClose as t } from "@element-plus/icons-vue";
import { useSizeProp as l } from "element-plus";
const a = {
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
  size: l,
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
    default: () => e
  },
  clearIcon: {
    type: [String, Object],
    default: () => t
  },
  style: {
    type: Object,
    default: {}
  }
};
export {
  a as proFieldTimeSelectProps
};
