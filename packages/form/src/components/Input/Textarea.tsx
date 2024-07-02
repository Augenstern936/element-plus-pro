/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-02 22:45:41
 * @FilePath: \element-plus-pro\packages\form\src\components\Input\Textarea.tsx
 */
import { defineComponent } from 'vue';
import { ProFormField } from '../../core';

export const ProFormTextarea = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'textarea'} fieldProps={props} />;
	},
	{
		name: 'ProFormTextarea',
	}
);
