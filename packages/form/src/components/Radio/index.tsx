/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-07-09 17:04:28
 */
import { withInstall } from "@element-plus/pro-utils";
import type { RadioButtonProps, RadioProps } from "element-plus";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldProps } from "../../typing";

export type ProFormRadioProps = FormFieldProps<RadioProps> & {
	modelValue?: string | number | boolean;
};
export type ProFormRadioButtonProps = FormFieldProps<RadioButtonProps> & {
	modelValue?: string | number | boolean;
};

const FormRadio = defineComponent<ProFormRadioProps>(
	(props) => {
		return () => <ProFormField {...props} type={"radio"} />;
	},
	{
		name: "ProFormRadio",
	}
) as DefineComponent<ProFormRadioProps>;

const FormRadioButton = defineComponent<ProFormRadioButtonProps>(
	(props) => {
		return () => <ProFormField {...props} type={"radioButton"} />;
	},
	{
		name: "ProFormRadioButton",
	}
) as DefineComponent<ProFormRadioButtonProps>;

export const ProFormRadio = withInstall(FormRadio);

export const ProFormRadioButton = withInstall(FormRadioButton);
