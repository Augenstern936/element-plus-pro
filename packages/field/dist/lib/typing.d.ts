import components from './components';
import type { ExtractPropTypes, PropType } from 'vue';
export declare const proFieldProps: {
    modelValue: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor | ArrayConstructor)[];
        default: string;
    };
    mode: {
        type: PropType<"read" | "edit">;
        default: string;
    };
    valueType: {
        type: PropType<"text" | "password" | "textarea" | "date" | "dates" | "dateTime" | "dateWeek" | "dateMonth" | "dateYear" | "dateRange" | "dateTimeRange" | "dateMonthRange" | "time" | "timeRange" | "timeSelect" | "select" | "treeSelect" | "checkbox" | "radio" | "radioButton" | "switch" | "avatar" | "image" | "rate" | "color" | "cascader" | "slider" | "progress">;
        default: string;
    };
    placeholder: {
        type: (StringConstructor | PropType<[string] | [string, string]>)[];
    };
    fieldProps: {
        type: PropType<Record<string, unknown>>;
        default: {};
    };
};
export type ValueType = keyof typeof components;
export type ProFieldProps = Partial<ExtractPropTypes<typeof proFieldProps>>;
