/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-06-23 15:21:34
 * @FilePath: \element-plus-pro\packages\field\src\components\Date\index.tsx
 */
import 'element-plus/theme-chalk/src/button.scss';
import 'element-plus/theme-chalk/src/date-picker.scss';
import { formatPlaceholder } from '@element-plus/pro-utils';
import { useVModel } from '@vueuse/core';
import { DatePickerProps, ElDatePicker } from 'element-plus';
import { FunctionalComponent, computed, defineComponent } from 'vue';
import { ProDatePickerProps, proDatePickerProps, ProDatePickerPropsMap } from './props';

const ProDatePicker = defineComponent<ProDatePickerProps>((props, ctx) => {
	const model = useVModel(props, 'modelValue', ctx.emit);

	const placeholder = computed(() => {
		const value =
			props.placeholder ?? (formatPlaceholder('', (props.type as any) || 'text') as string | [string, string]);

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

	return () => {
		if (props.mode === 'read') {
			console.log(model.value, 'model.value');
			return model.value;
		}
		if (props.mode === 'edit') {
			return <ElDatePicker {...(props as DatePickerProps)} {...placeholder.value} v-model={model.value} />;
		}
		return <></>;
	};
}) as unknown as FunctionalComponent<ProDatePickerProps>;

ProDatePicker.props = proDatePickerProps as any;

export * from './props';

export const ProFieldDate = (props: ProDatePickerPropsMap.ProFieldDateProps) => (
	<ProDatePicker {...props} type='date' />
);

export const ProFieldDates = (props: ProDatePickerPropsMap.ProFieldDatesProps) => (
	<ProDatePicker {...props} type='dates' />
);

export const ProFieldDateTime = (props: ProDatePickerPropsMap.ProFieldDateTimeProps) => (
	<ProDatePicker {...props} type='datetime' />
);

export const ProFieldDateWeek = (props: ProDatePickerPropsMap.ProFieldDateWeekProps) => (
	<ProDatePicker {...props} type='week' />
);

export const ProFieldDateMonth = (props: ProDatePickerPropsMap.ProFieldDateMonthProps) => (
	<ProDatePicker {...props} type='month' />
);

export const ProFieldDateYear = (props: ProDatePickerPropsMap.ProFieldDateYearProps) => (
	<ProDatePicker {...props} type='year' />
);

export const ProFieldDateRange = (props: ProDatePickerPropsMap.ProFieldDateRangeProps) => (
	<ProDatePicker {...props} type='daterange' />
);

export const ProFieldDateTimeRange = (props: ProDatePickerPropsMap.ProFieldDateTimeRangeProps) => (
	<ProDatePicker {...props} type='datetimerange' />
);

export const ProFieldDateMonthRange = (props: ProDatePickerPropsMap.ProFieldDateMonthRangeProps) => (
	<ProDatePicker {...props} type='monthrange' />
);
