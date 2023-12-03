import type { ButtonProps, ButtonType } from 'element-plus';
import { PropType } from 'vue';

export default {
    type: {
        type: String as PropType<ButtonType>,
    },
    size: {
        type: String as PropType<Size>,
        default: 'default',
    },
    link: {
        type: Boolean,
        default: false,
    },
    text: {
        type: Boolean,
        default: false,
    },
    tip: {
        type: String,
        default: '',
    },
};

export type ProButtonProps = {
    tip: string;
} & Omit<ButtonProps, ''>;

export type Size = 'default' | 'large' | 'small';
