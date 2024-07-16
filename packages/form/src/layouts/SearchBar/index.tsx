/*
 * @Description:;
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2024-07-16 10:37:59
 * @FilePath: \element-plus-pro\packages\form\src\layouts\SearchBar\index.tsx
 */
import { Search } from "@element-plus/icons-vue";
import ProButton, { ProButtonProps } from "@element-plus/pro-button";
import { withInstall } from "@element-plus/pro-utils";
import { isObject } from "@vue/shared";
import { useVModel } from "@vueuse/core";
import { ElSpace } from "element-plus";
import { DefineComponent, defineComponent } from "vue-demi";
import { GenerateForm } from "../../core";
import { proSearchBarProps, ProSearchBarProps } from "./typing";

const SearchBar = defineComponent<ProSearchBarProps>(
	(props, ctx) => {
		const model = useVModel(props, "modelValue", ctx.emit);
		const onSubmitterClick = (name: "submit" | "reset", buttonProps: ProButtonProps & { onClick?: Function }) => {
			if (typeof buttonProps.onClick === "function") {
				return buttonProps.onClick(model.value);
			}
			ctx.emit(name, model.value);
		};
		return () => (
			<GenerateForm
				{...props}
				labelPosition={props.layout === "vertical" ? "top" : "right"}
				inline={true}
				v-model={model.value}
				v-slots={{
					submitter: (entity: Record<string, any>) => {
						const searchButtonProps = isObject(props.searchButton) ? props.searchButton : {};
						const resetButtonProps = isObject(props.resetButton) ? props.resetButton : {};
						const submitterSlot = ctx.slots?.submitter;
						return (
							<ElSpace>
								{props.searchButton !== false && !submitterSlot && (
									<ProButton
										type={"primary"}
										icon={Search}
										{...searchButtonProps}
										onClick={() => onSubmitterClick("submit", searchButtonProps)}
									>
										{props.searchButtonTitle || "搜索"}
									</ProButton>
								)}
								{props.resetButton != false && !submitterSlot && (
									<ProButton
										{...resetButtonProps}
										onClick={() => onSubmitterClick("reset", resetButtonProps)}
									>
										{props.resetButtonTitle || "重置"}
									</ProButton>
								)}
								{submitterSlot?.(model.value)}
							</ElSpace>
						);
					},
				}}
			/>
		);
	},
	{
		name: "ProSearchBar",
	}
) as DefineComponent<ProSearchBarProps>;

SearchBar.props = proSearchBarProps;

export * from "./typing";

export const ProSearchBar = withInstall(SearchBar);
