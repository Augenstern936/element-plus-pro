/*
 * @Description:;
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2024-04-13 23:20:10
 * @FilePath: \element-plus-pro\packages\form\src\layouts\DialogForm\index.tsx
 */
import { FunctionalComponent, defineComponent } from 'vue';
import { withInstall } from '@element-plus/pro-utils';
import { proDialogFormProps, ProDialogFormProps } from './typing';

const DialogForm = defineComponent<ProDialogFormProps>(
	(props, ctx) => {
		return () => <div>111</div>;
	},
	{
		name: 'ProDialogForm',
	}
) as FunctionalComponent<ProDialogFormProps>;

DialogForm.props = proDialogFormProps;

export * from './typing';

export const ProDialogForm = withInstall(DialogForm);
