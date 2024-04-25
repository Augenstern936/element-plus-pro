/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-10 00:18:39
 * @LastEditTime: 2024-04-25 13:43:13
 * @FilePath: \element-plus-pro\packages\field\src\components\Date\typing.ts
 */
import type { DatePickerProps } from "element-plus";
import { datePickerProps } from "element-plus";
import type { CSSProperties, PropType } from "vue";

export const proDatePickerProps = {
	...datePickerProps,
	placeholder: {
		type: [String, Array as unknown as PropType<[string] | [string, string]>],
		default: void 0,
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export interface BaseDateProps extends Omit<DatePickerProps, "placeholder" | "startPlaceholder" | "endPlaceholder"> {
	placeholder?: string | [string] | [string, string];
	style?: CSSProperties;
}

export type ProFieldDateProps = Omit<BaseDateProps, "type">;

export type ProFieldDatesProps = Omit<BaseDateProps, "type">;

export type ProFieldDateTimeProps = Omit<BaseDateProps, "type">;

export type ProFieldDateWeekProps = Omit<BaseDateProps, "type">;

export type ProFieldDateMonthProps = Omit<BaseDateProps, "type">;

export type ProFieldDateYearProps = Omit<BaseDateProps, "type">;

export type ProFieldDateRangeProps = Omit<BaseDateProps, "type">;

export type ProFieldDateTimeRangeProps = Omit<BaseDateProps, "type">;

export type ProFieldDateMonthRangeProps = Omit<BaseDateProps, "type">;
