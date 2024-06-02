/*
 * @Description:
 * @Date: 2024-04-30 17:41:09
 * @LastEditTime: 2024-06-03 01:19:56
 */
import ProCopyable from '@element-plus/pro-copyable';
import './styles.scss';
import {
	ProDescriptionsItem,
	ProDescriptionsItems,
	ProDescriptionsProps,
	ProDescriptionsTitle,
	proDescriptionProps,
	TitleJsonConfig,
} from './typing';
import { FunctionalComponent, computed, defineComponent } from 'vue';
import { ElSpace } from 'element-plus';
import { isObject } from '@vueuse/core';

const ProDescriptions = defineComponent<ProDescriptionsProps>(
	(props, ctx) => {
		const title = computed(() => {
			const title = props.title as ProDescriptionsTitle;

			if (typeof title === 'string') {
				return [{ text: title }];
			}
			if (isObject(title)) {
				return [title];
			}

			if (Array.isArray(title)) {
				return (title as (string | TitleJsonConfig)[]).map((item) => {
					return typeof item === 'string' ? { text: item } : isObject(item) ? item : {};
				});
			}

			return [];
		});

		const itemsFormat = (items: ProDescriptionsItems): Array<ProDescriptionsItem[]> => {
			let filterExtractItem: Record<string, any> = {
				startIndex: null,
				data: [],
			};

			const datas = items.filter((item, index) => {
				if (!Array.isArray(item)) {
					filterExtractItem.data.push(item);
					if (!filterExtractItem.startIndex) {
						filterExtractItem.startIndex = index;
					}
				}
				return Array.isArray(item);
			}) as ProDescriptionsItem[][];

			const { startIndex } = filterExtractItem;

			return filterExtractItem.data.length
				? datas.toSpliced(startIndex, startIndex, filterExtractItem.data)
				: datas;
		};

		return () => (
			<ElSpace fill size={props.gap} direction='vertical' style='width: 100%'>
				{itemsFormat(props.items).map((descItems, index) => {
					const { text, mark, textStyle = {} } = (title.value[index] as TitleJsonConfig) ?? {};
					const globalMark = props.titleMark ?? {};
					return (
						<el-descriptions
							class='pro-descriptions'
							{...props}
							v-slots={{
								title: () =>
									text ? (
										<>
											{(mark === true || globalMark === true) && (
												<span style={textStyle ?? {}}>{text}</span>
											)}
											{mark?.shape === 'bar' ||
											globalMark?.shape === 'bar' ||
											(!mark?.shape && !globalMark?.shape) ? (
												<span style={textStyle}>{text}</span>
											) : (
												<ul>
													<li
														style={{
															'--mark-color': mark?.color || globalMark?.color || 'unset',
															listStyleType: mark?.shape || globalMark?.shape || 'disc',
														}}
													>
														<span style={textStyle}>{text}</span>
													</li>
												</ul>
											)}
										</>
									) : (
										<></>
									),
							}}
						>
							{descItems?.map((item, index) => {
								const { dataField = '', render } = item;
								const data = props.data ?? {};
								const slotContent =
									dataField && ctx.slots[dataField]
										? ctx.slots[dataField]?.(data)
										: render?.(data ?? {});
								return (
									<>
										{ctx.slots.default ? (
											<el-descriptions-item style={props.bodyStyle ?? {}}>
												{ctx.slots.default()}
											</el-descriptions-item>
										) : (
											<el-descriptions-item
												{...item}
												key={index}
												v-slots={{
													label: () => (
														<span style={props.labelStyle ?? {}}>{item.label}</span>
													),
												}}
											>
												{slotContent ??
													(item.copyable && (data[dataField] || data[dataField] === 0) ? (
														<ProCopyable value={data[dataField]} />
													) : (
														data[dataField] || props.emptyText || '--'
													))}
											</el-descriptions-item>
										)}
									</>
								);
							})}
						</el-descriptions>
					);
				})}
			</ElSpace>
		);
	},
	{
		name: 'ProDescriptions',
	}
) as unknown as FunctionalComponent<ProDescriptionsProps>;

ProDescriptions.props = proDescriptionProps;

export * from './typing';

export default ProDescriptions;
