import { FunctionalComponent } from 'vue';
declare const _default: import("@element-plus/pro-utils").SFCWithInstall<FunctionalComponent<Partial<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor | ArrayConstructor)[];
        default: string;
    };
    mode: {
        type: import("vue").PropType<"read" | "edit">;
        default: string;
    };
    valueType: {
        type: import("vue").PropType<"text" | "password" | "textarea" | "date" | "dates" | "dateTime" | "dateWeek" | "dateMonth" | "dateYear" | "dateRange" | "dateTimeRange" | "dateMonthRange" | "time" | "timeRange" | "timeSelect" | "select" | "treeSelect" | "checkbox" | "radio" | "radioButton" | "switch" | "avatar" | "image" | "rate" | "color" | "cascader" | "slider" | "progress">;
        default: string;
    };
    placeholder: {
        type: (StringConstructor | import("vue").PropType<[string] | [string, string]>)[];
    };
    fieldProps: {
        type: import("vue").PropType<Record<string, unknown>>;
        default: {};
    };
}>>, {}, any>> & Record<string, any>;
export default _default;
