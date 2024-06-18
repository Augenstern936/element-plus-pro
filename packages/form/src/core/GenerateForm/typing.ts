/*
 * @Description:
 * @Date: 2024-04-15 09:39:26
 * @LastEditTime: 2024-06-18 22:15:35
 */
import type { ProFieldType } from '@element-plus/pro-field';
import { ValueEnum, ValueOption } from '@element-plus/pro-types';
import { formProps as elFormProps } from 'element-plus';
import { ExtractPropTypes, PropType } from 'vue';
import { ActionsProps } from './Actions';

const commonFormProps = {
	items: {
		type: Array as PropType<FormColumn[]>,
		default: [],
	},
	readonly: {
		type: Boolean,
	},
	request: {
		type: Function as PropType<() => Promise<any>>,
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
		type: String as PropType<'dialog-form' | 'drawer-form' | 'search-form'>,
	},
};

export interface FormColumn {
	label?: string;
	dataField?: string;
	readonly?: boolean;
	valueType?: ProFieldType;
	valueEnum?: ValueEnum;
	valueOptions?: ValueOption[];
	fieldProps?: any;
}

export type Actions = boolean | ActionsProps;

export type CommonFormProps = Partial<ExtractPropTypes<typeof commonFormProps>>;

export type GenerateFormProps = Partial<ExtractPropTypes<typeof generateFormProps>>;
