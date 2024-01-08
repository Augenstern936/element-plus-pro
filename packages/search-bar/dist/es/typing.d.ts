import { ValueTypeEnum } from './enum';
import type { ButtonType } from 'element-plus';
export type ProSearchBarProps = {
    modelValue?: Record<string, string | number | boolean>;
    items: SearchBarItem[];
    actions?: SearchBarAction[];
    searchText?: string;
    resetText?: string;
    toolbar?: boolean | SearchBarAction[];
    inline?: boolean;
    span?: number;
};
export type SearchBarItem = {
    field: string;
    order?: number;
    label: string;
    labelWidth?: string | number;
    placeholder?: string;
    valueType?: SearchBarValueType;
    valueOptions?: SearchBarValueOption[];
};
export type SearchBarValueType = keyof typeof ValueTypeEnum;
export type SearchBarValueOption = {
    label: string;
    value: string | number | boolean;
};
export type SearchBarAction = JSX.Element | ActionConfig;
type ActionConfig = {
    text: string;
    type?: ButtonType;
};
export {};
