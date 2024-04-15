import { CheckboxProps, checkboxProps } from "element-plus";
import { CSSProperties, PropType } from "vue";

export const proFieldCheckboxProps = {
	...checkboxProps,
	type: {
		type: String as PropType<"checkbox" | "checkboxButton">,
		default: "checkbox",
	},
	options: {
		type: Array,
		default: [],
	},
};

export interface ProFieldCheckboxProps extends CheckboxProps {
	type: "checkbox" | "checkboxButton";
	options?: { label?: string; value: string | number | boolean; [x: string]: any }[];
	style?: CSSProperties;
}
