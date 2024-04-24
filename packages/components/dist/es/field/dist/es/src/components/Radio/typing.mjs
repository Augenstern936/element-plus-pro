import { radioProps } from "element-plus";
const proFieldRadioProps = {
  ...radioProps,
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
  proFieldRadioProps
};
