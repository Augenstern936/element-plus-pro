/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-07 22:53:35
 * @LastEditTime: 2024-07-02 16:55:31
 * @FilePath: \element-plus-pro\packages\form\src\core\FormField\index.tsx
 */
import { ProField, ProFieldProps } from "@element-plus/pro-field";
import { useVModel } from "@vueuse/core";
import { FunctionalComponent, defineComponent } from "vue";
import createField from "../HOC/createField";

type BaseProFormFieldProps = {} & ProFieldProps;

const BaseProFormField = defineComponent<BaseProFormFieldProps>((props, ctx) => {
	const model = useVModel(props, "modelValue", ctx.emit);

	return () => <ProField {...props} v-model={model.value} />;
}) as unknown as FunctionalComponent<BaseProFormFieldProps>;

export const ProFormField = createField<BaseProFormFieldProps>(BaseProFormField);

export default ProFormField;
