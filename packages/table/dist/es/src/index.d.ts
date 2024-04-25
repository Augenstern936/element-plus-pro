import * as _element_plus_pro_utils from '@element-plus/pro-utils';
import { PropType, CSSProperties, ExtractPropTypes, FunctionalComponent } from 'vue';
import { ButtonProps } from 'element-plus';
import { JSX } from 'vue/jsx-runtime';

declare enum ValueTypeEnum {
    'index' = 0,
    'text' = 1,
    'password' = 2,
    'textarea' = 3,
    'date' = 4,
    'dates' = 5,
    'dateTime' = 6,
    'dateWeek' = 7,
    'dateMonth' = 8,
    'dateYear' = 9,
    'dateRange' = 10,
    'dateTimeRange' = 11,
    'dateMonthRange' = 12,
    'time' = 13,
    'timeRange' = 14,
    'timeSelect' = 15,
    'select' = 16,
    'treeSelect' = 17,
    'checkbox' = 18,
    'radio' = 19,
    'radioButton' = 20,
    'switch' = 21,
    'rate' = 22,
    'image' = 23,
    'avatar' = 24,
    'color' = 25,
    'cascader' = 26,
    'progress' = 27,
    'slider' = 28,
    'tag' = 29,
    'action' = 30
}
/**
 * 分页器水平位置
 */
declare enum PaginationAlignEnum {
    'left' = 0,
    'right' = 1,
    'center' = 2
}
/**
 * 状态颜色
 */
declare enum StatusColorEnum {
    'Success' = "#67C23A",
    'Error' = "#e52848",
    'Processing' = "#409EFF",
    'Warning' = "#E6A23C",
    'Default' = "#dcdcf240"
}

declare const proTableProps: {
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    ghost: {
        type: BooleanConstructor;
        default: boolean;
    };
    keepAlive: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: StringConstructor;
    cellAlign: {
        type: PropType<GlobalCellAlign>;
        default: string;
    };
    headerCellStyle: {
        type: PropType<CSSProperties>;
        default: {};
    };
    columns: {
        type: PropType<TableColumns[]>;
        required: boolean;
    };
    columnEmptyText: {
        type: (BooleanConstructor | StringConstructor)[];
        default: string;
    };
    defaultSize: {
        type: NumberConstructor;
        default: number;
    };
    ellipsis: {
        type: BooleanConstructor;
        default: any;
    };
    search: {
        type: (BooleanConstructor | PropType<GlobalSearchConfig>)[];
        default: any;
    };
    toolbar: {
        type: PropType<TableToolbarConfig[]>;
        default: {
            placeholder: string;
            showAction: boolean;
            actionStyle: {};
        };
    };
    options: {
        type: BooleanConstructor;
        default: boolean;
    };
    tableStyle: {
        type: PropType<TableStyle>;
        default: () => void;
    };
    params: {
        type: PropType<Params>;
        default: {};
    };
    pagination: {
        type: (BooleanConstructor | PropType<PaginationConfig>)[];
        default: boolean;
    };
    dataSource: {
        type: PropType<DataSource>;
    };
    request: {
        type: PropType<Request>;
    };
    onSearch: {
        type: PropType<(params: {
            [x: string]: any;
        }) => void>;
    };
    onReset: {
        type: FunctionConstructor;
    };
    onFilter: {
        type: PropType<(e: {
            field: string;
            value: string | number;
        }) => void>;
    };
};
type ProTableProps = ExtractPropTypes<typeof proTableProps>;
type TableColumns = {
    key?: string | number;
    title?: string;
    dataField?: string;
    width?: string | number;
    fixed?: boolean | "left" | "right";
    align?: "left" | "right" | "center";
    tooltip?: string | ((row: {
        [x: string]: any;
    }) => string);
    ellipsis?: boolean;
    hideInTable?: boolean;
    sorter?: boolean;
    copyable?: boolean;
    filters?: boolean | ValueOption;
    search?: boolean | ColumnSearchConfig;
    valueType?: ValueType;
    valueEnum?: ValueEnum;
    children?: TableColumns[];
    render?: (row: {
        [x: string]: any;
    }) => string | number | JSX.Element;
};
type ValueType = keyof typeof ValueTypeEnum;
type ValueOption = {
    label: string;
    value: string | number;
}[];
type ValueEnum = Record<string, string | number | {
    text: string;
    status?: keyof typeof StatusColorEnum;
}>;
type GlobalCellAlign = "left" | "right" | "center";
/**
 * 全局筛选栏配置
 */
interface GlobalSearchConfig {
    maxShow?: number;
    inline?: boolean;
    labelWidth?: number | string;
    rightTools?: ToolbarActions;
}
/**
 * 筛选栏配置
 */
type ColumnSearchConfig = {
    order?: number;
    label?: string;
    labelWidth?: "auto" | number | string;
    placeholder?: string;
    fieldProps?: {
        options?: {
            label: string;
            value: string | number | boolean;
        }[];
        [x: string]: any;
    };
};
/**
 * 工具栏配置
 */
type TableToolbarConfig = {
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
type ToolbarActions = (JSX.Element | ToolbarActionsConfig)[];
type ToolbarActionsConfig = Partial<ButtonProps & {
    content: string;
}>;
/**
 * 表格样式
 */
type TableStyle = {};
/**
 * 用于 request 查询的额外参数，一旦变化会触发重新加载
 */
type Params = {
    current?: number;
    pageSize?: number;
    [x: string]: any;
};
type PaginationConfig = {
    current?: number;
    pageSize?: number;
    align?: PaginationAlign;
    [x: string]: any;
};
type PaginationAlign = keyof typeof PaginationAlignEnum;
/**
 * 表格数据源(最高级别权重)
 */
type DataSource = {
    total: number;
    data: {}[];
};
/**
 * 获取 dataSource 的方法
 */
type Request = (params: {
    current: number;
    pageSize: number;
}, filter: {
    [x: string]: any;
}) => {
    data: {}[];
    total: number;
};
type Ctx = {
    attrs: {};
    emit: (eventName: string, ...args: any) => void;
    slots: any;
    expose: (obj: {
        [x: string]: any;
    }) => void;
};

declare const _default: _element_plus_pro_utils.SFCWithInstall<FunctionalComponent<ProTableProps, {}, any, {}>> & Record<string, any>;

export { type ColumnSearchConfig, type Ctx, type DataSource, type GlobalCellAlign, type GlobalSearchConfig, PaginationAlignEnum, type PaginationConfig, type Params, _default as ProTable, type ProTableProps, type Request, StatusColorEnum, type TableColumns, type TableStyle, type TableToolbarConfig, type ToolbarActions, type ToolbarActionsConfig, type ValueEnum, type ValueOption, type ValueType, ValueTypeEnum, _default as default, proTableProps };
