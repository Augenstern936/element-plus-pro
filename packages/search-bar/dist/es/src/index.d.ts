import * as _element_plus_pro_utils from '@element-plus/pro-utils';
import { FunctionalComponent } from 'vue';
import { ButtonProps } from 'element-plus';
import { JSX } from 'vue/jsx-runtime';

declare enum ValueTypeEnum {
    'text' = 0,
    'password' = 1,
    'textarea' = 2,
    'date' = 3,
    'dates' = 4,
    'dateTime' = 5,
    'dateWeek' = 6,
    'dateMonth' = 7,
    'dateYear' = 8,
    'dateRange' = 9,
    'dateTimeRange' = 10,
    'dateMonthRange' = 11,
    'time' = 12,
    'timeRange' = 13,
    'select' = 14,
    'treeSelect' = 15,
    'checkbox' = 16,
    'radio' = 17,
    'radioButton' = 18,
    'switch' = 19,
    'rate' = 20,
    'color' = 21,
    'cascader' = 22,
    'slider' = 23
}

type ProSearchBarProps = {
    modelValue?: Record<string, string | number | boolean>;
    items: SearchBarFormItem[];
    actions?: SearchBarActions[];
    searchText?: string;
    resetText?: string;
    rightTools?: SearchBarRightTools[];
    inline?: boolean;
    span?: number;
    onSearch?: () => void;
    onTools?: (i: number) => void;
};
type SearchBarFormItem = {
    dataField: string;
    order?: number;
    label?: string;
    labelWidth?: string | number;
    placeholder?: string;
    valueType?: SearchBarValueType;
    valueOptions?: SearchBarValueOption[];
};
type SearchBarValueType = keyof typeof ValueTypeEnum;
type SearchBarValueOption = {
    label: string;
    value: string | number | boolean;
};
type SearchBarActions = JSX.Element | JSX.Element[] | BottonConfig | BottonConfig[];
type SearchBarRightTools = JSX.Element | BottonConfig;
type BottonConfig = Partial<ButtonProps & {
    content: string;
}>;

declare const _default: _element_plus_pro_utils.SFCWithInstall<FunctionalComponent<ProSearchBarProps & {
    [x: string]: any;
}, {}, any, {}>> & Record<string, any>;

export { _default as ProSearchBar, type ProSearchBarProps, type SearchBarActions, type SearchBarFormItem, type SearchBarRightTools, type SearchBarValueOption, type SearchBarValueType, ValueTypeEnum, _default as default };
