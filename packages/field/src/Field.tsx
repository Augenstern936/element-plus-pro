/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-04 22:57:02
 * @LastEditTime: 2024-04-24 11:14:38
 * @FilePath: \element-plus-pro\packages\field\src\Field.tsx
 */
import { formatPlaceholder, withInstall } from "@element-plus/pro-utils";
import { FunctionalComponent, computed, defineComponent } from "vue";
import { components } from "./components";
import { ProFieldProps, proFieldProps } from "./typing";

const ProField = defineComponent<ProFieldProps>(
	(props, ctx) => {
		const Field = computed(() => {
			return components[props.valueType || "text"] as FunctionalComponent;
		});

		const model = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit("update:modelValue", value);
			},
		});

		const placeholder = computed(() => {
			const value =
				props.placeholder ??
				(formatPlaceholder("", (props.valueType as any) || "text") as string | [string, string]);

			if (Array.isArray(value) && value.length > 1) {
				return {
					startPlaceholder: value[0],
					endPlaceholder: value[1],
				};
			}

			return {
				placeholder: Array.isArray(value) ? value[0] : value,
			};
		});

		return () => <Field.value v-model={model.value} {...props.fieldProps} {...placeholder.value} />;
	},
	{
		name: "ProField",
	}
) as unknown as FunctionalComponent<ProFieldProps>;

ProField.props = proFieldProps as any;

for (const key in components) {
	const ComName = key.charAt(0).toUpperCase() + key.slice(1);
	const FieldComponent = components[key as keyof typeof components];
	(ProField as { [x: string]: any })[ComName] = (props: any) => <FieldComponent {...props} type={key} />;
}

export * from "./components";

export default withInstall(ProField);
