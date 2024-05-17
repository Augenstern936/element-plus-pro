/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-04 22:57:02
 * @LastEditTime: 2024-05-17 16:22:01
 * @FilePath: \element-plus-pro\packages\field\src\Field.tsx
 */
import { formatPlaceholder, withInstall } from "@element-plus/pro-utils";
import { ExtractPropTypes, FunctionalComponent, PropType, computed, defineComponent } from "vue";
import type {
	ProFieldAvatarProps,
	ProFieldCheckboxProps,
	ProFieldColorProps,
	ProFieldPasswordProps,
	ProFieldTextProps,
	ProFieldTextareaProps,
} from "./components";
import { components } from "./components";

export const proFieldProps = {
	modelValue: {
		type: [String, Number, Boolean, Array],
		default: "",
	},
	mode: {
		type: String as PropType<"read" | "edit">,
		default: "edit",
	},
	valueType: {
		type: String as PropType<ValueType>,
		default: "text",
	},
	placeholder: {
		type: [String, Array as unknown as PropType<[string] | [string, string]>],
	},
	fieldProps: {
		type: Object as PropType<Record<string, unknown>>,
		default: {},
	},
};

export type ValueType = keyof typeof components;

export type ProFieldProps = Partial<ExtractPropTypes<typeof proFieldProps>>;

interface Test extends FunctionalComponent<ProFieldProps> {
	Text: FunctionalComponent<ProFieldTextProps>;
	Password: FunctionalComponent<ProFieldPasswordProps>;
	Textarea: FunctionalComponent<ProFieldTextareaProps>;
	Date: FunctionalComponent<any>;
	Dates: FunctionalComponent<any>;
	DateTime: FunctionalComponent<any>;
	DateWeek: FunctionalComponent<any>;
	DateMonth: FunctionalComponent<any>;
	DateYear: FunctionalComponent<any>;
	DateRange: FunctionalComponent<any>;
	DateTimeRange: FunctionalComponent<any>;
	DateMonthRange: FunctionalComponent<any>;
	Time: FunctionalComponent<any>;
	TimeRange: FunctionalComponent<any>;
	// timeSelect: ProFieldTimeSelect,
	Select: FunctionalComponent<any>;
	TreeSelect: FunctionalComponent<any>;
	Checkbox: FunctionalComponent<ProFieldCheckboxProps>;
	Radio: FunctionalComponent<any>;
	RadioButton: FunctionalComponent<any>;
	Switch: FunctionalComponent<any>;
	Avatar: FunctionalComponent<ProFieldAvatarProps>;
	Image: FunctionalComponent<any>;
	Rate: FunctionalComponent<any>;
	Color: FunctionalComponent<ProFieldColorProps>;
	Cascader: FunctionalComponent<any>;
	Slider: FunctionalComponent<any>;
	Progress: FunctionalComponent<any>;
}

function getPlaceholder(placeholder: string | [string] | [string, string] | undefined, type: ValueType) {
	const value = placeholder ?? (formatPlaceholder("", (type as any) || "text") as string | [string, string]);

	if (Array.isArray(value) && value.length > 1) {
		return {
			startPlaceholder: value[0],
			endPlaceholder: value[1],
		};
	}

	return {
		placeholder: Array.isArray(value) ? value[0] : value,
	};
}

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

		return () => (
			<Field.value
				v-model={model.value}
				{...props.fieldProps}
				{...getPlaceholder(props.placeholder, props.valueType as ValueType)}
			/>
		);
	},
	{
		name: "ProField",
	}
) as unknown as Test;

ProField.props = proFieldProps as any;

type ToUppercaseFirst<S extends string> = S extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : S;

for (const key in components) {
	const ComName = (key.charAt(0).toUpperCase() + key.slice(1)) as ToUppercaseFirst<ValueType>;
	const FieldComponent = components[key as ValueType];
	ProField[ComName] = (props) => {
		return <FieldComponent {...props} {...getPlaceholder(props.placeholder, key as ValueType)} type={key} />;
	};
}

export default withInstall(ProField);
