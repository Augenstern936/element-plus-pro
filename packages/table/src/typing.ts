import type { CSSProperties } from 'vue';
import type { ButtonProps } from 'element-plus';
import { ValueTypeEnum, StatusColorEnum, PaginationAlignEnum } from './enum';

export type ProTableProps = {
	loading?: boolean;
	ghost?: boolean;
	// 是否开启缓存模式
	keepAlive?: boolean;
	// 标题
	title?: string;
	// 头部样式
	headerCellStyle?: CSSProperties;
	//
	cellAlign?: GlobalCellAlign;
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
	toolbar?: TableToolbarConfig[];
	//
	options?: boolean;
	//日期格式化
	dateFormatter?: string | number;
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
	key?: string | number; //标识
	title?: string; // 表格列标题
	dataField?: string; // 列字段名称(与数据源中字段对应进行值的映射)
	//type?: ColumnType; // selection：多选 index：序号 expand：可展开的按钮
	width?: string | number; // 列宽
	fixed?: boolean | 'left' | 'right'; // 固定列
	align?: 'left' | 'right' | 'center';
	tooltip?: string | ((row: { [x: string]: any }) => string); // 提示文本
	ellipsis?: boolean; // 是否显示省略号
	hideInTable?: boolean; // 是否在表格中不显示该列
	sorter?: boolean; // 排序
	copyable?: boolean; //是否支持复制
	filters?: boolean | ValueOption; // 是否在表格列标头开启筛选
	search?: boolean | ColumnSearchConfig; // 是否在搜索栏中显示该项
	valueType?: ValueType; // 当前筛选项输入框类型
	//valueOption?: ValueOption; // 筛选项数据集合
	valueEnum?: ValueEnum;
	children?: TableColumns[]; // 子级
	render?: (row: { [x: string]: any }) => string | number | JSX.Element; // 渲染该列对应的值
};

//export type ColumnType = keyof typeof ColumnTypeEnum;

export type ValueType = keyof typeof ValueTypeEnum;

export type ValueOption = {
	label: string;
	value: string | number;
}[];

export type ValueEnum = Record<
	string | number,
	string | number | { text: string; status?: keyof typeof StatusColorEnum }
>;

export type GlobalCellAlign = 'left' | 'right' | 'center';

/**
 * 全局筛选栏配置
 */
export interface GlobalSearchConfig {
	maxShow?: number;
	inline?: boolean;
	labelWidth?: number | string;
	rightTools?: ToolbarActions;
}

/**
 * 筛选栏配置
 */
export type ColumnSearchConfig = {
	order?: number;
	label?: string;
	labelWidth?: 'auto' | number | string;
	placeholder?: string;
	fieldProps?: {
		options?: { label: string; value: string | number | boolean }[];
		[x: string]: any;
	};
};

/**
 * 工具栏配置
 */
export type TableToolbarConfig = {
	search?: boolean | ToolbarSearchConfig;
	actions?: ToolbarActions;
};

interface ToolbarSearchConfig {
	placeholder?: string;
	showAction?: boolean;
	actionText?: string;
	actionStyle?: CSSProperties;
	onChange?: (keywords: string) => void;
	onAction?: (keywords: string) => void;
}

export type ToolbarActions = JSX.Element | JSX.Element[] | ToolbarActionsConfig | ToolbarActionsConfig[];

export type ToolbarActionsConfig = Partial<ButtonProps & { content: string }>;

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
	align?: PaginationAlign;
	[x: string]: any;
};

type PaginationAlign = keyof typeof PaginationAlignEnum;

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
