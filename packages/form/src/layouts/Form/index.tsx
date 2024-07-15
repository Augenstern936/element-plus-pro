/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:40:06
 * @LastEditTime: 2024-07-15 17:04:15
 * @FilePath: \element-plus-pro\packages\form\src\layouts\Form\index.tsx
 */
import { ToUppercaseFirst } from "@element-plus/pro-types";
import { withInstall } from "@element-plus/pro-utils";
import { useVModel } from "@vueuse/core";
import { defineComponent } from "vue-demi";
import components from "../../components";
import { GenerateForm } from "../../core";
import { ProFormFieldType } from "../../typing";
import { proFormProps, ProFormSuperProps } from "./typing";

const ProForm = defineComponent<ProFormSuperProps>(
	(props, ctx) => {
		const model = useVModel(props, "modelValue", ctx.emit);

		return () => (
			<GenerateForm
				{...props}
				labelPosition={props.layout === "vertical" ? "top" : "right"}
				inline={props.layout === "inline"}
				v-model={model.value}
				v-slots={{ default: () => ctx.slots?.default?.() }}
			/>
		);
	},
	{
		name: "ProForm",
	}
) as ProFormSuperProps;

ProForm.props = proFormProps as any;

for (const key in components) {
	const ComName = (key.charAt(0).toUpperCase() + key.slice(1)) as ToUppercaseFirst<ProFormFieldType>;
	const FieldComponent = components[key as ProFormFieldType];
	ProForm[ComName] = FieldComponent;
}

export * from "./typing";

export default withInstall(ProForm);
