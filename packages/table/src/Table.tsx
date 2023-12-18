import './style/index.scss';
import props from './props';
import { withInstall } from '@element-plus/pro-utils';
import { defineComponent, KeepAlive, ref, computed, watch } from 'vue';
import { ElMessage, ElTable, ElTableColumn, ElPagination, ElButton } from 'element-plus';
import { Edit, Search, Delete } from '@element-plus/icons-vue';
import ProSearchBar from '@element-plus/pro-search-bar';
import ProButton from '@element-plus/pro-button';
import { ColumnTypeEnum } from './enum';
import type { FunctionalComponent } from 'vue';
import type { Ctx, ProTableProps, TableColumns } from './typing';

/**
 * 高级表格组件
 */
const ProTable = defineComponent(
	(props: ProTableProps, ctx: Ctx) => {
		const {
			loading: propsLoading,
			search: globalSearch,
			keepAlive,
			columns,
			toolbar,
			ellipsis: globalEllipsis,
			columnEmptyText,
			params: propsParams,
			defaultSize: propsDefaultSize,
			pagination: propsPagination,
			dataSource,
			request: getDataSource,
		} = props;

		const loading = ref(propsLoading);

		const searchForm = ref<{ [x: string]: any }>({});

		const searchBarRef = ref();

		const multipleTableRef = ref<InstanceType<typeof ElTable>>();

		const data = ref<{ total: number; data: any[] }>({
			data: [],
			total: 0,
		});

		const params = ref({
			current: 1,
			pageSize: propsDefaultSize || 10,
		});

		const tableColumns = computed(() => props.columns?.filter((item: TableColumns) => !item.hideInTable));

		/**
		 * 是否开启省略号
		 */
		const ellipsis = computed(() => {
			return (columns: TableColumns) => {
				if (columns.ellipsis != void 0) {
					return columns.ellipsis;
				}
				return globalEllipsis;
			};
		});

		/**
		 * 筛选表单项集合
		 */
		const searchFormItems = computed(() => {
			const isShowUndefinedItem = globalSearch || globalSearch == void 0 ? void 0 : true;
			const items = columns?.map((item: TableColumns) => {
				// const { type } = item;
				// const excludeMeetType =
				// 	type != ColumnTypeEnum[0] &&
				// 	type != ColumnTypeEnum[1] &&
				// 	type != ColumnTypeEnum[2] &&
				// 	type != ColumnTypeEnum[3];
				// if (excludeMeetType && (item.search || item.search === isShowUndefinedItem)) {
				// 	return formatSearchFormItemsConfig(item);
				// }
				// const excludeMeetType = type ? ColumnTypeEnum[type] : false;
				// if (excludeMeetType && (item.search || item.search === isShowUndefinedItem)) {
				// 	return formatSearchFormItemsConfig(item);
				// }
			});
			return items?.filter((item: any) => item) || [];
		});

		/**
		 * 格式化筛选栏组件配置项数据，对全局配置和单项配置进行合并
		 * @param tableColumn
		 * @returns
		 */
		const formatSearchFormItemsConfig = (tableColumn: TableColumns) => {
			const { field = '', title, valueType, valueOption = [] } = tableColumn;
			const columnSearchConfig = typeof tableColumn.search === 'object' ? tableColumn.search : {};
			const globalSearchConfig = typeof globalSearch === 'object' ? globalSearch : {};
			return {
				field,
				label: title,
				valueType,
				valueOption,
				...globalSearchConfig,
				...columnSearchConfig,
			};
		};

		/**
		 * 合并多个分页参数对象
		 * @param defaultPage
		 * @param pages
		 * @returns
		 */
		const mergePaginationParams = (
			defaultPage: Record<'current' | 'pageSize', number>,
			...pages: any[]
		): Record<'current' | 'pageSize', number> => {
			let params = { ...defaultPage };
			if (pages.length) {
				pages.forEach((item) => {
					if (typeof item === 'object' && (item.current || item.pageSize)) {
						params = { ...params, ...item };
					}
				});
			}
			return {
				current: params.current,
				pageSize: params.pageSize,
			};
		};

		/**
		 * 发起请求获取数据
		 */
		const sendRequest = async (otherFilterParams = {}) => {
			if (getDataSource && typeof getDataSource === 'function' && !loading.value) {
				try {
					loading.value = true;
					const pageParams = mergePaginationParams(params.value);
					const filterParams = { ...params.value } as Record<string, number>;
					delete filterParams.current;
					delete filterParams.pageSize;
					data.value = await getDataSource(pageParams, {
						...searchForm.value,
						...filterParams,
						...otherFilterParams,
					});
				} catch (err: any) {
					console.warn(err);
				} finally {
					loading.value = false;
				}
			}
		};

		/**
		 * 刷新(重置到最初状态)
		 */
		const refresh = (otherParams = {}) => {
			const { current, pageSize } = mergePaginationParams(params.value, propsParams, propsPagination);
			if (current == params.value.current && params.value.pageSize == pageSize) {
				return sendRequest(otherParams);
			}
			params.value.current = current;
			params.value.pageSize = pageSize;
		};

		/**
		 * 重新加载当前页数据
		 */
		const reload = (otherParams = {}) => {
			if (!dataSource) {
				sendRequest(otherParams);
			}
		};

		/**
		 * 清空选中项
		 */
		const clearSelected = () => {
			multipleTableRef.value!.clearSelection();
		};

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

		/**
		 * 判断对象及属性值是否为空
		 * @param obj
		 * @returns
		 */
		const isEmptyObj = (obj: { [x: string]: any } = {}): boolean => {
			const keys = Object.keys(obj);
			if (!keys.length) return true;
			let count = 0;
			keys.forEach((key) => {
				if (!obj[key]) ++count;
			});
			return keys.length === count;
		};

		/**
		 * 监听搜索
		 */
		const onSearch = () => {
			const isEmpty = isEmptyObj(searchForm.value);
			if (isEmpty) {
				return ElMessage.warning('筛选栏表单信息为空');
			}
			sendRequest();
		};

		const onAction = (index: number, row: any = {}) => {
			ctx.emit('action', index, { ...row });
		};

		const onTools = (index: number) => {
			ctx.emit('tools', index);
		};

		/**
		 * 监听分页参数变化
		 * @param current
		 */
		const onPageChange = (name: 'current' | 'pageSize', value: number) => {
			const pageParams = mergePaginationParams(params.value);
			if (dataSource) {
				return ctx.emit('pageChange', { ...pageParams, [name]: value });
			}
			params.value[name] = value;
		};

		const resetSearchFields = () => searchBarRef.value?.resetFields();

		// ref暴露
		ctx.expose({ refresh, reload, clearSelected, resetSearchFields });

		const renderTableColumn = (columns: TableColumns[]) => {
			return (
				<>
					{columns.map((column: TableColumns) => (
						<ElTableColumn
							prop={column.field}
							label={column.title}
							type={column.type}
							sortable={column.type === 'sortable' ? true : false}
							width={column.width || 'auto'}
							filters={formatFiltersOption(column)}
							show-overflow-tooltip={ellipsis.value(column)}
							key={column.field}
						>
							{(e: any) =>
								column.children && column.children.length
									? renderTableColumn(column.children)
									: renderTableColumnContent(e, column)
							}
						</ElTableColumn>
					))}
				</>
			);
		};

		/**
		 * 渲染表格
		 */
		const RenderTable = () => (
			<div style={{ border: '1px solid transparent' }}>
				<ElTable ref={multipleTableRef} data={data.value.data}>
					{renderTableColumn(tableColumns.value)}
				</ElTable>
				{propsPagination !== false && data.value.total > 0 && (
					<div class='pagination-container'>
						<ElPagination
							v-model:current-page={params.value.current}
							background={true}
							page-count={data.value.total}
							page-size={params.value.pageSize}
							page-sizes={[10, 30, 50, 100, 200]}
							layout='total, sizes, prev, pager, next, jumper'
							onUpdate:page-size={(e: number) => onPageChange('pageSize', e)}
							onUpdate:current-page={(e: number) => onPageChange('current', e)}
						/>
					</div>
				)}
			</div>
		);

		// 渲染表格列内容
		const renderTableColumnContent = (e: { [x: string]: any }, column: TableColumns) => {
			const { field, type, tooltip, ellipsis, render } = column;

			if ((field && ctx.slots[field]) || (type && ctx.slots[type])) {
				const name = field || type;
				return ctx.slots[name as string]?.(e.row);
			}

			let tdValue = field ? e.row[field] : '-';

			if (type === 'index' || type === 'expand' || type === 'selection') {
				return void 0;
			} else if (type == 'action') {
				tdValue = (
					<>
						<ElButton type='warning' size='small' icon={Edit} onClick={() => onAction(0, e.row)}>
							编辑
						</ElButton>
						<ElButton type='primary' size='small' icon={Search} onClick={() => onAction(1, e.row)}>
							查看
						</ElButton>
						<ProButton
							type='danger'
							size='small'
							icon={Delete}
							tip='确定要删除吗?'
							onClickEvent={() => onAction(2, e.row)}
						>
							删除
						</ProButton>
					</>
				);
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

			return render?.(e.row) ?? tdValue ?? emptyText;
		};

		/**
		 * 加载数据(dataSource优先级最高)
		 */
		const loadData = () => {
			if (dataSource && typeof dataSource === 'object') {
				data.value = { ...data.value, ...dataSource };
			} else {
				sendRequest();
			}
		};

		watch(
			() => props.loading,
			(newVal) => {
				loading.value = newVal;
			}
		);

		/**
		 * 参数发生变化更新page
		 */
		watch(
			() => [props.defaultSize, props.params, props.pagination],
			(newVals: any) => {
				params.value = mergePaginationParams({ ...params.value, pageSize: newVals[0] }, newVals[1], newVals[2]);
			},
			{ deep: true, immediate: true }
		);

		/**
		 * params, dataSource参数发生变化重新更新数据
		 */
		watch(
			() => [params.value, props.dataSource],
			() => {
				loadData();
			},
			{ deep: true, immediate: true }
		);

		return () => (
			<div class='pro-table'>
				<ProSearchBar
					ref={searchBarRef}
					v-model={searchForm.value}
					items={searchFormItems.value}
					toolbar={toolbar}
					inline={
						typeof globalSearch === 'object'
							? globalSearch?.inline === void 0
								? true
								: globalSearch.inline
							: true
					}
					onSearch={onSearch}
					onTools={onTools}
				/>
				{!keepAlive ? RenderTable() : <KeepAlive>{RenderTable()}</KeepAlive>}
			</div>
		);
	},
	{
		name: 'ProTable',
	}
) as unknown as FunctionalComponent;

ProTable.props = props;

export default withInstall(ProTable);
