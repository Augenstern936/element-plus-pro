import { ProSearchBar } from '@element-plus/pro-form';
import { enumTransformOptions, withInstall } from '@element-plus/pro-utils';
import { isObject } from '@vueuse/core';
import { ElAlert, ElMessage, ElPagination, ElTable } from 'element-plus';
import { v4 as uuidv4 } from 'uuid';
import type { FunctionalComponent } from 'vue-demi';
import { KeepAlive, computed, defineComponent, provide, ref, watch } from 'vue-demi';
import { Card, TableColumn, ToolBar } from './components';
import './style/index.scss';
import { Ctx, GlobalSearchConfig, ProTableProps, TableColumns, proTableProps } from './typing';
// import './fetch-mock';
import { server } from './mock';

/**
 * 高级表格组件
 */
const ProTable = defineComponent<ProTableProps>(
	(props, ctx: Ctx) => {
		const {
			loading: propsLoading,
			search: globalSearch,
			keepAlive,
			columns,
			params: propsParams,
			defaultSize: propsDefaultSize,
			pagination: propsPagination,
			dataSource,
			request: getDataSource,
		} = props;

		const loading = ref(propsLoading);

		const isFullScreening = ref(false);

		const searchForm = ref<{ [x: string]: any }>({});

		const searchBarRef = ref();

		const multipleTableRef = ref<InstanceType<typeof ElTable>>();

		const multipleSelection = ref<{ [x: string]: any }[]>([]);

		const searchDisplay = ref<'none' | 'block'>('block');

		const data = ref<{ total: number; data: any[] }>({
			data: [],
			total: 0,
		});

		const params = ref({
			current: 1,
			pageSize: propsDefaultSize || 10,
		});

		const settingTableColumns = ref<TableColumns[]>([]);

		const isColumnsSettingChange = ref(false);

		const toolbarTitleRender = computed(() => {
			return ctx.slots.title || ctx.slots['title'];
		});

		const tableColumns = computed(() => {
			const filterColumns = props.columns?.filter((item: TableColumns) => !item.hideInTable) ?? [];
			return filterColumns.map((item) => ({ ...item, id: uuidv4(), name: item.dataField }));
		});

		const renderTableColumns = computed(() => {
			return isColumnsSettingChange.value ? settingTableColumns.value : tableColumns.value;
		});

		const paginationAlignStyle = computed(() => {
			const align = typeof props?.pagination == 'object' ? props.pagination['align'] : 'right';
			return {
				display: 'flex',
				justifyContent: align || 'right',
			};
		});

		/**
		 * 筛选表单项集合
		 */
		const searchFormItems = computed(() => {
			const isShowUndefinedItem = globalSearch || globalSearch === void 0 ? void 0 : true;
			return tableColumns.value
				.map((item: TableColumns) => {
					const { valueType, search } = item;
					const exclude =
						valueType != 'index' &&
						valueType != 'image' &&
						valueType != 'avatar' &&
						valueType != 'tag' &&
						valueType != 'action';
					if (exclude && (search || search === isShowUndefinedItem)) {
						return formatSearchFormItemsConfig(item);
					}
				})
				.filter((item) => item);
		});

		const toOrdinaryObj = (proxyObj: any) => Object.fromEntries(Object.entries(proxyObj));

		/**
		 * 格式化筛选栏组件配置项数据，对全局配置和单项配置进行合并
		 * @param tableColumn
		 * @returns
		 */
		const formatSearchFormItemsConfig = (tableColumn: TableColumns) => {
			const { dataField = '', title, valueType, valueEnum } = tableColumn;
			const columnSearchConfig = typeof tableColumn.search === 'object' ? tableColumn.search : {};
			const globalSearchConfig = typeof globalSearch === 'object' ? globalSearch : {};
			return {
				label: title,
				dataField,
				valueType,
				valueOptions: valueEnum ? enumTransformOptions(valueEnum as any) : void 0,
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
			server.start();
			try {
				const res = await fetch('https://example.com/api/pro-table/list');
				const test = (await res.json()) as Record<string, any>;
				console.log(test.data.list, '数据');
				data.value = {
					data: test.data.list,
					total: test.data.total,
				};
			} catch (err) {
				console.log(err, '异常');
			} finally {
				//fetchMock.restore()
			}
			// if (getDataSource && typeof getDataSource === "function" && !loading.value) {
			// 	try {
			// 		loading.value = true;
			// 		const pageParams = mergePaginationParams(params.value);
			// 		const filterParams = { ...params.value } as Record<string, number>;
			// 		delete filterParams.current;
			// 		delete filterParams.pageSize;
			// 		data.value = await getDataSource(pageParams, {
			// 			...searchForm.value,
			// 			...filterParams,
			// 			...otherFilterParams,
			// 		});
			// 	} catch (err: any) {
			// 		console.warn(err);
			// 	} finally {
			// 		loading.value = false;
			// 	}
			// }
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

		const onSearchDisplay = () => {
			if (searchFormItems.value.length) {
				searchDisplay.value = searchDisplay.value === 'block' ? 'none' : 'block';
			}
		};

		const onColumnsSettingChange = (ids: string[]) => {
			settingTableColumns.value = tableColumns.value.filter(
				(column: any) => ids.includes(column.id) || column?.type == 'selection'
			);
			isColumnsSettingChange.value = true;
		};

		const onColumnsSettingReset = () => {
			settingTableColumns.value = [];
			isColumnsSettingChange.value = false;
		};

		const onSelectionChange = (vals: any[]) => {
			multipleSelection.value = vals;
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

		/**
		 * 渲染表格
		 */
		const RenderTable = () => (
			<div style={{ border: '1px solid transparent' }}>
				<ElTable
					ref={multipleTableRef}
					data={data.value.data}
					header-cell-style={{
						color: '#333',
						fontWeight: 600,
						background: '#f5f7fa',
						...props.headerCellStyle,
					}}
					onSelection-change={onSelectionChange}
				>
					<TableColumn columns={renderTableColumns.value} />
				</ElTable>
				{propsPagination !== false && data.value.total > 0 && (
					<div class='pagination-container' style={paginationAlignStyle.value}>
						<ElPagination
							v-model:current-page={params.value.current}
							background={true}
							total={data.value.total}
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

		/**
		 * 加载数据(dataSource优先级最高)
		 */
		const loadData = () => {
			if (dataSource && Array.isArray(dataSource)) {
				data.value.data = [...dataSource];
			} else {
				sendRequest();
			}
		};

		provide('tableProps', {
			ctx,
			...props,
			columns: renderTableColumns.value,
		});

		provide('toolbar', {
			title: props.title,
			options: props.options,
			columns: tableColumns.value,
			showSearchOption: searchFormItems.value.length ? true : false,
			config: props.toolbar,
		});

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

		// ref暴露
		ctx.expose({ loading, refresh, reload, clearSelected, resetSearchFields });

		return () => {
			const searchProps = isObject(props.search) ? (props.search as GlobalSearchConfig) : {};
			return (
				<div
					id='pro-table'
					class='pro-table'
					style={isFullScreening.value ? { height: '100vh', background: '#fff' } : {}}
				>
					<Card
						v-show={searchDisplay.value === 'block'}
						ghost={props.ghost || false}
						style={{ paddingBottom: 0, marginBottom: '20px' }}
					>
						<ProSearchBar
							ref={searchBarRef}
							{...searchProps}
							columns={searchFormItems.value as any}
							colProps={{
								span: searchProps?.colSpan,
							}}
							v-model={searchForm.value}
							v-slots={
								{
									// submitter: () => (
									// 	<>
									// 		<div>111</div>
									// 		<div>222</div>
									// 	</>
									// ),
								}
							}
							// rightTools={searchBarTools.value}
							// inline={
							// 	typeof globalSearch == 'object'
							// 		? globalSearch['inline'] === void 0
							// 			? true
							// 			: globalSearch['inline']
							// 		: true
							// }
							// v-slots={{
							// 	'right-tools': () => ctx.slots['search-bar-right-tools']?.({ ...searchForm.value }),
							// }}
							// onSearch={onSearch}
							// onTools={(i: number) => ctx.emit('tools', i)}
						/>
					</Card>
					<Card ghost={props.ghost || false}>
						<ToolBar
							onSearchDisplay={onSearchDisplay}
							onColumnsSettingChange={onColumnsSettingChange}
							onColumnsSettingReset={onColumnsSettingReset}
							onFullScreenChange={(v: boolean) => {
								isFullScreening.value = v;
							}}
							v-slots={{
								title: () =>
									toolbarTitleRender.value?.({ selection: toOrdinaryObj(multipleSelection.value) }),
								actions: () =>
									ctx.slots.toolbar?.({ selection: toOrdinaryObj(multipleSelection.value) }),
							}}
						/>
						{multipleSelection.value.length > 0 && (
							<ElAlert
								type='info'
								close-text='取消选择'
								style={{ marginBottom: '20px', backgroundColor: '#f5f7fa' }}
								onClose={clearSelected}
								v-slots={{
									title: () => (
										<>
											已选择 <span class='alert-count'>{multipleSelection.value.length}</span> 项
										</>
									),
								}}
							/>
						)}
						{!keepAlive ? RenderTable() : <KeepAlive>{RenderTable()}</KeepAlive>}
					</Card>
				</div>
			);
		};
	},
	{
		name: 'ProTable',
	}
) as unknown as FunctionalComponent<ProTableProps>;

ProTable.props = proTableProps as any;

export default withInstall(ProTable);
