/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-10 18:22:34
 * @FilePath: \element-plus-pro\packages\field\src\components\Date\index.tsx
 */
import { formatPlaceholder } from "@element-plus/pro-utils";
import { datePickerProps, DatePickerProps, ElDatePicker } from "element-plus";
import "element-plus/theme-chalk/src/date-picker.scss";
import { computed, CSSProperties, defineComponent, FunctionalComponent, PropType } from "vue";
import {
	BaseDateProps,
	ProFieldDateMonthProps,
	ProFieldDateMonthRangeProps,
	ProFieldDateProps,
	ProFieldDateRangeProps,
	ProFieldDatesProps,
	ProFieldDateTimeProps,
	ProFieldDateTimeRangeProps,
	ProFieldDateWeekProps,
	ProFieldDateYearProps,
} from "./typing";

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

BaseDate.props = {
	...datePickerProps,
	placeholder: {
		type: [String, Array as unknown as PropType<[string] | [string, string]>],
		default: void 0,
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
} as any;

export const ProFieldDate = (props: ProFieldDateProps) => {
	return <BaseDate {...props} type="date" />;
};

export const ProFieldDates = (props: ProFieldDatesProps) => {
	return <BaseDate {...props} type="dates" />;
};

export const ProFieldDateTime = (props: ProFieldDateTimeProps) => {
	return <BaseDate {...props} type="datetime" />;
};

export const ProFieldDateWeek = (props: ProFieldDateWeekProps) => {
	return <BaseDate {...props} type="week" />;
};

export const ProFieldDateMonth = (props: ProFieldDateMonthProps) => {
	return <BaseDate {...props} type="month" />;
};

export const ProFieldDateYear = (props: ProFieldDateYearProps) => {
	return <BaseDate {...props} type="year" />;
};

export const ProFieldDateRange = (props: ProFieldDateRangeProps) => {
	return <BaseDate {...props} type="daterange" />;
};

export const ProFieldDateTimeRange = (props: ProFieldDateTimeRangeProps) => {
	return <BaseDate {...props} type="datetimerange" />;
};

export const ProFieldDateMonthRange = (props: ProFieldDateMonthRangeProps) => {
	return <BaseDate {...props} type="monthrange" />;
};
