import { formProps as elFormProps } from 'element-plus';
import { ExtractPropTypes, PropType } from 'vue';
import type { ValueType } from '@element-plus/pro-field';

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
