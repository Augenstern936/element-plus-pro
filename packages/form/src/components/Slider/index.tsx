/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-07-07 20:52:59
 */
import { DefineComponent, defineComponent } from 'vue';
import { withInstall } from '@element-plus/pro-utils';
import { ProFormField } from '../../core';
import { FormFieldProps } from '../../typing';
import type { SliderProps } from 'element-plus';

export type ProFormSliderProps = FormFieldProps<SliderProps> & {
	modelValue?: number | number[];
};

const FormSlider = defineComponent<ProFormSliderProps>(
	(props) => {
		return () => <ProFormField {...props} type={'slider'} />;
	},
	{
		name: 'ProFormSlider',
	}
) as DefineComponent<ProFormSliderProps>;

export const ProFormSlider = withInstall(FormSlider);
