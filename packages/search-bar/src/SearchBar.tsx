import './style/index.scss';
import props from './props';
import { withInstall } from '@element-plus/pro-utils';
import { defineComponent, ref, computed, watch, onMounted, toRaw } from 'vue';
import { ElForm, ElFormItem, ElButton, ElIcon, ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus';
import { ArrowDown, ArrowUp, MoreFilled } from '@element-plus/icons-vue';
import Test from './components';
import mitt from 'mitt';
import type { FunctionalComponent } from 'vue';
import type { ProSearchBarProps, SearchBarFormItem } from './typing';

/**
 * 搜索栏组件
 */
const ProSearchBar = defineComponent<ProSearchBarProps>(
	(props, ctx) => {
		const { inline, modelValue = {}, items, span = 3, actions } = props;

		const emitter = mitt() as any;

		const formContainerRef = ref();
		const searchFormRef = ref();

		const values = Object.keys(modelValue).length ? modelValue : {};

		const form = ref<{ [x: string]: any }>(values);

		const isFilterBarExpand = ref(false);

		const formItems = computed(() => {
			return items?.sort((a: SearchBarFormItem, b: SearchBarFormItem) => {
				const bOrder = b?.order ? b.order : 0;
				return (a?.order ? a.order : bOrder + 1) + bOrder;
			});
		});

		const toolsSlots = computed(() => {
			const contents = ctx.slots['right-tools'] ? ctx.slots['right-tools']?.() : [];
			return contents.filter(({ type }) => String(type) != 'Symbol(Comment)');
		});

		/**
		 * 搜索事件
		 * @returns
		 */
		const onSearch = () => ctx.emit('search', toRaw(form.value));

		/**
		 * 监听清空筛洗栏表单
		 */
		const onClearSearchForm = () => searchFormRef.value.resetFields();

		/**
		 * 表单操作事件集
		 * @param index
		 */
		const onActions = (index: number) => ctx.emit('onActions', index);

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
		 * 渲染表单操作工具
		 * @returns
		 */
		const ActionsRender = () => {
			if (Array.isArray(actions) && actions.length) {
				return (
					<>
						{actions.map((btn: any, index) => {
							if (btn?.content) {
								return (
									<ElButton {...btn} onClick={() => onActions(index)}>
										{btn.content}
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
		 * 渲染工具
		 * @returns
		 */
		const ToolsRender = () => {
			const toolsSlotsRender = () => {
				if (toolsSlots.value.length > 1) {
					return (
						<ElDropdown
							v-slots={{
								dropdown: (
									<ElDropdownMenu>
										{toolsSlots.value.map((el, index) => (
											<ElDropdownItem
												key={index}
												onClick={() => ctx.emit('tools', form.value, index)}
											>
												{[el]}
											</ElDropdownItem>
										))}
									</ElDropdownMenu>
								),
							}}
						>
							<ElButton icon={MoreFilled} circle />
						</ElDropdown>
					);
				}

				return [toolsSlots.value[0]];
			};

			const toolsConfigRender = () => {
				const tools = props.rightTools;

				if (!tools) {
					return;
				}

				if (Array.isArray(tools) && tools.length) {
					return (
						<ElDropdown
							v-slots={{
								dropdown: (
									<ElDropdownMenu>
										{tools.map((btn: { [x: string]: any }, index: number) => (
											<ElDropdownItem key={index}>{buttonRender(btn) || btn}</ElDropdownItem>
										))}
									</ElDropdownMenu>
								),
							}}
						>
							<ElButton icon={MoreFilled} circle />
						</ElDropdown>
					);
				} else {
					return Reflect.ownKeys(tools as object).length ? buttonRender(tools) : tools;
				}
			};

			const buttonRender = (btnConfig: Record<string, any>, index?: number) => {
				if (!btnConfig.__v_isVNode && Object.keys(btnConfig)?.length) {
					return (
						<ElButton
							{...btnConfig}
							key={index || 'tool'}
							onClick={() => ctx.emit('tools', toRaw(form.value), index)}
						>
							{btnConfig.content}
						</ElButton>
					);
				}
				return null;
			};

			return (
				<div class='tools-container'>{toolsSlots.value.length ? toolsSlotsRender() : toolsConfigRender()}</div>
			);
		};

		const resize = (terget: any) => {
			const tergetResize = new ResizeObserver(() => {
				console.log(formContainerRef.value.offsetWidth, 'resize');
			});
			tergetResize.observe(terget);
		};

		// emitter.on('value-change', ({ field, value }: any) => {
		// 	form.value[field] = value;
		// 	ctx.emit('update:modelValue', toRaw(form.value));
		// });

		onMounted(() => {
			if (formContainerRef.value) {
				resize(formContainerRef.value);
			}
		});

		return () => (
			<div
				class='pro-search-bar'
				style={{ display: 'flex', justifyContent: 'space-between', flexDirection: inline ? 'row' : 'column' }}
			>
				{formItems.value.length > 0 && (
					<>
						<div ref={formContainerRef}>
							<ElForm
								ref={searchFormRef}
								model={form.value}
								inline={inline}
								class={['search-bar', [isFilterBarExpand.value ? 'expand' : 'inexpand']]}
							>
								{formItems.value
									.slice(0, isFilterBarExpand.value ? formItems.value.length : span)
									.map((item: SearchBarFormItem) => {
										const { dataField, label, labelWidth } = item;
										const labelText = item.valueType == 'checkbox' ? '' : label;
										return (
											<ElFormItem prop={dataField} label={labelText} label-width={labelWidth}>
												<Test
													v-model={form.value[dataField]}
													emitter={emitter}
													formItem={item}
												/>
											</ElFormItem>
										);
									})}
								<ElFormItem>
									{ActionsRender()}
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
						<ToolsRender />
					</>
				)}
			</div>
		);
	},
	{
		name: 'ProSearchBar',
	}
) as FunctionalComponent<ProSearchBarProps>;

ProSearchBar.props = props;

export default withInstall(ProSearchBar);
