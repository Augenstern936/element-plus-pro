/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-07-02 22:22:28
 * @LastEditTime: 2024-07-07 20:49:34
 * @FilePath: \element-plus-pro\packages\form\src\components\DatePicker\index.tsx
 */
import { DefineComponent, defineComponent } from 'vue';
import { withInstall } from '@element-plus/pro-utils';
import { ProFormField } from '../../core';
import { FormFieldProps } from '../../typing';
import type * as Types from '@element-plus/pro-field';

type ModelValue = string | number | Date | [Date, Date] | [string, string];

export type ProFormDateProps = FormFieldProps<Omit<Types.ProFieldDateProps, 'type'>> & {
	modelValue?: ModelValue;
	placeholder?: string;
};
export type ProFormDatesProps = FormFieldProps<Omit<Types.ProFieldDatesProps, 'type'>> & {
	modelValue?: ModelValue;
	placeholder?: string;
};
export type ProFormDateRangeProps = FormFieldProps<Omit<Types.ProFieldDateRangeProps, 'type'>> & {
	modelValue?: ModelValue;
	placeholder?: string;
};
export type ProFormDateTimeProps = FormFieldProps<Omit<Types.ProFieldDateTimeProps, 'type'>> & {
	modelValue?: ModelValue;
	placeholder?: string;
};
export type ProFormDateTimeRangeProps = FormFieldProps<Omit<Types.ProFieldDateTimeRangeProps, 'type'>> & {
	modelValue?: ModelValue;
	placeholder?: string;
};
export type ProFormDateWeekProps = FormFieldProps<Omit<Types.ProFieldDateWeekProps, 'type'>> & {
	modelValue?: ModelValue;
	placeholder?: string;
};
export type ProFormDateMonthProps = FormFieldProps<Omit<Types.ProFieldDateMonthProps, 'type'>> & {
	modelValue?: ModelValue;
	placeholder?: string;
};
export type ProFormDateMonthRangeProps = FormFieldProps<Omit<Types.ProFieldDateMonthRangeProps, 'type'>> & {
	modelValue?: ModelValue;
	placeholder?: string;
};
export type ProFormDateYearProps = FormFieldProps<Omit<Types.ProFieldDateYearProps, 'type'>> & {
	modelValue?: ModelValue;
	placeholder?: string;
};

/**
 * 日期
 */
const FormDate = defineComponent<ProFormDateProps>(
	(props) => {
		return () => <ProFormField type={'date'} fieldProps={props} />;
	},
	{
		name: 'ProFormDate',
	}
) as DefineComponent<ProFormDateProps>;

/**
 * 分段日期
 */
const FormDateRange = defineComponent<ProFormDateRangeProps>(
	(props) => {
		return () => <ProFormField type={'dateRange'} fieldProps={props} />;
	},
	{
		name: 'ProFormDateRange',
	}
) as DefineComponent<ProFormDateRangeProps>;

const FormDates = defineComponent<ProFormDatesProps>(
	(props) => {
		return () => <ProFormField type={'dates'} fieldProps={props} />;
	},
	{
		name: 'ProFormDates',
	}
) as DefineComponent<ProFormDatesProps>;

/**
 * 日期时间
 */
const FormDateTime = defineComponent<ProFormDateTimeProps>(
	(props) => {
		return () => <ProFormField type={'dateTime'} fieldProps={props} />;
	},
	{
		name: 'ProFormDateTime',
	}
) as DefineComponent<ProFormDateTimeProps>;

/**
 * 分段日期时间
 */
const FormDateTimeRange = defineComponent<ProFormDateTimeRangeProps>(
	(props) => {
		return () => <ProFormField type={'dateTimeRange'} fieldProps={props} />;
	},
	{
		name: 'ProFormDateTimeRange',
	}
) as DefineComponent<ProFormDateTimeRangeProps>;

/**
 * 周
 */
const FormDateWeek = defineComponent<ProFormDateWeekProps>(
	(props) => {
		return () => <ProFormField type={'dateWeek'} fieldProps={props} />;
	},
	{
		name: 'ProFormDateWeek',
	}
) as DefineComponent<ProFormDateWeekProps>;

/**
 * 月
 */
const FormDateMonth = defineComponent<ProFormDateMonthProps>(
	(props) => {
		return () => <ProFormField type={'dateMonth'} fieldProps={props} />;
	},
	{
		name: 'ProFormDateMonth',
	}
) as DefineComponent<ProFormDateMonthProps>;

/**
 * 分段月
 */
const FormDateMonthRange = defineComponent<ProFormDateMonthRangeProps>(
	(props) => {
		return () => <ProFormField type={'dateMonthRange'} fieldProps={props} />;
	},
	{
		name: 'ProFormDateMonthRange',
	}
) as DefineComponent<ProFormDateMonthRangeProps>;

/**
 * 年
 */
const FormDateYear = defineComponent<ProFormDateYearProps>(
	(props) => {
		return () => <ProFormField type={'dateYear'} fieldProps={props} />;
	},
	{
		name: 'ProFormDateYear',
	}
) as DefineComponent<ProFormDateYearProps>;

export const ProFormDate = withInstall(FormDate);
export const ProFormDates = withInstall(FormDates);
export const ProFormDateRange = withInstall(FormDateRange);
export const ProFormDateTime = withInstall(FormDateTime);
export const ProFormDateTimeRange = withInstall(FormDateTimeRange);
export const ProFormDateWeek = withInstall(FormDateWeek);
export const ProFormDateMonth = withInstall(FormDateMonth);
export const ProFormDateMonthRange = withInstall(FormDateMonthRange);
export const ProFormDateYear = withInstall(FormDateYear);
