/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-07-09 17:01:47
 * @FilePath: \element-plus-pro\packages\field\src\components\Progress\index.tsx
 */
import { ElProgress, ElText } from "element-plus";
import { DefineComponent, computed, defineComponent } from "vue-demi";
import { ProFieldProgressProps, proFieldProgressProps } from "./props";
import "./style.scss";

const ProFieldProgress = defineComponent<ProFieldProgressProps>(
	(props) => {
		const textColor = computed(() => {
			enum Color {
				"success" = "var(--el-color-success)",
				"warning" = "var(--el-color-warning)",
				"exception" = "var(--el-color-danger)",
			}
			return props.status ? Color[props.status] ?? "var(--el-color-primary)" : "var(--el-color-primary)";
		});

		return () =>
			props.mode === "edit" ? (
				<ElProgress
					{...props}
					class={"field-progress"}
					type="line"
					style={{ width: "100%", ...props?.style }}
				/>
			) : (
				<ElText style={{ ...props.style, color: props.color || textColor.value }}>{props.percentage}%</ElText>
			);
	},
	{
		name: "ProFieldProgress",
	}
) as DefineComponent<ProFieldProgressProps>;

ProFieldProgress.props = proFieldProgressProps as any;

export * from "./props";

export { ProFieldProgress };

export default ProFieldProgress;
