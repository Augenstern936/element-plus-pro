/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-02 22:47:25
 * @FilePath: \element-plus-pro\packages\form\src\components\Input\Number.tsx
 */
import { defineComponent } from 'vue';
import { ProFormField } from '../../core';

export const ProFormNumber = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'number'} fieldProps={props} />;
	},
	{
		name: 'ProFormNumber',
	}
);
