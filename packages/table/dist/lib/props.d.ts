import type { PropType } from 'vue';
import type { TableColumns, GlobalSearchConfig, ToolbarConfig, TableStyle, DataSource, Params, Request } from './typing';
declare const _default: {
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    keepAlive: {
        type: BooleanConstructor;
        default: boolean;
    };
    headerTitle: {
        type: StringConstructor;
        default: string;
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
        type: (BooleanConstructor | PropType<ToolbarConfig[]>)[];
        default: {
            text: string;
            type: string;
            icon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
        }[];
    };
    options: {
        type: BooleanConstructor[];
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
        type: (BooleanConstructor | PropType<{
            [x: string]: any;
        }>)[];
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
