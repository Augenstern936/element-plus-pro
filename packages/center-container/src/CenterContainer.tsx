/*
 * @Description:
 * @Date: 2024-06-17 10:01:37
 * @LastEditTime: 2024-07-09 16:57:46
 */
import { toCssUnitValue, withInstall } from "@element-plus/pro-utils";
import type { FunctionalComponent } from "vue-demi";
import { computed, defineComponent } from "vue-demi";
import props from "./props";
import "./styles/index.scss";
import type { ProCenterContainerProps } from "./typing";

const ProCenterContainer = defineComponent(
	(props: ProCenterContainerProps, ctx) => {
		const whStyle = computed(() => {
			return {
				width: toCssUnitValue(props.width || "100%"),
				height: toCssUnitValue(props.height || "100%"),
			};
		});

		return () => (
			<div class="pro-center-container" style={whStyle.value}>
				{ctx.slots.default?.()}
			</div>
		);
	},
	{
		name: "ProCenterContainer",
	}
) as unknown as FunctionalComponent;

ProCenterContainer.props = props;

export default withInstall(ProCenterContainer);
