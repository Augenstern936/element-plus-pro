/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-07 20:53:34
 * @FilePath: \element-plus-pro\packages\form\src\components\TimePicker\index.tsx
 */
import { DefineComponent, defineComponent } from 'vue';
import { withInstall } from '@element-plus/pro-utils';
import { ProFormField } from '../../core';
import type { ProFieldTimeProps, ProFieldTimeRangeProps } from '@element-plus/pro-field';
import { FormFieldProps } from '../../typing';

export type ProFormTimeProps = FormFieldProps<Omit<ProFieldTimeProps, 'modelValue' | 'mode' | 'type' | 'is-range'>> & {
	modelValue?: string | number | Date | (string | number | Date)[];
	placeholder?: string;
};
export type ProFormTimeRangeProps = FormFieldProps<Omit<ProFieldTimeRangeProps, 'type' | 'is-range'>> & {
	modelValue?: string | number | boolean;
	placeholder?: string;
};

const FormTime = defineComponent<ProFormTimeProps>(
	(props) => {
		return () => <ProFormField {...props} type={'time'} />;
	},
	{
		name: 'ProFormTime',
	}
) as DefineComponent<ProFormTimeProps>;

const FormTimeRange = defineComponent<ProFormTimeRangeProps>(
	(props) => {
		return () => <ProFormField {...props} type={'timeRange'} />;
	},
	{
		name: 'ProFormTimeRange',
	}
) as DefineComponent<ProFormTimeRangeProps>;

export const ProFormTime = withInstall(FormTime);
export const ProFormTimeRange = withInstall(FormTimeRange);
