/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:40:06
 * @LastEditTime: 2024-03-27 23:07:00
 * @FilePath: \element-plus-pro\packages\form\src\Form.tsx
 */
import { defineComponent, FunctionalComponent } from 'vue';
import { ProFormProps } from './typing';

const ProForm = defineComponent<ProFormProps>((props, ctx) => {
	return () => <div>11</div>;
}) as FunctionalComponent<ProFormProps>;

export default ProForm;
