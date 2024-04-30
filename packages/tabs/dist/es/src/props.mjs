const e = {
  modelValue: {
    type: [String, Number]
  },
  tabsProps: {
    type: Object
  },
  panes: {
    type: Array,
    default: []
  },
  empty: {
    type: [Boolean, String, Number, Object],
    default: !0
  },
  beforeChange: {
    type: Function,
    default: () => !0
  }
};
export {
  e as default
};
