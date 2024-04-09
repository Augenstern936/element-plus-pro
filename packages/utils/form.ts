/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-22 22:45:28
 * @LastEditTime: 2024-04-10 02:10:42
 * @FilePath: \element-plus-pro\packages\utils\form.ts
 */
import { FormValueTypeEnum } from './types';
import { isOnlySymbols } from './check';

/**
 * 格式化表单Placeholder
 * @param label
 * @param type
 * @returns
 */
export function formatPlaceholder(label: string = '', type: keyof typeof FormValueTypeEnum): string | string[] {
	const formatLabel = label && isOnlySymbols(label.slice(-1)) ? label.slice(0, -1) : label;
	console.log(type, 'formatPlaceholder');
	switch (type) {
		case 'text':
		case 'password':
		case 'textarea':
			return `请输入${formatLabel || '内容'}`;
		case 'date':
		case 'dates':
			return '请选择日期';
		case 'dateRange':
		case 'daterange':
			return ['请选择开始日期', '请选择结束日期'];
		case 'dateYear':
		case 'year':
			return '请选择年份';
		case 'dateMonth':
		case 'month':
			return '请选择月份';
		case 'dateMonthRange':
		case 'monthrange':
			return ['请选择开始月份', '请选择结束月份'];
		case 'dateWeek':
		case 'week':
			return '请选择周期';
		case 'dateTime':
		case 'datetime':
			return '请选择日期时间';
		case 'dateTimeRange':
		case 'datetimerange':
			return ['请选择开始日期', '请选择结束日期'];
		case 'time':
			return '请选择时间';
		case 'timeRange':
			return ['请选择开始时间', '请选择结束时间'];
		case 'select':
		case 'treeSelect':
			return `请选择${formatLabel}`;
		default:
			return formatLabel;
	}
}
