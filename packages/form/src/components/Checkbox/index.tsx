/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-07-02 22:22:28
 * @LastEditTime: 2024-07-02 22:35:16
 * @FilePath: \element-plus-pro\packages\form\src\components\Checkbox\index.tsx
 */
import { defineComponent } from 'vue';
import { ProFormField } from '../../core';

export const ProFormCheckbox = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'checkbox'} fieldProps={props} />;
	},
	{
		name: 'ProFormCheckbox',
	}
);

export const ProFormCheckboxButton = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'checkboxButton'} fieldProps={props} />;
	},
	{
		name: 'ProFormCheckboxButton',
	}
);
