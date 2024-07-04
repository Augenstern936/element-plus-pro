/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-07-02 22:22:28
 * @LastEditTime: 2024-07-04 22:09:32
 * @FilePath: \element-plus-pro\packages\form\src\components\DatePicker\index.tsx
 */
import { defineComponent } from 'vue';
import { ProFormField } from '../../core';

/**
 * 日期
 */
export const ProFormDate = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'date'} fieldProps={props} />;
	},
	{
		name: 'ProFormDate',
	}
);

/**
 * 分段日期
 */
export const ProFormDateRange = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'dateRange'} fieldProps={props} />;
	},
	{
		name: 'ProFormDateRange',
	}
);

export const ProFormDates = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'dates'} fieldProps={props} />;
	},
	{
		name: 'ProFormDates',
	}
);

/**
 * 日期时间
 */
export const ProFormDateTime = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'dateTime'} fieldProps={props} />;
	},
	{
		name: 'ProFormDateTime',
	}
);

/**
 * 分段日期时间
 */
export const ProFormDateTimeRange = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'dateTimeRange'} fieldProps={props} />;
	},
	{
		name: 'ProFormDateTimeRange',
	}
);

/**
 * 周
 */
export const ProFormDateWeek = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'dateWeek'} fieldProps={props} />;
	},
	{
		name: 'ProFormDateWeek',
	}
);

/**
 * 月
 */
export const ProFormDateMonth = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'dateMonth'} fieldProps={props} />;
	},
	{
		name: 'ProFormDateMonth',
	}
);

/**
 * 分段月
 */
export const ProFormDateMonthRange = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'dateMonthRange'} fieldProps={props} />;
	},
	{
		name: 'ProFormDateMonthRange',
	}
);

/**
 * 年
 */
export const ProFormDateYear = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={'dateYear'} fieldProps={props} />;
	},
	{
		name: 'ProFormDateYear',
	}
);
