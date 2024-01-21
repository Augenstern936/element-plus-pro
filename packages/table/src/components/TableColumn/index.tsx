import { defineComponent, inject, computed, PropType } from 'vue';
import type { TableColumns } from '@element-plus/pro-components';
import type { ProTableProps } from '../../typing';
import { ElButton, ElIcon, ElTableColumn, ElTooltip } from 'element-plus';
import { Edit, Search, Delete, DocumentCopy } from '@element-plus/icons-vue';
import ProButton from '@element-plus/pro-button';

const TableColumn = defineComponent((props) => {
	const tableProps = inject('tableProps', {}) as ProTableProps & { ctx: Record<string, any> };

	const { ctx: tableCtx, columnEmptyText, cellAlign } = tableProps;

	/**
	 * 是否开启省略号
	 */
	const ellipsis = computed(() => {
		return (columns: TableColumns) => {
			if (columns.ellipsis != void 0) {
				return columns.ellipsis;
			}
			return tableProps.ellipsis;
		};
	});

	/**
	 * 格式化表格标头项筛选集合数据格式
	 * @param column
	 * @returns
	 */
	const formatFiltersOption = (column: TableColumns) => {
		const { filters, valueOption } = column;
		if (filters === true) {
			if (valueOption?.length) {
				return valueOption.map((item: any) => ({ text: item.label || item.text, value: item.value }));
			}
		}
		if (Array.isArray(filters) && filters?.length) {
			return filters.map((item: any) => ({ text: item.label || item.text, value: item.value }));
		}
		return void 0;
	};

	const actionContent = (e: any) => (
		<>
			<ElTooltip content='编辑' placement='top' effect='dark'>
				<ElButton type='warning' size='small' icon={Edit} onClick={() => tableCtx.emit('action', 0, e.row)} />
			</ElTooltip>
			<ElTooltip content='详情' placement='top' effect='dark'>
				<ElButton type='primary' size='small' icon={Search} onClick={() => tableCtx.emit('action', 1, e.row)} />
			</ElTooltip>
			<ElTooltip content='删除' placement='top' effect='dark'>
				<ProButton
					type='danger'
					size='small'
					icon={Delete}
					tip='确定要删除吗?'
					onClickEvent={() => tableCtx.emit('action', 2, e.row)}
				/>
			</ElTooltip>
		</>
	);

	// 渲染表格列内容
	const renderTableColumnContent = (e: { [x: string]: any }, column: TableColumns) => {
		const { dataField: field, type, tooltip, ellipsis, render } = column;

		if ((field && tableCtx.slots[field]) || (type && tableCtx.slots[type])) {
			const name = field || type;
			return tableCtx.slots[name as string]?.(e.row);
		}

		let tdValue = field ? e.row[field] : '-';

		if (type === 'index' || type === 'expand' || type === 'selection') {
			return void 0;
		} else if (type == 'action') {
			tdValue = actionContent(e);
		} else {
			// TODO 后续调整
			if (tooltip) {
				tdValue = typeof tooltip === 'function' ? tooltip(e.row) : tooltip;
				//tdValue = <el-tooltip placement="top" content={tips}>{ tdValue }</el-tooltip>
			}
			// if(ellipsis){
			//     tdValue = <div class="ellipsis-container">{ tdValue }</div>
			// }
		}

		let emptyText = '-';
		if (typeof columnEmptyText === 'boolean') {
			emptyText = columnEmptyText ? '-' : '';
		} else {
			emptyText = columnEmptyText;
		}

		const content = render?.(e.row) ?? tdValue;

		return content ? (
			<>
				{content}{' '}
				{column.copyable && (
					<ElIcon class='copyable'>
						<DocumentCopy />
					</ElIcon>
				)}
			</>
		) : (
			emptyText
		);
	};

	return () => (
		<>
			{props.columns.map((column: TableColumns) => (
				<ElTableColumn
					prop={column.dataField}
					label={column.title}
					type={column.type}
					sortable={column.sorter}
					width={column.width || 'auto'}
					align={column.align || cellAlign}
					filters={formatFiltersOption(column)}
					show-overflow-tooltip={ellipsis.value(column)}
					key={column.dataField}
				>
					{(e: any) =>
						column.children && column.children.length ? (
							<TableColumn columns={column.children} />
						) : (
							renderTableColumnContent(e, column)
						)
					}
				</ElTableColumn>
			))}
		</>
	);
});

TableColumn.props = {
	columns: {
		type: Array as PropType<TableColumns[]>,
	},
};

export default TableColumn;
