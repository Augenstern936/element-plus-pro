/*
 * @Description:;
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2024-04-11 22:32:45
 * @FilePath: \element-plus-pro\packages\form\src\layouts\DialogForm\index.tsx
 */
import { FunctionalComponent, defineComponent } from 'vue';
import { withInstall } from '@element-plus/pro-utils';
import { proDialogFormProps, ProDialogFormProps } from './typing';

const ProDialogForm = defineComponent<ProDialogFormProps>(
	(props, ctx) => {
		return () => <div>111</div>;
	},
	{
		name: 'ProDialogForm',
	}
) as FunctionalComponent<ProDialogFormProps>;

ProDialogForm.props = proDialogFormProps;

export default withInstall(ProDialogForm);
