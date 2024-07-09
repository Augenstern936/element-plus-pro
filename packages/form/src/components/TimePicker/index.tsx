/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-09 17:05:17
 * @FilePath: \element-plus-pro\packages\form\src\components\TimePicker\index.tsx
 */
import type { ProFieldTimeProps, ProFieldTimeRangeProps } from "@element-plus/pro-field";
import { withInstall } from "@element-plus/pro-utils";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldProps } from "../../typing";

export type ProFormTimeProps = FormFieldProps<Omit<ProFieldTimeProps, "modelValue" | "mode" | "type" | "is-range">> & {
	modelValue?: string | number | Date | (string | number | Date)[];
	placeholder?: string;
};
export type ProFormTimeRangeProps = FormFieldProps<Omit<ProFieldTimeRangeProps, "type" | "is-range">> & {
	modelValue?: string | number | boolean;
	placeholder?: string;
};

const FormTime = defineComponent<ProFormTimeProps>(
	(props) => {
		return () => <ProFormField {...props} type={"time"} />;
	},
	{
		name: "ProFormTime",
	}
) as DefineComponent<ProFormTimeProps>;

const FormTimeRange = defineComponent<ProFormTimeRangeProps>(
	(props) => {
		return () => <ProFormField {...props} type={"timeRange"} />;
	},
	{
		name: "ProFormTimeRange",
	}
) as DefineComponent<ProFormTimeRangeProps>;

export const ProFormTime = withInstall(FormTime);
export const ProFormTimeRange = withInstall(FormTimeRange);
