const e = {
  modelValue: {
    type: Object,
    default: () => ({})
  },
  items: {
    type: Array,
    default: []
  },
  searchText: {
    type: String,
    default: "查询"
  },
  resetText: {
    type: String,
    default: "重置"
  },
  actions: {
    type: Array
  },
  rightTools: {
    type: Array,
    default: []
  },
  inline: {
    type: Boolean,
    default: !0
  },
  // 最大显示表单项，溢出隐藏
  span: {
    type: Number,
    default: 3
  },
  onSearch: {
    type: Function
  },
  onTools: {
    type: Function
  }
};
export {
  e as default
};
