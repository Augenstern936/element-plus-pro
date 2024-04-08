import type { ButtonProps } from 'element-plus';
export interface ProButtonProps extends Partial<ButtonProps> {
    tip?: string | TipConfig;
    render?: string;
}
export interface TipConfig {
    mode?: 'message-box' | 'popconfirm';
    text: string;
    before?: () => boolean;
}
