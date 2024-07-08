/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-07 23:19:40
 * @FilePath: \element-plus-pro\packages\form\src\components\Switch\index.tsx
 */
import { DefineComponent, PropType, defineComponent } from 'vue';
import { withInstall } from '@element-plus/pro-utils';
import { ProFormField } from '../../core';
import { FormFieldProps } from '../../typing';
import { useVModel } from '@vueuse/core';
import type { SwitchProps } from 'element-plus';

export type ProFormSwitchProps = FormFieldProps<SwitchProps> & {
	modelValue?: string | number | boolean;
};

const FormSwitch = defineComponent<ProFormSwitchProps>(
	(props, ctx) => {
		console.log(props, 'props1');
		const model = useVModel(props, 'modelValue', ctx.emit);

		return () => <ProFormField {...props} type={'switch'} v-model={model.value} />;
	},
	{
		name: 'ProFormSwitch',
	}
) as DefineComponent<ProFormSwitchProps>;

FormSwitch.props = {
	modelValue: {
		type: [String, Number, Boolean] as PropType<string | number | boolean>,
	},
};

export const ProFormSwitch = withInstall(FormSwitch);
