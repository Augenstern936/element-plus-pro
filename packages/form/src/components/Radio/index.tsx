/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-07-02 22:34:49
 */
import { defineComponent } from 'vue';
import { ProFormField } from '../../core';

export const ProFormRadio = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'radio'} fieldProps={props} />;
	},
	{
		name: 'ProFormRadio',
	}
);

export const ProFormRadioButton = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'radioButton'} fieldProps={props} />;
	},
	{
		name: 'ProFormRadioButton',
	}
);
