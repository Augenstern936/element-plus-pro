/*
 * @Description:;
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2024-04-13 23:22:50
 * @FilePath: \element-plus-pro\packages\form\src\layouts\StepForm\index.tsx
 */
import { FunctionalComponent, defineComponent } from 'vue';
import { withInstall } from '@element-plus/pro-utils';
import { proStepFormProps, ProStepFormProps } from './typing';

const StepForm = defineComponent<ProStepFormProps>(
	(props, ctx) => {
		return () => <div>111</div>;
	},
	{
		name: 'ProStepForm',
	}
) as FunctionalComponent<ProStepFormProps>;

StepForm.props = proStepFormProps;

export * from './typing';

export const ProStepForm = withInstall(StepForm);
