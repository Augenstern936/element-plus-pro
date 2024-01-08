import { ColumnTypeEnum, PaginationAlignEnum } from './enum';
export type ProTableProps = {
    loading?: boolean;
    keepAlive?: boolean;
    headerTitle?: string;
    columns: TableColumns[];
    columnEmptyText: boolean | string;
    defaultSize?: number;
    ellipsis?: boolean;
    search?: boolean | GlobalSearchConfig;
    toolbar?: boolean | ToolbarConfig[];
    options?: boolean;
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
    title?: string;
    dataField?: string;
    type?: ColumnType;
    width?: string | number;
    fixed?: boolean | 'left' | 'right';
    align?: 'left' | 'right' | 'center';
    tooltip?: string | ((row: {
        [x: string]: any;
    }) => string);
    ellipsis?: boolean;
    hideInTable?: boolean;
    sorter?: boolean;
    filters?: boolean | ValueOption;
    search?: boolean | ColumnSearchConfig;
    valueType?: ValueType;
    valueOption?: ValueOption;
    children?: TableColumns[];
    render?: (row: {
        [x: string]: any;
    }) => string | number | JSX.Element;
};
export type ColumnType = keyof typeof ColumnTypeEnum;
export type ValueType = 'input' | 'select' | 'date' | 'datetime' | 'datetimerange' | 'checkbox';
export type ValueOption = {
    label: string;
    value: string | number;
}[];
/**
 * 全局筛选栏配置
 */
export interface GlobalSearchConfig {
    maxShow?: number;
    inline?: boolean;
    labelWidth?: number | string;
}
/**
 * 筛选栏配置
 */
export type ColumnSearchConfig = {
    order?: number;
    label?: string;
    labelWidth?: 'auto' | number | string;
    placeholder?: string;
};
/**
 * 工具栏配置
 */
export type ToolbarConfig = Element | {
    text: string;
    icon?: JSX.Element;
    type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
};
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
