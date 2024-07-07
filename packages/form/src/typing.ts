/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:45:04
 * @LastEditTime: 2024-07-07 20:46:56
 * @FilePath: \element-plus-pro\packages\form\src\typing.ts
 */
import components from './components';
import { FormItemProps } from 'element-plus';

export type ProFormFieldType = keyof typeof components;

export type FormFieldProps<T> = FormItemProps & {
	order?: number;
	readonly?: boolean;
	fieldProps?: Omit<T, 'mode' | 'modelValue' | 'placeholder'>;
};

export type FormFieldValueOption = {
	valueOptions?: [];
	valueEnum?: {};
	params?: {};
	request?: (params: any) => Promise<any>;
};
