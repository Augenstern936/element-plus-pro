import { ValueTypeEnum } from './enum';
import type { ButtonProps } from 'element-plus';
export type ProSearchBarProps = {
    modelValue?: Record<string, string | number | boolean>;
    items: SearchBarFormItem[];
    actions?: SearchBarActions[];
    searchText?: string;
    resetText?: string;
    rightTools?: SearchBarRightTools[];
    inline?: boolean;
    span?: number;
};
export type SearchBarFormItem = {
    dataField: string;
    order?: number;
    label?: string;
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
export type SearchBarActions = JSX.Element | JSX.Element[] | BottonConfig | BottonConfig[];
export type SearchBarRightTools = JSX.Element | BottonConfig;
type BottonConfig = Partial<ButtonProps & {
    content: string;
}>;
export {};
