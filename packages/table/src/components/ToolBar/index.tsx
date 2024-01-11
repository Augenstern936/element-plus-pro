import { defineComponent, ref, inject, computed, watch } from 'vue';
import { ElInput, ElTooltip, ElButton, ElPopover, ElCheckboxGroup, ElCheckbox } from 'element-plus';
import { RefreshRight, Search, Setting } from '@element-plus/icons-vue';
import type { FunctionalComponent } from 'vue';
import type { TableColumns, TableToolbarConfig } from '../../typing';

const ToolBar = defineComponent((props, ctx) => {
	const toolbar = inject('toolbar', {}) as {
		title?: string;
		columns: (TableColumns & { id: string })[];
		options?: boolean;
		showSearchOption?: boolean;
		config?: TableToolbarConfig;
	};

	const searchKeywords = ref('');

	const allSelected = ref<boolean>(true);

	const selectedColumns = ref<any[]>([]);

	const title = computed(() => {
		const content = ctx.slots?.title?.() as any[];
		return content[0].children ? content : toolbar.title ? <h3>{toolbar.title}</h3> : '';
	});

	const searchRender = computed(() => {
		const search = toolbar.config?.search;
		const {
			placeholder = '请输入关键字',
			showAction = true,
			actionText = '',
			actionStyle = {},
			onChange = null,
			onAction = null,
		} = typeof search === 'object' ? search : {};
		const actionElementRender = () => {
			return showAction === true ? (
				<ElButton
					icon={actionText ? void 0 : Search}
					style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, ...actionStyle }}
					onClick={() => onAction?.(searchKeywords.value)}
				>
					{actionText}
				</ElButton>
			) : (
				void 0
			);
		};

		const ComElement = (
			<ElInput
				v-model={searchKeywords.value}
				v-slots={{ append: actionElementRender }}
				placeholder={placeholder}
				clearable
				style={{ width: '200px' }}
				onInput={(v) => onChange?.(v)}
			/>
		);
		return search ? ComElement : '';
	});

	const actionsRender = computed(() => {
		const { actions }: any = toolbar.config || {};

		if (typeof actions === 'object' && actions != null) {
			if (actions?.__v_isVNode) {
				return actions;
			}

			if (Array.isArray(actions) && actions.length) {
				return actions.map((item) => {
					return item.__v_isVNode ? item : <ElButton {...item}>{item.content}</ElButton>;
				});
			}

			return <ElButton {...actions}>{actions.content}</ElButton>;
		}

		return ctx.slots.actions?.();
	});

	const columns = computed(() => {
		return toolbar.columns.filter(({ title }) => title);
	});

	const onColumnsSettingChange = (ids: any[]) => {
		console.log(ids, 'ids');
	};

	const initSelectedStatus = () => {
		allSelected.value = true;
		selectedColumns.value = columns.value.map(({ id }) => id);
	};

	watch(
		() => allSelected.value,
		(v) => {
			if (v) {
				initSelectedStatus();
			}
		},
		{
			immediate: true,
		}
	);

	return () => (
		<div class='toolbar-container'>
			<div class='left'>{title.value ? title.value : searchRender.value}</div>
			<div class='right'>
				{title.value && searchRender.value}
				<div class='actions'>{actionsRender.value}</div>
				{toolbar.options && (
					<div class='options'>
						<ElTooltip content='刷新' placement='top'>
							<ElButton class={'icon'} icon={RefreshRight} circle onClick={() => ctx.emit('refresh')} />
						</ElTooltip>
						{toolbar.showSearchOption && (
							<ElTooltip content='搜索栏显隐' placement='top'>
								<ElButton
									class={'icon'}
									icon={Search}
									circle
									onClick={() => ctx.emit('searchDisplay')}
								/>
							</ElTooltip>
						)}
						<ElPopover
							placement='bottom'
							width={200}
							trigger='click'
							popper-class='columns-setting-popover'
							popper-style={{ padding: 0 }}
							v-slots={{
								reference: () => (
									<div class={'icon'} style='display: flex; align-items: center'>
										<ElTooltip content='列设置' placement='top'>
											<ElButton icon={Setting} circle />
										</ElTooltip>
									</div>
								),
							}}
						>
							<div class='columns-setting-popover-content'>
								<div class='head'>
									<ElCheckbox v-model={allSelected.value}>列展示</ElCheckbox>
									<span class='reset-btn' onClick={initSelectedStatus}>
										重置
									</span>
								</div>
								<div class='body'>
									<ElCheckboxGroup v-model={selectedColumns.value} onChange={onColumnsSettingChange}>
										{columns.value.map((item, index) => (
											<p key={index}>
												<ElCheckbox label={item.id}>{item.title}</ElCheckbox>
											</p>
										))}
									</ElCheckboxGroup>
								</div>
							</div>
						</ElPopover>
					</div>
				)}
			</div>
		</div>
	);
}) as unknown as FunctionalComponent;

export default ToolBar;
