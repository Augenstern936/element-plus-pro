/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-09 17:03:58
 * @FilePath: \element-plus-pro\packages\form\src\components\Input\Number.tsx
 */
import type { ProFieldNumberProps } from "@element-plus/pro-field";
import { withInstall } from "@element-plus/pro-utils";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldProps } from "../../typing";

export type ProFormNumberProps = FormFieldProps<ProFieldNumberProps> & {
	modelValue?: number;
	placeholder?: string;
};

const FormNumber = defineComponent<ProFormNumberProps>(
	(props) => {
		return () => <ProFormField {...props} type={"number"} />;
	},
	{
		name: "ProFormNumber",
	}
) as DefineComponent<ProFormNumberProps>;

export const ProFormNumber = withInstall(FormNumber);
