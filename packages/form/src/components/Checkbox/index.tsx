import { defineComponent } from "vue";
import { ProFormField } from "../../core";

export const ProFormCheckbox = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={"cascader"} fieldProps={props} />;
	},
	{
		name: "ProFormCheckbox",
	}
);
