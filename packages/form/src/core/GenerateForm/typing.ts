/*
 * @Description: 
 * @Date: 2024-04-15 09:39:26
 * @LastEditTime: 2024-04-16 17:07:20
 */
import type { ValueType } from '@element-plus/pro-field';
import { formProps as elFormProps } from 'element-plus';
import { ExtractPropTypes, PropType } from 'vue';

export const formProps = {
	...elFormProps,
	items: {
		type: Array as PropType<FormColumn[]>,
		default: [],
	},
};

export interface FormColumn {
	label?: string;
	dataField?: string;
	valueType?: ValueType;
    valueEnum?: ValueEnum;
    fieldProps?: 
}

export interface ValueEnum {
	[x: string]: string | { text: string; status?: ''; color?: string };
}

export type FormProps = ExtractPropTypes<typeof formProps>;
