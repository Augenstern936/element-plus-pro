/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-04 22:26:33
 * @FilePath: \element-plus-pro\packages\form\src\components\TimeSelect\index.tsx
 */
import { defineComponent } from 'vue';
import { ProFormField } from '../../core';

export const ProFormTimeSelect = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'timeSelect'} fieldProps={props} />;
	},
	{
		name: 'ProFormTimeSelect',
	}
);
