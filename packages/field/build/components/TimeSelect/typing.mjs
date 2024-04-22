import { CircleClose, Clock } from "@element-plus/icons-vue";
import { useSizeProp } from "element-plus";
const proFieldTimeSelectProps = {
  format: {
    type: String,
    default: "HH:mm"
  },
  modelValue: String,
  disabled: Boolean,
  editable: {
    type: Boolean,
    default: true
  },
  effect: {
    type: String,
    default: "light"
  },
  clearable: {
    type: Boolean,
    default: true
  },
  size: useSizeProp,
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
    default: () => Clock
  },
  clearIcon: {
    type: [String, Object],
    default: () => CircleClose
  },
  style: {
    type: Object,
    default: {}
  }
};
export {
  proFieldTimeSelectProps
};
//# sourceMappingURL=typing.mjs.map