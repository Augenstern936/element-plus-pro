/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-07-02 22:33:48
 */
import { defineComponent } from 'vue';
import { ProFormField } from '../../core';

export const ProFormColor = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'color'} fieldProps={props} />;
	},
	{
		name: 'ProFormColor',
	}
);
