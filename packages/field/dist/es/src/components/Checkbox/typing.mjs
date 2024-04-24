import { checkboxProps as e } from "element-plus";
const o = {
  ...e,
  type: {
    type: String,
    default: "checkbox"
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
  o as proFieldCheckboxProps
};
