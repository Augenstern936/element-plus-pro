import type { ProSearchBarProps } from "@element-plus-ui/pro-form";
import { ButtonProps, ColProps, ElTooltipProps, TreeNode, PaginationProps } from "element-plus";
import type { CSSProperties, ExtractPropTypes, PropType, VNode } from "vue-demi";
import { PaginationAlignEnum } from "./enum";
import { Marker, Request as RequestType, ValueEnum } from "@element-plus-ui/pro-types";
import type { ProFieldType } from "@element-plus-ui/pro-field";

//TODO：element-plus未导出tableProps实体，在这需要自己声明，后续会根据element-plus更新做调整
export const elTableProps = {
  data: {
    type: Array,
    default: void 0
  },
  height: {
    type: [String, Number],
    default: void 0
  },
  maxHeight: {
    type: [String, Number],
    default: void 0
  },
  stripe: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<"" | "large" | "default" | "small">,
    default: "default"
  },
  fit: {
    type: Boolean,
    default: true
  },
  showHeader: {
    type: Boolean,
    default: true
  },
  highlightCurrentRow: {
    type: Boolean,
    default: false
  },
  currentRowkey: {
    type: [String, Number],
    default: void 0
  },
  rowClassName: {
    type: [String, Function as PropType<(data: { row: any; rowIndex: number }) => string>],
    default: ""
  },
  rowStyle: {
    type: [Object, Function] as PropType<CSSProperties | ((data: { row: any; rowIndex: number }) => CSSProperties)>,
    default: {}
  },
  cellClassName: {
    type: [String, Function as PropType<(data: { row: any; column: any; rowIndex: number; columnIndex: number }) => string>],
    default: ""
  },
  cellStyle: {
    type: [Object, Function] as PropType<
      CSSProperties | ((data: { row: any; column: any; rowIndex: number; columnIndex: number }) => CSSProperties)
    >,
    default: {}
  },
  headerRowClassName: {
    type: [String, Function as PropType<(data: { row: any; rowIndex: number }) => string>],
    default: ""
  },
  headerRowStyle: {
    type: [Object, Function] as PropType<CSSProperties | ((data: { row: any; rowIndex: number }) => CSSProperties)>,
    default: {}
  },
  headerCellClassName: {
    type: [String, Function as PropType<(data: { row: any; column: any; rowIndex: number; columnIndex: number }) => string>],
    default: ""
  },
  headerCellStyle: {
    type: [Object, Function] as PropType<
      CSSProperties | ((data: { row: any; column: any; rowIndex: number; columnIndex: number }) => CSSProperties)
    >,
    default: {}
  },
  rowKey: {
    type: [String, Function as PropType<(row: any) => string>],
    default: ""
  },
  emptyText: {
    type: String,
    default: "No Data"
  },
  defaultExpandAll: {
    type: Boolean,
    default: false
  },
  expandRowKeys: {
    type: Array as PropType<string[]>,
    default: void 0
  },
  defaultSort: {
    type: Object as PropType<{
      prop: string;
      order: "ascending" | "descending";
      init?: any;
      silent?: any;
    }>,
    default: void 0
  },
  tooltipEffect: {
    type: String as PropType<"dark" | "light">,
    default: "dark"
  },
  tooltipOptions: {
    type: Object as PropType<
      Pick<
        ElTooltipProps,
        | "effect"
        | "enterable"
        | "hideAfter"
        | "offset"
        | "placement"
        | "popperClass"
        | "popperOptions"
        | "showAfter"
        | "showArrow"
      >
    >,
    default: void 0
  },
  appendFilterPanelTo: {
    type: String,
    default: ""
  },
  showSummary: {
    type: Boolean,
    default: false
  },
  sumText: {
    type: String,
    default: "Sum"
  },
  summaryMethod: {
    type: Function as PropType<(data: { columns: any[]; data: any[] }) => (VNode | string)[]>,
    default: void 0
  },
  spanMethod: {
    type: Function as PropType<
      (data: {
        row: any;
        column: any;
        rowIndex: number;
        columnIndex: number;
      }) => number[] | { rowspan: number; colspan: number } | void
    >,
    default: void 0
  },
  selectOnIndeterminate: {
    type: Boolean,
    default: true
  },
  indent: {
    type: Number,
    default: 16
  },
  lazy: {
    type: Boolean,
    default: false
  },
  load: {
    type: Function as PropType<(row: any, treeNode: TreeNode, resolve: (data: any[]) => void) => void>,
    default: void 0
  },
  treeProps: {
    type: Object as PropType<{ hasChildren?: string; children?: string; checkStrictly?: boolean }>,
    default: { hasChildren: "hasChildren", children: "children", checkStrictly: false }
  },
  tableLayout: {
    type: String as PropType<"fixed" | "auto">,
    default: "fixed"
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: false
  },
  showOverflowTooltip: {
    type: Boolean,
    default: false
  },
  flexible: {
    type: Boolean,
    default: false
  },
  scrollbarTabindex: {
    type: [String, Number],
    default: ""
  }
};

