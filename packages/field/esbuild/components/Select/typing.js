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
  }
};
export {
  proFieldCheckboxProps
};
