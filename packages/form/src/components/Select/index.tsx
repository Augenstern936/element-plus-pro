/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-07-09 17:04:35
 */
import type { ProFieldSelectProps } from "@element-plus/pro-field";
import { withInstall } from "@element-plus/pro-utils";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldProps } from "../../typing";

export type ProFormSelectProps = FormFieldProps<ProFieldSelectProps> & {
	modelValue?: string | number | boolean | (string | number | boolean)[];
	placeholder?: string;
};

const FormSelect = defineComponent<ProFormSelectProps>(
	(props) => {
		return () => <ProFormField {...props} type={"select"} />;
	},
	{
		name: "ProFormSelect",
	}
) as DefineComponent<ProFormSelectProps>;

export const ProFormSelect = withInstall(FormSelect);
