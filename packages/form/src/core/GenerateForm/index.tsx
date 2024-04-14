/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-14 17:03:21
 * @LastEditTime: 2024-04-14 19:09:48
 * @FilePath: \element-plus-pro\packages\form\src\core\GenerateForm\index.tsx
 */
import { FunctionalComponent, defineComponent } from 'vue';
import { formProps, FormProps } from './typing';

const GenerateForm = defineComponent((props, ctx) => {
	return () => <div>111</div>;
}) as FunctionalComponent<FormProps>;

export * from './typing';

GenerateForm.props = formProps;

export { GenerateForm };
