/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-07-07 20:48:22
 */
import { DefineComponent, defineComponent } from 'vue';
import { withInstall } from '@element-plus/pro-utils';
import { ProFormField } from '../../core';
import { FormFieldProps } from '../../typing';
import { useVModel } from '@vueuse/core';
import type { CascaderProps } from 'element-plus';

export type ProFormCascaderProps = FormFieldProps<CascaderProps> & {
	modelValue?: string | number | (string | number)[];
	placeholder?: string;
};

const FormCascader = defineComponent<ProFormCascaderProps>(
	(props, ctx) => {
		const model = useVModel(props, 'modelValue', ctx.emit);

		return () => <ProFormField type={'cascader'} fieldProps={props} v-model={model.value} />;
	},
	{
		name: 'ProFormCascader',
	}
) as DefineComponent<ProFormCascaderProps>;

export const ProFormCascader = withInstall(FormCascader);
