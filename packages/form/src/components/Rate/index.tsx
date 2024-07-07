/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-07-07 20:52:17
 */
import { DefineComponent, defineComponent } from 'vue';
import { withInstall } from '@element-plus/pro-utils';
import { ProFormField } from '../../core';
import { FormFieldProps } from '../../typing';
import type { RateProps } from 'element-plus';

export type ProFormRateProps = FormFieldProps<RateProps> & {
	modelValue?: number;
};

const FormRate = defineComponent<ProFormRateProps>(
	(props) => {
		return () => <ProFormField {...props} type={'rate'} />;
	},
	{
		name: 'ProFormRate',
	}
) as DefineComponent<ProFormRateProps>;

export const ProFormRate = withInstall(FormRate);
