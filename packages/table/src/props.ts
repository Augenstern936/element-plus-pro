import { Plus } from '@element-plus/icons-vue';
import type { PropType } from 'vue';
import type {
	TableColumns,
	GlobalSearchConfig,
	ToolbarConfig,
	TableStyle,
	DataSource,
	Params,
	Request,
} from './typing';

export default {
	loading: {
		type: Boolean,
		default: false,
	},
	// 是否开启缓存模式
	keepAlive: {
		type: Boolean,
		default: false,
	},
	headerTitle: {
		type: String,
		default: '',
	},
	// 列
	columns: {
		type: Array as PropType<TableColumns[]>,
		required: true,
	},
	// 为空时，默认显示的标记
	columnEmptyText: {
		type: [Boolean, String],
		default: '-',
	},
	// 默认分页大小
	defaultSize: {
		type: Number,
		default: 10,
	},
	// 是否开启超出列宽显示省略号
	ellipsis: {
		type: Boolean,
		default: void 0,
	},
	// 全局搜索栏配置(权限低于单列配置)
	search: {
		type: [Boolean, Object as PropType<GlobalSearchConfig>],
		default: void 0,
	},
	// 工具栏
	toolbar: {
		type: [Boolean, Array as PropType<ToolbarConfig[]>],
		default: [
			{
				text: '新增',
				type: 'primary',
				icon: Plus,
			},
		],
	},
	//
	options: {
		type: [Boolean],
		default: true,
	},
	// 样式
	tableStyle: {
		type: Object as PropType<TableStyle>,
		default: () => {},
	},
	// 获取数据需要的额外参数
	params: {
		type: Object as PropType<Params>,
		default: {},
	},
	pagination: {
		type: [Boolean, Object as PropType<{ [x: string]: any }>],
		default: true,
	},
	// 数据源
	dataSource: {
		type: Object as PropType<DataSource>,
	},
	// 获取数据的方法
	request: {
		type: Function as PropType<Request>,
	},
	// 监听查询事件
	onSearch: {
		type: Function as PropType<(params: { [x: string]: any }) => void>,
	},
	// 监听重置事件
	onReset: {
		type: Function,
	},
	// 监听过滤事件
	onFilter: {
		type: Function as PropType<(e: { field: string; value: string | number }) => void>,
	},
};
