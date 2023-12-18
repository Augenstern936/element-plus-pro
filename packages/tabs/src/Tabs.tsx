import './style/index.scss';
import props from './props';
import { withInstall } from '@element-plus/pro-utils';
import { defineComponent, computed } from 'vue';
import { ElTabs, ElTabPane, ElEmpty } from 'element-plus';
import type { FunctionalComponent } from 'vue';
import type { ProTabsProps, TabsPane, TabsPaneRender } from './typing';

const ProTabs = defineComponent(
	(props: ProTabsProps, ctx) => {
		const activeTab = computed({
			get: () => props.modelValue,
			set: (v) => ctx.emit('update:modelValue', v),
		});

		const onTabChange = (name: string | number) => {
			ctx.emit('change', name);
			ctx.emit('update:modelValue', name);
		};

		/**
		 * 渲染tab标签
		 * @param param0
		 * @returns
		 */
		const RenderTabLabel = ({ label, badge }: TabsPane) => {
			if (typeof badge === 'string' && Number.isNaN(Number(badge))) {
				badge = 0;
				console.warn('Badge field value incorrect!');
			} else {
				badge = Number(badge);
			}

			return (
				<>
					{label} {badge ? <span class='badge'>{badge > 99 ? '99+' : badge}</span> : ''}
				</>
			);
		};

		/**
		 * 渲染面板内容
		 * @param render
		 * @param name
		 * @returns
		 */
		const RenderPaneConetnt = (render: TabsPaneRender = '', name: string | number) => {
			if (render) {
				return typeof render === 'function' ? render() : render;
			}
			if (ctx.slots[name]) {
				return ctx.slots[name]?.();
			}
			if (ctx.slots.default) {
				return ctx.slots.default?.();
			}
			return props.empty ? <ElEmpty image-size={100} /> : '';
		};

		return () => (
			<ElTabs
				class='pro-tabs'
				v-model={activeTab.value}
				{...props.tabsProps}
				before-leave={props.beforeChange}
				onTabChange={onTabChange}
			>
				{props.panes?.map((item: TabsPane) => (
					<ElTabPane name={item.name} key={item.name}>
						{{
							label: () => <RenderTabLabel {...item} />,
							default: () => RenderPaneConetnt(item.render, item.name),
						}}
					</ElTabPane>
				))}
			</ElTabs>
		);
	},
	{
		name: 'ProTabs',
	}
) as unknown as FunctionalComponent;

ProTabs.props = props;

export default withInstall(ProTabs);
