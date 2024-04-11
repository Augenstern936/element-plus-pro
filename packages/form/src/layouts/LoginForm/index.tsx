/*
 * @Description:;
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2024-04-11 22:46:01
 * @FilePath: \element-plus-pro\packages\form\src\layouts\LoginForm\index.tsx
 */
import { FunctionalComponent, defineComponent } from 'vue';
import { withInstall } from '@element-plus/pro-utils';
import { proLoginFormProps, ProLoginFormProps } from './typing';

const ProLoginForm = defineComponent<ProLoginFormProps>(
	(props, ctx) => {
		return () => <div>111</div>;
	},
	{
		name: 'ProLoginForm',
	}
) as FunctionalComponent<ProLoginFormProps>;

ProLoginForm.props = proLoginFormProps;

export * from './typing';

export default withInstall(ProLoginForm);
