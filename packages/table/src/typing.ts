import type { ProSearchBarProps } from "@element-plus-ui/pro-form";
import { ColProps, ElTooltipProps, TreeNode, PaginationProps } from "element-plus";
import type { CSSProperties, ExtractPropTypes, PropType, VNode } from "vue-demi";
import { PaginationAlignEnum } from "./enum";
import { Marker, Request as RequestType, ValueEnum } from "@element-plus-ui/pro-types";
import type { ProFieldType } from "@element-plus-ui/pro-field";
import { ProButtonProps } from "@element-plus-ui/pro-button";
import { TableToolbarProps, ToolBarTitle } from "./components/ToolBar/typing";

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
    type: [String, Object] as PropType<ToolBarTitle>
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
    type: Object as PropType<TableToolbarProps>,
    default: {
      search: {
        placeholder: "请输入关键字",
        button: true
      }
    }
  },
  //
  options: {
    type: Boolean,
    default: true
  },
  crud: {
    type: [Boolean, Object] as PropType<boolean | CrudConfig>,
    default: true
  },
  // 获取数据需要的额外参数
  params: {
    type: Object as PropType<Params>,
    default: {}
  },
  dargSort: {
    type: [Boolean, Object] as PropType<boolean | DargSortConfig>,
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
export interface ElTableColumnProps {
  type?: "default" | "selection" | "index" | "expand";
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

export interface TableColumn extends Omit<ElTableColumnProps, "type" | "filters"> {
  type?: "default" | "selection" | "index" | "expand" | "dargSort" | ProFieldType;
  ellipsis?: boolean;
  copyable?: boolean; //是否支持复制
  filters?: boolean | Array<{ text: string; value: string }>;
  search?: boolean | ProTableColumnSearchConfig; // 是否在搜索栏中显示该项
  hideInSearch?: boolean;
  hideInTable?: boolean;
  hideInForm?: boolean;
  hideInDescriptions?: boolean;
  request?: RequestType<ValueEnum>;
  valueEnum?: ValueEnum;
  valueMark?: "tag" | Marker;
  fieldProps?: Record<string, any>;
  children?: TableColumn[]; // 子级
  mappingEnumValue?: "label" | "index";
  render?: (row: object) => string | number | VNode | Array<string | number | VNode>; // 渲染该列对应的值
}

export type ProTableColumn = ElTableColumnProps | ImgColumnConfig | OptionColumnConfig;

interface CommomColumnConfig extends Omit<ElTableColumnProps, "type" | "filters"> {
  search?: boolean | ProTableColumnSearchConfig; // 是否在搜索栏中显示该项
  hideInSearch?: boolean;
  hideInTable?: boolean;
  hideInForm?: boolean;
  children?: TableColumn[]; // 子级
  render?: (row: object) => string | number | VNode; // 渲染该列对应的值
}

interface OptionColumnConfig extends CommomColumnConfig {
  type: Extract<ProFieldType, "select" | "radio" | "radioButton" | "checkbox" | "checkboxButton" | "virtualizedSelect">;
  filters?: boolean | Array<{ text: string; value: string }>;
  request?: RequestType<ValueEnum>;
  valueEnum?: ValueEnum;
  valueMark?: "tag" | Marker;
  fieldProps?: Record<string, any>;
  mappingEnumValue?: "label" | "index";
}

interface ImgColumnConfig extends CommomColumnConfig {
  type: Extract<ProFieldType, "uploadImage" | "uploadAvatar">;
  fieldProps?: Record<string, any>;
}

export interface CrudConfig {
  texts?: [string] | [string, string] | [string, string, string] | [string, string, string, string];
  column?: Omit<ElTableColumnProps, "type" | "filters">;
  rudButton?: ProButtonProps;
  createButton?: boolean | ProButtonProps;
  readButton?: boolean | ProButtonProps | ((row: Record<string, any>) => boolean | ProButtonProps);
  updateButton?: boolean | ProButtonProps | ((row: Record<string, any>) => boolean | ProButtonProps);
  deleteButton?: boolean | ProButtonProps | ((row: Record<string, any>) => boolean | ProButtonProps);
  onCreate?: (e: { open: Function }) => void;
  onRead?: (row: Record<string, any>, e: { open: Function }) => void | Promise<{ [x: string]: any }>;
  onUpdate?: (row: Record<string, any>, e: { open: Function }) => void | Promise<{ [x: string]: any }>;
  onCreateConfirm?: (entity: Record<string, any>, close: Function) => void;
  onUpdateConfirm?: (entity: Record<string, any>, close: Function) => void;
  onDeleteConfirm?: (entity: Record<string, any>) => void;
}

export interface DargSortConfig {
  position?: string;
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
 * 用于 request 查询的额外参数，一旦变化会触发重新加载
 */
export type Params = {
  current?: number;
  pageSize?: number;
  [x: string]: any;
};

export interface PaginationConfig extends Partial<PaginationProps> {
  align?: PaginationAlign;
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
