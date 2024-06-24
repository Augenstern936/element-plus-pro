/*
 * @Description:
 * @Date: 2024-04-15 09:39:26
 * @LastEditTime: 2024-06-24 14:10:37
 */
import type { ProFieldType } from '@element-plus/pro-field';
import { ValueEnum, ValueOption } from '@element-plus/pro-types';
import type { FormItemProps } from 'element-plus';
import { formProps as elFormProps } from 'element-plus';
import { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import { ActionsProps } from './Actions';

const commonFormProps = {
	items: {
		type: Array as PropType<FormColumn[]>,
		default: [],
	},
	layout: {
		type: String as PropType<'horizontal' | 'vertical' | 'inline'>,
		default: 'horizontal',
	},
	readonly: {
		type: Boolean,
	},
	required: {
		type: Boolean,
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

export type FormColumn = Omit<FormItemProps, 'prop' | 'label'> & {
	key?: string;
	label?: string | (() => JSX.Element);
	dataField?: string;
	readonly?: boolean;
	valueType?: ProFormValueType;
	valueEnum?: ValueEnum;
	valueOptions?: ValueOption[];
	defaultValue?: string | number | boolean | any[];
	fieldProps?: Record<string, any>;
	render?: () => JSX.Element;
};

export type ProFormValueType = ProFieldType;

export type Actions = boolean | ActionsProps;

export type CommonFormProps = Partial<ExtractPropTypes<typeof commonFormProps>>;

export type GenerateFormProps = Partial<ExtractPropTypes<typeof generateFormProps>>;
