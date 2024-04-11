/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:40:06
 * @LastEditTime: 2024-04-11 22:57:20
 * @FilePath: \element-plus-pro\packages\form\src\layouts\Form\index.tsx
 */
import { defineComponent, FunctionalComponent } from 'vue';
import { ProFormProps } from './typing';

const ProForm = defineComponent<ProFormProps>(
	(props, ctx) => {
		return () => <div>11</div>;
	},
	{
		name: 'ProForm',
	}
) as FunctionalComponent<ProFormProps>;

export * from './typing';

export default ProForm;