export const proTableProps = {
  ...elTableProps,
  loading: {
    type: Boolean
  },
  ghost: {
    type: Boolean
  },
  title: {
    type: [String, Object] as PropType<string | ProTableTitleConfig>
  },
  cellAlign: {
    type: String as PropType<GlobalCellAlign>,
    default: "left"
  },
  // 列
  columns: {
    type: Array as PropType<TableColumn[]>,
    required: true
  },
  // 格子为空时，默认显示的标记
  cellEmptyText: {
    type: [Boolean, String],
    default: "--"
  },
  // 是否开启超出列宽显示省略号
  ellipsis: {
    type: Boolean,
    default: void 0
  },
  // 全局搜索栏配置(权限低于单列配置)
  search: {
    type: [Boolean, Object as PropType<GlobalSearchConfig>],
    default: void 0
  },
  // 工具栏
  toolbar: {
    type: Object as PropType<TableToolbarConfig[]>,
    default: {
      placeholder: "请输入关键字",
      showAction: true,
      actionStyle: {}
    }
  },
  //
  options: {
    type: Boolean,
    default: true
  },
  index: {
    type: Boolean,
    default: false
  },
  expand: {
    type: Boolean,
    default: false
  },
  selection: {
    type: [Boolean, Object] as PropType<boolean | Record<string, any>>
  },
  action: {
    type: [Boolean, Object] as PropType<boolean | ActionConfig>
  },
  // 获取数据需要的额外参数
  params: {
    type: Object as PropType<Params>,
    default: {}
  },
  pagination: {
    type: [Boolean, Object as PropType<PaginationConfig>],
    default: true
  },
  // 获取数据的方法
  request: {
    type: Function as PropType<Request>
  },
  // 监听查询事件
  onSearch: {
    type: Function as PropType<(params: { [x: string]: any }) => void>
  },
  // 监听重置事件
  onReset: {
    type: Function
  },
  // 监听过滤事件
  onFilter: {
    type: Function as PropType<(e: { field: string; value: string | number }) => void>
  }
};

export type ProTableProps = ExtractPropTypes<typeof proTableProps>;

/**
 *
 */
interface ElTableColumn {
  //type?: "default" | "selection" | "index" | "expand" | "actions";
  index?: number | ((index: number) => number);
  label?: string;
  columnKey?: string;
  prop?: string;
  width?: string | number;
  minWidth?: string | number;
  fixed?: boolean | "left" | "right";
  renderHeader?: (data: { column: any; $index: number }) => void;
  sortable?: boolean | string;
  sortMethod?: <T = any>(a: T, b: T) => number;
  sortBy?: ((row: any, index: number) => string) | string | Array<string>;
  sortOrders?: Array<"ascending" | "descending" | null>;
  resizable?: boolean;
  formatter?: (row: any, column: any, cellValue: any, index: number) => VNode | string;
  showOverflowTooltip?: boolean | object;
  align?: "left" | "center" | "right";
  headerAlign?: "left" | "center" | "right";
  className?: string;
  labelClassName?: string;
  // selectable?: '';
  // reserve-selection?: boolean;
  filters?: Array<{ text: string; value: string }>;
  filterPlacement?:
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end"
    | "right"
    | "right-start"
    | "right-end";
  filterClassName?: string;
  filterMultiple?: boolean;
  filterMethod?: (value: any, row: any, column: any) => void;
  filteredValue?: string[];
}

