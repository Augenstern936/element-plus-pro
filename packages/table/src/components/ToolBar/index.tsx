import props from './props';
import { defineComponent, ref, computed, watch } from 'vue';
import { ElTooltip, ElButton, ElPopover, ElCheckboxGroup, ElCheckbox } from 'element-plus';
import { RefreshRight, Search, Setting } from '@element-plus/icons-vue';
import type { FunctionalComponent } from 'vue';
import type { ToolBarProps } from './typing';

const ToolBar = defineComponent((props: ToolBarProps, ctx) => {
	const allSelected = ref<boolean>(true);

	const selectedColumns = ref<any[]>([]);

	const title = computed(() => {
		const content = ctx.slots?.title?.() as any[];
		return content[0].children ? ctx.slots.title?.() : <h3>{props.title}</h3>;
	});

	const columns = computed(() => {
		return props.columns.filter((item) => item.title);
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
		<div class='toolbar-container' style={{ height: '50px' }}>
			<div class='left'>{title.value}</div>
			<div class='right'>
				<div class='actions'>操作</div>
				{props.options && (
					<div class='options'>
						<ElTooltip content='刷新' placement='top'>
							<ElButton class={'icon'} icon={RefreshRight} circle onClick={() => ctx.emit('refresh')} />
						</ElTooltip>
						<ElTooltip content='搜索栏显隐' placement='top'>
							<ElButton class={'icon'} icon={Search} circle onClick={() => ctx.emit('searchDisplay')} />
						</ElTooltip>
						<ElPopover
							placement='bottom'
							width={200}
							trigger='click'
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

ToolBar.props = props;

export default ToolBar;
