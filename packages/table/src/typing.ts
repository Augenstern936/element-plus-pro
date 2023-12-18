import { ColumnTypeEnum } from './enum';

export type ProTableProps = {
	loading?: boolean;
	// 是否开启缓存模式
	keepAlive?: boolean;
	// 列
	columns: TableColumns[];
	// 为空时，默认显示的标记
	columnEmptyText: boolean | string;
	// 默认分页大小
	defaultSize?: number;
	// 是否开启超出列宽显示省略号
	ellipsis?: boolean;
	// 全局搜索栏配置(权限低于单列配置)
	search?: boolean | GlobalSearchConfig;
	// 工具栏
	toolbar?: boolean | ToolbarConfig[];
	// 样式
	tableStyle?: TableStyle;
	// 获取数据需要的额外参数
	params?: Params;
	pagination?: boolean | PaginationConfig;
	// 数据源
	dataSource?: DataSource;
	// 获取数据的方法
	request?: Request;
	// 监听查询事件
	onSearch?: (params: { [x: string]: any }) => void;
	// 监听重置事件
	onReset?: () => void;
	// 监听过滤事件
	onFilter?: (e: { field: string; value: string | number }) => void;
};

export type TableColumns = {
	title?: string; // 表格列标题
	field?: string; // 列字段名称(与数据源中字段对应进行值的映射)
	type?: ColumnType; // selection：多选 index：序号 expand：可展开的按钮
	width?: string | number; // 列宽
	fixed?: boolean | 'left' | 'right'; // 固定列
	tooltip?: string | ((row: { [x: string]: any }) => string); // 提示文本
	ellipsis?: boolean; // 是否显示省略号
	hideInTable?: boolean; // 是否在表格中不显示该列
	filters?: boolean | ValueOption; // 是否在表格列标头开启筛选
	search?: boolean | SearchConfig; // 是否在搜索栏中显示该项
	valueType?: ValueType; // 当前筛选项输入框类型
	valueOption?: ValueOption; // 筛选项数据集合
	children?: TableColumns[]; // 子级
	render?: (row: { [x: string]: any }) => string | number | JSX.Element; // 渲染该列对应的值
};

export type ColumnType = keyof typeof ColumnTypeEnum;

export type ValueType = 'input' | 'select' | 'date' | 'datetime' | 'datetimerange' | 'checkbox';

export type ValueOption = {
	label: string;
	value: string | number;
}[];

/**
 * 全局筛选栏配置
 */

export interface GlobalSearchConfig extends SearchConfig {
	maxShow?: number;
	inline?: boolean;
}

/**
 * 筛选栏配置
 */
export type SearchConfig = {
	order?: number;
	label?: string;
	labelWidth?: 'auto' | number | string;
	placeholder?: string;
};

/**
 * 工具栏配置
 */
export type ToolbarConfig =
	| Element
	| {
			text: string;
			icon?: JSX.Element;
			type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
	  };

/**
 * 表格样式
 */

export type TableStyle = {};

/**
 * 用于 request 查询的额外参数，一旦变化会触发重新加载
 */
export type Params = {
	current?: number;
	pageSize?: number;
	[x: string]: any;
};

export type PaginationConfig = {
	current?: number;
	pageSize?: number;
	[x: string]: any;
};

/**
 * 表格数据源(最高级别权重)
 */
export type DataSource = {
	total: number;
	data: {}[];
};

/**
 * 获取 dataSource 的方法
 */
export type Request = (
	params: { current: number; pageSize: number },
	filter: { [x: string]: any }
) => {
	data: {}[];
	total: number;
};

export type Ctx = {
	attrs: {};
	emit: (eventName: string, ...args: any) => void;
	slots: any;
	expose: (obj: { [x: string]: any }) => void;
};
