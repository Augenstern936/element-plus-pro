import './style/index.scss';
import props from './props';
import { withInstall } from '@element-plus/pro-utils';
import { defineComponent, ref, computed, watch, onMounted } from 'vue';
import {
	ElForm,
	ElFormItem,
	ElInput,
	ElSelect,
	ElOption,
	ElDatePicker,
	ElCheckbox,
	ElButton,
	ElIcon,
	ElDropdown,
	ElDropdownMenu,
	ElDropdownItem,
} from 'element-plus';
import { ArrowDown, ArrowUp, MoreFilled } from '@element-plus/icons-vue';
import type { FunctionalComponent } from 'vue';
import type { ProSearchBarProps, SearchBarItem } from './typing';

/**
 * 搜索栏组件
 */
const ProSearchBar = defineComponent(
	(props: ProSearchBarProps, ctx) => {
		const { inline, modelValue = {}, items, span = 3, actions, toolbar } = props;

		const formContainerRef = ref();
		const searchFormRef = ref();
		const tools = ref<any[]>([]);

		const values = Object.keys(modelValue).length ? modelValue : {};

		const form = ref<{ [x: string]: any }>(values);

		const isFilterBarExpand = ref(false);

		const formItems = computed(() => {
			return items.sort((a: SearchBarItem, b: SearchBarItem) => {
				return (a.order ? a.order : (b.order || 0) - 1) - (b.order || 0);
			});
		});

		/**
		 * 搜索事件
		 * @returns
		 */
		const onSearch = () => ctx.emit('search', { ...form.value });

		/**
		 * 监听清空筛洗栏表单
		 */
		const onClearSearchForm = () => searchFormRef.value.resetFields();

		/**
		 * 表单操作事件集
		 * @param index
		 */
		const onActions = (index: number) => ctx.emit('onActions', index);

		/**
		 * 工具事件集
		 * @param index
		 */
		const onTools = (index: number) => ctx.emit('tools', index);

		ctx.expose({ resetFields: onClearSearchForm });

		watch(
			() => form,
			(newVal) => {
				ctx.emit('update:modelValue', newVal.value);
			},
			{
				deep: true,
			}
		);

		/**
		 * 表单集合
		 */
		const valueTypeComponents = computed(() => {
			return (item: SearchBarItem) => {
				const { field, label, placeholder, valueType = 'input', valueOptions = [] } = item;
				const style = { width: '200px' };
				const components = {
					input: (
						<ElInput
							v-model={form.value[field]}
							type='text'
							placeholder={placeholder || `请输入${label}`}
							clearable
							style={style}
						/>
					),
					select: (
						<ElSelect
							v-model={form.value[field]}
							placeholder={placeholder || `请选择${label}`}
							clearable
							style={style}
						>
							{valueOptions?.length &&
								valueOptions.map((item, index) => (
									<ElOption label={item.label} value={item.value} key={index} />
								))}
						</ElSelect>
					),
					checkbox: <ElCheckbox v-model={form.value[field]} label={label} size='large' />,
					date: (
						<ElDatePicker
							v-model={form.value[field]}
							type='date'
							placeholder={placeholder || '请选择日期'}
							clearable
							style={style}
						/>
					),
					datetime: (
						<ElDatePicker
							v-model={form.value[field]}
							type='datetime'
							placeholder={placeholder || '请选择时间'}
							clearable
							style={style}
						/>
					),
					datetimerange: (
						<ElDatePicker
							v-model={form.value[field]}
							type='datetimerange'
							start-placeholder='开始时间'
							end-placeholder='结束时间'
							format='YYYY-MM-DD HH:mm:ss'
							clearable
							style={style}
						/>
					),
				};
				return components[valueType];
			};
		});

		/**
		 * 渲染表单操作工具
		 * @returns
		 */
		const RenderActions = () => {
			if (Array.isArray(actions) && actions.length) {
				return (
					<>
						{actions.map((btn: any, index) => {
							if (btn?.text) {
								return (
									<ElButton type={btn.type || 'default'} onClick={() => onActions(index)}>
										{btn.text}
									</ElButton>
								);
							}
							return btn;
						})}
					</>
				);
			}
			return (
				<>
					<ElButton type='primary' onClick={onSearch}>
						{props.searchText}
					</ElButton>
					<ElButton onClick={onClearSearchForm}>{props.resetText}</ElButton>
				</>
			);
		};

		/**
		 * 渲染工具栏
		 * @returns
		 */
		const RenderToolbar = () => (
			<>
				{tools.value.length ? (
					<div class='tools-container'>
						{tools.value.length > 1 ? (
							<ElDropdown
								v-slots={{
									dropdown: (
										<ElDropdownMenu>
											{tools.value.map((el, index) => (
												<ElDropdownItem key={index}>{[el]}</ElDropdownItem>
											))}
										</ElDropdownMenu>
									),
								}}
							>
								<ElIcon>
									<MoreFilled />
								</ElIcon>
							</ElDropdown>
						) : (
							[tools.value[0]]
						)}
					</div>
				) : (
					Array.isArray(toolbar) &&
					toolbar.length > 0 && (
						<div class='tools-container'>
							{toolbar.map((btn: { [x: string]: any }, index: number) => {
								if (!btn.__v_isVNode && Object.keys(btn)?.length) {
									return (
										<ElButton
											type={btn.type || 'default'}
											icon={btn.icon}
											onClick={() => onTools(index)}
										>
											{btn.text || `工具${index + 1}`}
										</ElButton>
									);
								}
								return btn;
							})}
						</div>
					)
				)}
			</>
		);

		const resize = (terget: any) => {
			const tergetResize = new ResizeObserver(() => {
				console.log(formContainerRef.value.offsetWidth, 'resize');
			});
			tergetResize.observe(terget);
		};

		onMounted(() => {
			const slotsContents = ctx.slots.toolbar ? ctx.slots.toolbar?.() : [];
			tools.value = slotsContents.filter(({ type }) => typeof type != 'symbol');
			resize(formContainerRef.value);
		});

		return () => (
			<div
				class='pro-search-bar'
				style={{ display: 'flex', justifyContent: 'space-between', flexDirection: inline ? 'row' : 'column' }}
			>
				{formItems.value.length > 0 && (
					<div ref={formContainerRef}>
						<ElForm
							ref={searchFormRef}
							model={form.value}
							inline={inline}
							class={['search-bar', [isFilterBarExpand.value ? 'expand' : 'inexpand']]}
						>
							{formItems.value
								.slice(0, isFilterBarExpand.value ? formItems.value.length : span)
								.map((item: SearchBarItem) => {
									const { field, label, labelWidth } = item;
									const labelText = item.valueType === 'checkbox' ? '' : label;
									return (
										<ElFormItem prop={field} label={labelText} label-width={labelWidth}>
											{valueTypeComponents.value(item)}
										</ElFormItem>
									);
								})}
							<ElFormItem>
								{RenderActions()}
								{formItems.value.length > span && (
									<ElButton
										type='primary'
										link
										onClick={() => (isFilterBarExpand.value = !isFilterBarExpand.value)}
									>
										<ElIcon>{!isFilterBarExpand.value ? <ArrowDown /> : <ArrowUp />}</ElIcon>
										<span>{!isFilterBarExpand.value ? '展开' : '收起'}</span>
									</ElButton>
								)}
							</ElFormItem>
						</ElForm>
					</div>
				)}
				<RenderToolbar />
			</div>
		);
	},
	{
		name: 'ProSearchBar',
	}
) as unknown as FunctionalComponent;

ProSearchBar.props = props;

export default withInstall(ProSearchBar);
