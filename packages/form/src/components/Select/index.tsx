/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-07-02 22:35:49
 */
import { defineComponent } from 'vue';
import { ProFormField } from '../../core';

export const ProFormSelect = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'select'} fieldProps={props} />;
	},
	{
		name: 'ProFormSelect',
	}
);
