/*
 * @Description:
 * @Date: 2024-04-25 09:53:37
 * @LastEditTime: 2024-04-25 16:43:13
 */
import type { ButtonProps } from "element-plus";
import { JSX } from "vue/jsx-runtime";
import { ValueTypeEnum } from "./enum";

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
	onSearch?: () => void;
	onTools?: (i: number) => void;
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

type BottonConfig = Partial<ButtonProps & { content: string }>;
