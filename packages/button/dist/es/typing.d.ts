import type { ButtonProps } from 'element-plus';
import { PropType } from 'vue';
declare const _default: {
    type: {
        type: PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown>>;
    };
    size: {
        type: PropType<Size>;
        default: string;
    };
    link: {
        type: BooleanConstructor;
        default: boolean;
    };
    text: {
        type: BooleanConstructor;
        default: boolean;
    };
    tip: {
        type: StringConstructor;
        default: string;
    };
};
export default _default;
export type ProButtonProps = {
    tip: string;
} & Omit<ButtonProps, ''>;
export type Size = 'default' | 'large' | 'small';
