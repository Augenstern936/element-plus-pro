import { checkboxProps } from "element-plus";
const proFieldCheckboxProps = {
  ...checkboxProps,
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
  proFieldCheckboxProps
};
