import type { PropType, CSSProperties } from 'vue';
import type { TableColumns, GlobalSearchConfig, TableToolbarConfig, TableStyle, DataSource, Params, Request, PaginationConfig, GlobalCellAlign } from './typing';
declare const _default: {
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
export default _default;
