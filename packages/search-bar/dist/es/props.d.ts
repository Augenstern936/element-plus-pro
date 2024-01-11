import { PropType } from 'vue';
import { SearchBarItem, SearchBarActions, SearchBarRightTools } from './typing';
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
        type: PropType<SearchBarActions[]>;
    };
    rightTools: {
        type: PropType<SearchBarRightTools[]>;
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
