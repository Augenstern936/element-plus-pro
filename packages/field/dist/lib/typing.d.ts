import { ExtractPropTypes } from 'vue';
import { default as components } from './components';

export declare const proFieldProps: {
    modelValue: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor | ArrayConstructor)[];
        default: string;
    };
    mode: {
        type: PropType<"read" | "edit">;
        default: string;
    };
    valueType: {
        type: PropType<string | number | symbol>;
        default: string;
    };
    placeholder: {
        type: any[];
    };
    fieldProps: {
        type: PropType<Record<string, unknown>>;
        default: {};
    };
};
export type ValueType = keyof typeof components;
export type ProFieldProps = Partial<ExtractPropTypes<typeof proFieldProps>>;
