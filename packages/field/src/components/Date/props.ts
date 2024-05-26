/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-10 00:18:39
 * @LastEditTime: 2024-05-26 21:39:44
 * @FilePath: \element-plus-pro\packages\field\src\components\Date\props.ts
 */
import type { DatePickerProps } from 'element-plus';
import { datePickerProps } from 'element-plus';
import type { CSSProperties, PropType } from 'vue';

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

export interface ProDatePickerProps
	extends Omit<DatePickerProps, 'placeholder' | 'startPlaceholder' | 'endPlaceholder'> {
	placeholder?: string | [string] | [string, string];
	style?: CSSProperties;
}

export namespace ProDatePickerPropsMap {
	export type ProFieldDateProps = Omit<ProDatePickerProps, 'type'>;

	export type ProFieldDatesProps = Omit<ProDatePickerProps, 'type'>;

	export type ProFieldDateTimeProps = Omit<ProDatePickerProps, 'type'>;

	export type ProFieldDateWeekProps = Omit<ProDatePickerProps, 'type'>;

	export type ProFieldDateMonthProps = Omit<ProDatePickerProps, 'type'>;

	export type ProFieldDateYearProps = Omit<ProDatePickerProps, 'type'>;

	export type ProFieldDateRangeProps = Omit<ProDatePickerProps, 'type'>;

	export type ProFieldDateTimeRangeProps = Omit<ProDatePickerProps, 'type'>;

	export type ProFieldDateMonthRangeProps = Omit<ProDatePickerProps, 'type'>;
}
