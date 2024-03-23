import type { CSSProperties } from 'vue';
import type { ButtonProps } from 'element-plus';
import { ValueTypeEnum, StatusColorEnum, PaginationAlignEnum } from './enum';
export type ProTableProps = {
    loading?: boolean;
    ghost?: boolean;
    keepAlive?: boolean;
    title?: string;
    columns: TableColumns[];
    headerCellStyle?: CSSProperties;
    cellAlign?: GlobalCellAlign;
    columnEmptyText?: boolean | string;
    defaultSize?: number;
    ellipsis?: boolean;
    search?: boolean | GlobalSearchConfig;
    toolbar?: TableToolbarConfig[];
    options?: boolean;
    dateFormatter?: string | number;
    tableStyle?: TableStyle;
    params?: Params;
    pagination?: boolean | PaginationConfig;
    dataSource?: DataSource;
    request?: Request;
    onSearch?: (params: {
        [x: string]: any;
    }) => void;
    onReset?: () => void;
    onFilter?: (e: {
        field: string;
        value: string | number;
    }) => void;
};
export type TableColumns = {
    key?: string | number;
    title?: string;
    dataField?: string;
    width?: string | number;
    fixed?: boolean | 'left' | 'right';
    align?: 'left' | 'right' | 'center';
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
export type ValueType = keyof typeof ValueTypeEnum;
export type ValueOption = {
    label: string;
    value: string | number;
}[];
export type ValueEnum = Record<string, string | number | {
    text: string;
    status?: keyof typeof StatusColorEnum;
}>;
export type GlobalCellAlign = 'left' | 'right' | 'center';
/**
 * 全局筛选栏配置
 */
export interface GlobalSearchConfig {
    maxShow?: number;
    inline?: boolean;
    labelWidth?: number | string;
    rightTools?: ToolbarActions;
}
/**
 * 筛选栏配置
 */
export type ColumnSearchConfig = {
    order?: number;
    label?: string;
    labelWidth?: 'auto' | number | string;
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
export type ToolbarActions = (JSX.Element | ToolbarActionsConfig)[];
export type ToolbarActionsConfig = Partial<ButtonProps & {
    content: string;
}>;
/**
 * 表格样式
 */
export type TableStyle = {};
/**
 * 用于 request 查询的额外参数，一旦变化会触发重新加载
 */
export type Params = {
    current?: number;
    pageSize?: number;
    [x: string]: any;
};
export type PaginationConfig = {
    current?: number;
    pageSize?: number;
    align?: PaginationAlign;
    [x: string]: any;
};
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
export type Request = (params: {
    current: number;
    pageSize: number;
}, filter: {
    [x: string]: any;
}) => {
    data: {}[];
    total: number;
};
export type Ctx = {
    attrs: {};
    emit: (eventName: string, ...args: any) => void;
    slots: any;
    expose: (obj: {
        [x: string]: any;
    }) => void;
};
export {};
