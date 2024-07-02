/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-02 22:38:05
 * @FilePath: \element-plus-pro\packages\form\src\components\Avatar\index.tsx
 */
import { defineComponent } from 'vue';
import { ProFormField } from '../../core';

export const ProFormAvatar = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'avatar'} fieldProps={props} />;
	},
	{
		name: 'ProFormAvatar',
	}
);
