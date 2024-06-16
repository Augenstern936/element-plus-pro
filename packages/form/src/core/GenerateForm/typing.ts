/*
 * @Description:
 * @Date: 2024-04-15 09:39:26
 * @LastEditTime: 2024-06-16 22:34:49
 */
import type { ProFieldType } from '@element-plus/pro-field';
import { formProps as elFormProps } from 'element-plus';
import { ExtractPropTypes, PropType } from 'vue';
import { ActionsProps } from './Actions';
import { ValueOption } from '@element-plus/pro-types';

export const formProps = {
	...elFormProps,
	type: {
		type: String as PropType<'dialog-form' | 'drawer-form' | 'search-form'>,
	},
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
	},
};

export interface FormColumn {
	label?: string;
	dataField?: string;
	readonly?: boolean;
	valueType?: ProFieldType;
	valueEnum?: ValueEnum;
	valueOptions?: ValueOption[];
	fieldProps?: ProFieldAvatarProps | ProFieldCascaderProps;
}

export interface ValueEnum {
	[x: string]: string | { text: string; status?: ''; color?: string };
}

export type Actions = boolean | ActionsProps;

export type FormProps = ExtractPropTypes<typeof formProps>;
