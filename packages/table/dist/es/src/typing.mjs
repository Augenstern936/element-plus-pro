const e = {
  loading: {
    type: Boolean,
    default: !1
  },
  ghost: {
    type: Boolean,
    default: !1
  },
  // 是否开启缓存模式
  keepAlive: {
    type: Boolean,
    default: !1
  },
  title: String,
  cellAlign: {
    type: String,
    default: "left"
  },
  headerCellStyle: {
    type: Object,
    default: {}
  },
  // 列
  columns: {
    type: Array,
    required: !0
  },
  // 为空时，默认显示的标记
  columnEmptyText: {
    type: [Boolean, String],
    default: "-"
  },
  // 默认分页大小
  defaultSize: {
    type: Number,
    default: 10
  },
  // 是否开启超出列宽显示省略号
  ellipsis: {
    type: Boolean,
    default: void 0
  },
  // 全局搜索栏配置(权限低于单列配置)
  search: {
    type: [Boolean, Object],
    default: void 0
  },
  // 工具栏
  toolbar: {
    type: Object,
    default: {
      placeholder: "请输入关键字",
      showAction: !0,
      actionStyle: {}
    }
  },
  //
  options: {
    type: Boolean,
    default: !0
  },
  // 样式
  tableStyle: {
    type: Object,
    default: () => {
    }
  },
  // 获取数据需要的额外参数
  params: {
    type: Object,
    default: {}
  },
  pagination: {
    type: [Boolean, Object],
    default: !0
  },
  // 数据源
  dataSource: {
    type: Object
  },
  // 获取数据的方法
  request: {
    type: Function
  },
  // 监听查询事件
  onSearch: {
    type: Function
  },
  // 监听重置事件
  onReset: {
    type: Function
  },
  // 监听过滤事件
  onFilter: {
    type: Function
  }
};
export {
  e as proTableProps
};
