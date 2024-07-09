/*
 * @Description:
 * @Date: 2024-04-30 17:41:09
 * @LastEditTime: 2024-07-09 16:58:08
 */
import ProCopyable from "@element-plus/pro-copyable";
import { isObject } from "@vueuse/core";
import { ElDescriptions, ElDescriptionsItem, ElSpace } from "element-plus";
import { FunctionalComponent, computed, defineComponent } from "vue-demi";
import "./style.scss";
import {
	ProDescriptionsItem,
	ProDescriptionsItems,
	ProDescriptionsProps,
	ProDescriptionsTitle,
	TitleJsonConfig,
	proDescriptionProps,
} from "./typing";

enum ShapeEnum {
	"bar",
	"disc",
	"circle",
	"square",
	"disclosure-open",
	"disclosure-closed",
}

const ProDescriptions = defineComponent<ProDescriptionsProps>(
	(props, ctx) => {
		const title = computed(() => {
			const title = props.title as ProDescriptionsTitle;
			if (typeof title === "string") {
				return {
					text: [title],
				};
			}
			if (isObject(title)) {
				const { text = "", mark, textStyle } = title as TitleJsonConfig;
				return {
					text: typeof text === "string" ? [text] : Array.isArray(text) ? text : [""],
					textStyle,
					mark,
				};
			}
			if (Array.isArray(title)) {
				return {
					text: title,
				};
			}
			return {
				text: [],
			};
		});

		/**
		 * 格式化项
		 * @param items
		 * @returns
		 */
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
			const mergeData = datas.toSpliced(startIndex, startIndex, filterExtractItem.data);
			return filterExtractItem.data.length ? mergeData : datas;
		};

		return () => (
			<ElSpace fill size={props.gap} direction="vertical" style="width: 100%">
				{itemsFormat(props.items).map((descItems, index) => {
					return (
						<ElDescriptions
							class="pro-descriptions"
							{...(props as any)}
							title={""}
							v-slots={{
								title: () => {
									if (ctx.slots.title) {
										return ctx.slots.title();
									}
									const titleText = title.value.text[index];
									const { mark = {}, textStyle = {} } = title.value;
									const { shape = "", color = "default" } = isObject(mark) ? mark : {};
									return titleText ? (
										<>
											{mark === true || shape === "bar" || !shape ? (
												<span
													class="title-mark-shape-bar"
													style={{ "--mark-color": color, ...textStyle }}
												>
													{titleText}
												</span>
											) : (
												<ul>
													<li
														style={{
															"--mark-color": color,
															listStyleType: ShapeEnum[shape] ? shape : "disc",
														}}
													>
														<span style={textStyle}>{titleText}</span>
													</li>
												</ul>
											)}
										</>
									) : (
										""
									);
								},
							}}
						>
							{descItems?.map((item, index) => {
								const { dataField = "", render } = item;
								const data = props.data ?? {};
								const slotContent =
									dataField && ctx.slots[dataField]
										? ctx.slots[dataField]?.(data)
										: render?.(data ?? {});
								return (
									<>
										{ctx.slots.default ? (
											<ElDescriptionsItem style={props.bodyStyle ?? {}}>
												{ctx.slots.default()}
											</ElDescriptionsItem>
										) : (
											<ElDescriptionsItem
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
														data[dataField] || props.emptyText || "--"
													))}
											</ElDescriptionsItem>
										)}
									</>
								);
							})}
						</ElDescriptions>
					);
				})}
			</ElSpace>
		);
	},
	{
		name: "ProDescriptions",
	}
) as unknown as FunctionalComponent<ProDescriptionsProps>;

ProDescriptions.props = proDescriptionProps;

export * from "./typing";

export default ProDescriptions;
