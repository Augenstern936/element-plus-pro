import { PropType } from 'vue';
import { SearchBarItem, SearchBarAction } from './typing';
declare const _default: {
    modelValue: {
        type: PropType<{
            [x: string]: string | number | boolean;
        }>;
        default: () => {};
    };
    items: {
        type: PropType<SearchBarItem[]>;
        default: any[];
    };
    searchText: {
        type: StringConstructor;
        default: string;
    };
    resetText: {
        type: StringConstructor;
        default: string;
    };
    actions: {
        type: PropType<SearchBarAction[]>;
    };
    toolbar: {
        type: (BooleanConstructor | PropType<SearchBarAction[]>)[];
        default: any[];
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    span: {
        type: NumberConstructor;
        default: number;
    };
    onSearch: {
        type: FunctionConstructor;
    };
    onTools: {
        type: FunctionConstructor;
    };
};
export default _default;
