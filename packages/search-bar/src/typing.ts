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
	// 最大显示表单项，溢出隐藏
	span?: number;
};

export type SearchBarFormItem = {
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

export type SearchBarActions = JSX.Element | JSX.Element[] | BottonConfig | BottonConfig[];

export type SearchBarRightTools = JSX.Element | JSX.Element[] | BottonConfig | BottonConfig[];

type BottonConfig = Partial<ButtonProps & { content: string }>;
