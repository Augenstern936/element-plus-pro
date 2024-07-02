/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-27 20:57:53
 * @LastEditTime: 2024-07-02 17:03:27
 * @FilePath: \element-plus-pro\packages\form\src\core\HOC\createField.tsx
 */
import { ProFieldProps } from "@element-plus/pro-field";
import { FunctionalComponent, defineComponent } from "vue";
import { ProFormItem } from "../FormItem";

function createField<T>(FieldComponent: FunctionalComponent<T>, config?: Record<string, any>) {
	return defineComponent<ProFieldProps>((props) => () => (
		<ProFormItem {...config}>
			<FieldComponent {...props} />
		</ProFormItem>
	)) as unknown as FunctionalComponent<ProFieldProps>;
}

export default createField;
