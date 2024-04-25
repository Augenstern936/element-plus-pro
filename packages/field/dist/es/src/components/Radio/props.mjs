import { radioProps as t } from "element-plus";
const e = {
  ...t,
  type: {
    type: String,
    default: "radio"
  },
  options: {
    type: Array,
    default: []
  },
  style: {
    type: Object,
    default: {}
  }
};
export {
  e as proFieldRadioProps
};
