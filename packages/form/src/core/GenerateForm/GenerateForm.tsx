/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-14 17:03:21
 * @LastEditTime: 2024-06-18 17:26:36
 * @FilePath: \element-plus-pro\packages\form\src\core\GenerateForm\GenerateForm.tsx
 */
import { ElForm } from "element-plus";
import { FunctionalComponent, defineComponent } from "vue";
import { GenerateFormProps, generateFormProps } from "./typing";

const GenerateForm = defineComponent<GenerateFormProps>(() => {
	return () => <ElForm></ElForm>;
}) as unknown as FunctionalComponent<GenerateFormProps>;

GenerateForm.props = generateFormProps;

export * from "./typing";

export { GenerateForm };
