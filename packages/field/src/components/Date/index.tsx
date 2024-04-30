/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-29 16:27:16
 * @FilePath: \element-plus-pro\packages\field\src\components\Date\index.tsx
 */
import { formatPlaceholder } from "@element-plus/pro-utils";
import { DatePickerProps, ElDatePicker } from "element-plus";
import "element-plus/theme-chalk/src/date-picker.scss";
import { FunctionalComponent, computed, defineComponent } from "vue";
import {
	BaseDateProps,
	ProFieldDateMonthProps,
	ProFieldDateMonthRangeProps,
	ProFieldDateProps,
	ProFieldDateRangeProps,
	ProFieldDateTimeProps,
	ProFieldDateTimeRangeProps,
	ProFieldDateWeekProps,
	ProFieldDateYearProps,
	ProFieldDatesProps,
	proDatePickerProps,
} from "./props";

const BaseDate = defineComponent<BaseDateProps>((props, ctx) => {
	const state = computed({
		get: () => {
			return props.modelValue;
		},
		set: (value) => {
			ctx.emit("update:modelValue", value);
		},
	});

	const placeholder = computed(() => {
		const value =
			props.placeholder ?? (formatPlaceholder("", (props.type as any) || "text") as string | [string, string]);

		if (Array.isArray(value) && value.length > 1) {
			return {
				startPlaceholder: value[0],
				endPlaceholder: value[1],
			};
		}

		return {
			placeholder: Array.isArray(value) ? value[0] : value,
		};
	});

	return () => <ElDatePicker v-model={state.value} {...(props as DatePickerProps)} {...placeholder.value} />;
}) as unknown as FunctionalComponent<BaseDateProps>;

BaseDate.props = proDatePickerProps as any;

export * from "./props";

export const ProFieldDate = (props: ProFieldDateProps) => <BaseDate {...props} type="date" />;

export const ProFieldDates = (props: ProFieldDatesProps) => <BaseDate {...props} type="dates" />;

export const ProFieldDateTime = (props: ProFieldDateTimeProps) => <BaseDate {...props} type="datetime" />;

export const ProFieldDateWeek = (props: ProFieldDateWeekProps) => <BaseDate {...props} type="week" />;

export const ProFieldDateMonth = (props: ProFieldDateMonthProps) => <BaseDate {...props} type="month" />;

export const ProFieldDateYear = (props: ProFieldDateYearProps) => <BaseDate {...props} type="year" />;

export const ProFieldDateRange = (props: ProFieldDateRangeProps) => <BaseDate {...props} type="daterange" />;

export const ProFieldDateTimeRange = (props: ProFieldDateTimeRangeProps) => (
	<BaseDate {...props} type="datetimerange" />
);

export const ProFieldDateMonthRange = (props: ProFieldDateMonthRangeProps) => <BaseDate {...props} type="monthrange" />;
