/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-02 22:46:47
 * @FilePath: \element-plus-pro\packages\form\src\components\Input\Text.tsx
 */
import { defineComponent } from 'vue';
import { ProFormField } from '../../core';

export const ProFormText = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'text'} fieldProps={props} />;
	},
	{
		name: 'ProFormText',
	}
);
