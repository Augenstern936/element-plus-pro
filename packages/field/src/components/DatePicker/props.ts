/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-10 00:18:39
 * @LastEditTime: 2024-07-06 14:20:08
 * @FilePath: \element-plus-pro\packages\field\src\components\DatePicker\props.ts
 */
import { datePickerProps } from 'element-plus';
import type { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import { ProFieldMode } from '../../typing';

export const proDatePickerProps = {
	...datePickerProps,
	mode: {
		type: String as PropType<ProFieldMode>,
		default: 'edit',
	},
	placeholder: {
		type: [String, Array as unknown as PropType<[string] | [string, string]>],
		default: void 0,
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProDatePickerProps = Omit<
	Partial<ExtractPropTypes<typeof proDatePickerProps>>,
	'startPlaceholder' | 'endPlaceholder'
>;

export type ProFieldDateProps = Omit<ProDatePickerProps, 'type'>;

export type ProFieldDatesProps = Omit<ProDatePickerProps, 'type'>;

export type ProFieldDateTimeProps = Omit<ProDatePickerProps, 'type'>;

export type ProFieldDateWeekProps = Omit<ProDatePickerProps, 'type'>;

export type ProFieldDateMonthProps = Omit<ProDatePickerProps, 'type'>;

export type ProFieldDateYearProps = Omit<ProDatePickerProps, 'type'>;

export type ProFieldDateRangeProps = Omit<ProDatePickerProps, 'type'>;

export type ProFieldDateTimeRangeProps = Omit<ProDatePickerProps, 'type'>;

export type ProFieldDateMonthRangeProps = Omit<ProDatePickerProps, 'type'>;
