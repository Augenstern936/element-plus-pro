/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-04 22:25:20
 * @FilePath: \element-plus-pro\packages\form\src\components\TimeSelect\index.tsx
 */
import { defineComponent } from 'vue';
import { ProFormField } from '../../core';

export const ProFormTime = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'time'} fieldProps={props} />;
	},
	{
		name: 'ProFormTime',
	}
);

export const ProFormTimeRange = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'timeRange'} fieldProps={props} />;
	},
	{
		name: 'ProFormTimeRange',
	}
);
