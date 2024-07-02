/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-02 22:38:49
 * @FilePath: \element-plus-pro\packages\form\src\components\Image\index.tsx
 */
import { defineComponent } from 'vue';
import { ProFormField } from '../../core';

export const ProFormImage = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'image'} fieldProps={props} />;
	},
	{
		name: 'ProFormImage',
	}
);
