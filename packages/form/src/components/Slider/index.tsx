/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-07-09 17:04:38
 */
import { withInstall } from "@element-plus/pro-utils";
import type { SliderProps } from "element-plus";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldProps } from "../../typing";

export type ProFormSliderProps = FormFieldProps<SliderProps> & {
	modelValue?: number | number[];
};

const FormSlider = defineComponent<ProFormSliderProps>(
	(props) => {
		return () => <ProFormField {...props} type={"slider"} />;
	},
	{
		name: "ProFormSlider",
	}
) as DefineComponent<ProFormSliderProps>;

export const ProFormSlider = withInstall(FormSlider);
