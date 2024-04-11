/*
 * @Description:;
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2024-04-11 22:45:55
 * @FilePath: \element-plus-pro\packages\form\src\layouts\DrawerForm\index.tsx
 */
import { FunctionalComponent, defineComponent } from 'vue';
import { withInstall } from '@element-plus/pro-utils';
import { proDrawerFormProps, ProDrawerFormProps } from './typing';

const ProDrawerForm = defineComponent<ProDrawerFormProps>(
	(props, ctx) => {
		return () => <div>111</div>;
	},
	{
		name: 'ProDrawerForm',
	}
) as FunctionalComponent<ProDrawerFormProps>;

ProDrawerForm.props = proDrawerFormProps;

export * from './typing';

export default withInstall(ProDrawerForm);
