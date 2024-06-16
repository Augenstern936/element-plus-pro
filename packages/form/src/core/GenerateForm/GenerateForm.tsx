/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-14 17:03:21
 * @LastEditTime: 2024-06-16 22:08:49
 * @FilePath: \element-plus-pro\packages\form\src\core\GenerateForm\GenerateForm.tsx
 */
import { FunctionalComponent, defineComponent } from 'vue';
import { formProps, FormProps } from './typing';
import { ElForm } from 'element-plus';

const GenerateForm = defineComponent(() => {
	return () => <ElForm></ElForm>;
}) as unknown as FunctionalComponent<FormProps>;

export * from './typing';

GenerateForm.props = formProps;

export { GenerateForm };