export interface TableColumn extends Omit<ElTableColumn, "filters"> {
  hideInTable?: boolean;
  ellipsis?: boolean;
  copyable?: boolean; //是否支持复制
  filters?: boolean | Array<{ text: string; value: string }>;
  search?: boolean | ProTableColumnSearchConfig; // 是否在搜索栏中显示该项
  request?: RequestType<ValueEnum>;
  valueType?: ProFieldType; // 当前筛选项输入框类型
  valueEnum?: ValueEnum;
  valueMark?: "tag" | Marker;
  fieldProps?: Record<string, any>;
  children?: TableColumn[]; // 子级
  mappingEnumValue?: "label" | "index";
  render?: (row: object) => string | number | VNode; // 渲染该列对应的值
}

/**
 * 操作列配置
 */
export interface ActionConfig {
  title?: string;
  width?: number;
  fixed?: boolean;
  texts?: string[];
  viewProps?: ButtonProps;
  editProps?: ButtonProps;
  deleteProps?: ButtonProps;
  onView?: (row: Record<string, any>) => void;
  onEdit?: (row: Record<string, any>) => void;
  onDelete?: (row: Record<string, any>) => void;
  onActions?: (e: { index: number; name?: "view" | "edit" | "delete" }, row: Record<string, any>) => void;
  render?: (row: Record<string, any>) => VNode | Array<string | ButtonProps>;
}

export type GlobalCellAlign = "left" | "right" | "center";

/**
 * 全局筛选栏配置
 */
export type GlobalSearchConfig = Omit<ProSearchBarProps, "modelValue" | "columns"> & {
  colSpan?: number | ProTableSearchColConfig;
  onCollapse?: (collapse: boolean) => void;
};

export type ProTableSearchColConfig = {
  xs?: number | Pick<ColProps, "span" | "offset" | "pull" | "push">;
  sm?: number | Pick<ColProps, "span" | "offset" | "pull" | "push">;
  md?: number | Pick<ColProps, "span" | "offset" | "pull" | "push">;
  lg?: number | Pick<ColProps, "span" | "offset" | "pull" | "push">;
  xl?: number | Pick<ColProps, "span" | "offset" | "pull" | "push">;
};

/**
 * 筛选栏配置
 */
export type ProTableColumnSearchConfig = {
  order?: number;
  label?: string;
  labelWidth?: "auto" | number | string;
  placeholder?: string;
  fieldProps?: {
    options?: { label: string; value: string | number | boolean }[];
    [x: string]: any;
  };
};

/**
 * 工具栏配置
 */
export type TableToolbarConfig = {
  search?: boolean | ToolbarSearchConfig;
  actions?: ToolbarActions;
};

interface ToolbarSearchConfig {
  placeholder?: string;
  showAction?: boolean;
  actionText?: string;
  actionStyle?: CSSProperties;
  onChange?: (keywords: string) => void;
  onAction?: (keywords: string) => void;
}

export type ToolbarActions = (VNode | ToolbarActionsConfig)[];

export type ToolbarActionsConfig = Partial<ButtonProps & { content: string }>;

export type ProTableTitleConfig = {
  text: string;
  tooltip?: string;
};

/**
 * 用于 request 查询的额外参数，一旦变化会触发重新加载
 */
export type Params = {
  current?: number;
  pageSize?: number;
  [x: string]: any;
};

export interface PaginationConfig extends Partial<PaginationProps> {
  current?: number;
  pageSize?: number;
  align?: PaginationAlign;
  [x: string]: any;
}

type PaginationAlign = keyof typeof PaginationAlignEnum;

/**
 * 表格数据源(最高级别权重)
 */
export type DataSource = {
  total: number;
  data: {}[];
};

/**
 * 获取 dataSource 的方法
 */
export type Request = (
  params: { current: number; pageSize: number },
  filter: { [x: string]: any }
) => {
  list: {}[];
  total: number;
};
