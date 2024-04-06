/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:40:06
 * @LastEditTime: 2024-04-02 16:40:06
 * @FilePath: \element-plus-pro\packages\form\src\Form.tsx
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

export default ProForm;
