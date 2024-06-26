/*
 * @Description:
 * @Date: 2024-04-15 09:39:26
 * @LastEditTime: 2024-06-26 21:46:45
 */
import type { ProFieldType } from '@element-plus/pro-field';
import { ValueEnum, ValueOption } from '@element-plus/pro-types';
import type { FormItemProps } from 'element-plus';
import { formProps as elFormProps } from 'element-plus';
import { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import { ActionsProps } from './Actions';

const commonFormProps = {
	modelValue: {
		type: Object as PropType<{ [x: string]: any }>,
	},
	items: {
		type: Array as PropType<ProFormItem[]>,
		default: [],
	},
	layout: {
		type: String as PropType<'horizontal' | 'vertical' | 'inline'>,
		default: 'horizontal',
	},
	readonly: {
		type: Boolean,
		default: void 0,
	},
	required: {
		type: Boolean,
		default: void 0,
	},
	labelStyle: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
	emptyText: {
		type: String,
		default: '--',
	},
	request: {
		type: Function as PropType<() => Promise<{ [x: string]: any }>>,
	},
	loading: {
		type: Boolean,
	},
	actions: {
		type: [Boolean, Object] as PropType<Actions>,
		default: true,
	},
};

export const generateFormProps = {
	...elFormProps,
	...commonFormProps,
	labelWidth: {
		type: [String, Number] as PropType<'auto' | number>,
		default: 'auto',
	},
	type: {
		type: String as PropType<'dialog-form' | 'drawer-form' | 'search-form'>,
	},
};

export type ProFormItem = Omit<FormItemProps, 'prop' | 'label'> & {
	key?: string;
	label?: string | (() => JSX.Element);
	dataField?: string;
	readonly?: boolean;
	valueType?: ProFormValueType;
	valueEnum?: ValueEnum;
	valueOptions?: ValueOption[];
	defaultValue?: string | number | boolean | any[];
	fieldProps?: Record<string, any>;
	hide?: boolean | FormItemPropertyFunction<boolean>;
	render?: () => JSX.Element;
};

/**
 * 通用函数类型
 */
type FormItemPropertyFunction<T> = (entity: Record<string, any>, items: ProFormItem[]) => T;

export type ProFormValueType = ProFieldType;

export type Actions = boolean | ActionsProps;

export type CommonFormProps = Partial<ExtractPropTypes<typeof commonFormProps>>;

export type GenerateFormProps = Partial<ExtractPropTypes<typeof generateFormProps>>;
