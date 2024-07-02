/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-07-02 17:09:40
 */
import { defineComponent } from "vue";
import { ProFormField } from "../../core";

export const ProFormSlider = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={"cascader"} fieldProps={props} />;
	},
	{
		name: "ProFormSlider",
	}
);
