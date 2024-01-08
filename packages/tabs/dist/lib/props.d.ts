import type { Component, PropType } from 'vue';
import type { TabsPane } from './typing';
declare const _default: {
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
    };
    tabsProps: {
        type: PropType<{
            [x: string]: any;
        }>;
    };
    panes: {
        type: PropType<TabsPane[]>;
        default: any[];
    };
    empty: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor | PropType<JSX.Element | Component>)[];
        default: boolean;
    };
    beforeChange: {
        type: PropType<() => boolean>;
        default: () => boolean;
    };
};
export default _default;
