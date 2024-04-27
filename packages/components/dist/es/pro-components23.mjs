import { radioProps as t } from "element-plus";
const o = {
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
  o as proFieldRadioProps
};
