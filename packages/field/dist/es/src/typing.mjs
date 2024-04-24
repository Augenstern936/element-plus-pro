const e = {
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: ""
  },
  mode: {
    type: String,
    default: "edit"
  },
  valueType: {
    type: String,
    default: "text"
  },
  placeholder: {
    type: [String, Array]
  },
  fieldProps: {
    type: Object,
    default: {}
  }
};
export {
  e as proFieldProps
};
