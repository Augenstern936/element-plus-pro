import { ValueTypeEnum } from './enum';
import type { ButtonType } from 'element-plus';

export type ProSearchBarProps = {
	modelValue?: Record<string, string | number | boolean>;
	items: SearchBarItem[];
	actions?: SearchBarAction[];
	toolbar?: boolean | SearchBarAction[];
	inline?: boolean;
	// 最大显示表单项，溢出隐藏
	maxShow?: number;
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
