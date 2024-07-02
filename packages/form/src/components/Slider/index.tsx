/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-07-02 22:36:05
 */
import { defineComponent } from 'vue';
import { ProFormField } from '../../core';

export const ProFormSlider = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'slider'} fieldProps={props} />;
	},
	{
		name: 'ProFormSlider',
	}
);
