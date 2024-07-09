/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-07-09 17:04:32
 */
import { withInstall } from "@element-plus/pro-utils";
import type { RateProps } from "element-plus";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldProps } from "../../typing";

export type ProFormRateProps = FormFieldProps<RateProps> & {
	modelValue?: number;
};

const FormRate = defineComponent<ProFormRateProps>(
	(props) => {
		return () => <ProFormField {...props} type={"rate"} />;
	},
	{
		name: "ProFormRate",
	}
) as DefineComponent<ProFormRateProps>;

export const ProFormRate = withInstall(FormRate);
