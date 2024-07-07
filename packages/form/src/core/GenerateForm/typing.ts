/*
 * @Description:
 * @Date: 2024-04-15 09:39:26
 * @LastEditTime: 2024-07-06 22:57:42
 */
import type { ProFieldType } from '@element-plus/pro-field';
import { ProRequestData, ValueEnum, ValueOption } from '@element-plus/pro-types';
import type { FormItemProps } from 'element-plus';
import { formProps as elFormProps } from 'element-plus';
import { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import { ActionsProps } from './Actions';
import { ProButtonProps } from 'packages/button/es';

const commonFormProps = {
	modelValue: {
		type: Object as PropType<{ [x: string]: any }>,
	},
	title: {
		type: String,
	},
	columns: {
		type: Array as PropType<ProFormColumns[]>,
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
	params: {
		type: Object as PropType<Record<string, any>>,
		default: {},
	},
	request: {
		type: Function as PropType<ProRequestData<Record<string, any>>>,
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
	type: {
		type: String as PropType<'default' | 'dialog-form' | 'drawer-form' | 'steps-form' | 'search-form'>,
	},
	labelWidth: {
		type: [String, Number] as PropType<'auto' | number>,
		default: 'auto',
	},
	trigger: {
		type: Object as PropType<ProButtonProps>,
	},
};

export type ProFormColumns = Omit<FormItemProps, 'prop' | 'label'> & {
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
type FormItemPropertyFunction<T> = (entity: Record<string, any>, items: ProFormColumns[]) => T;

export type ProFormValueType = ProFieldType;

export type Actions = boolean | ActionsProps;

export type CommonFormProps = Partial<ExtractPropTypes<typeof commonFormProps>>;

export type GenerateFormProps = Partial<ExtractPropTypes<typeof generateFormProps>>;
