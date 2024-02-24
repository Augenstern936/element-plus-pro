/**
 * 表格列类型
 */
export enum ColumnTypeEnum {
	'index', //编号类型
	'expand',
	'selection', //多选类型
	'action', //操作类型
}

/**
 * 分页器位置
 */
export enum PaginationAlignEnum {
	'left',
	'right',
	'center',
}

export enum StatusColorEnum {
	'Success' = '#67C23A',
	'Error' = '#e52848',
	'Processing' = '#409EFF',
	'Warning' = '#E6A23C',
	'Default' = '#dcdcf240',
}

export enum ValueTypeEnum {
	'index',
	'text',
	'password',
	'textarea',
	'date',
	'dates',
	'dateTime',
	'dateWeek',
	'dateMonth',
	'dateYear',
	'dateRange',
	'dateTimeRange',
	'dateMonthRange',
	'time',
	'timeRange',
	'select',
	'treeSelect',
	'checkbox',
	'radio',
	'radioButton',
	'switch',
	'rate',
	'image',
	'avatar',
	'color',
	'cascader',
	'progress',
	'slider',
	'tag',
	'action',
}
