/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-07-02 22:22:28
 * @LastEditTime: 2024-07-07 17:43:29
 * @FilePath: \element-plus-pro\packages\form\src\components\Checkbox\index.tsx
 */
import { DefineComponent, defineComponent } from 'vue';
import { withInstall } from '@element-plus/pro-utils';
import { ProFormField } from '../../core';
import { FormFieldProps } from '../../typing';
import type { ProFieldCheckboxProps, ProFieldCheckboxButtonProps } from '@element-plus/pro-field';

export type ProFormCheckboxProps = FormFieldProps<ProFieldCheckboxProps> & {
	modelValue?: string | number | boolean;
};
export type ProFormCheckboxButtonProps = FormFieldProps<ProFieldCheckboxButtonProps> & {
	modelValue?: string | number | boolean;
};

const FormCheckbox = defineComponent(
	(props: ProFormCheckboxProps) => {
		return () => <ProFormField type={'checkbox'} fieldProps={props} />;
	},
	{
		name: 'ProFormCheckbox',
	}
) as DefineComponent<ProFormCheckboxProps>;

const FormCheckboxButton = defineComponent(
	(props: ProFormCheckboxButtonProps) => {
		return () => <ProFormField type={'checkboxButton'} fieldProps={props} />;
	},
	{
		name: 'ProFormCheckboxButton',
	}
) as DefineComponent<ProFormCheckboxButtonProps>;

export const ProFormCheckbox = withInstall(FormCheckbox);

export const ProFormCheckboxButton = withInstall(FormCheckboxButton);
