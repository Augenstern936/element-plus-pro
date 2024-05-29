/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-05-29 15:22:53
 * @FilePath: \element-plus-pro\packages\field\src\components\Progress.tsx
 */
import { ElProgress } from "element-plus";
import "element-plus/theme-chalk/src/progress.scss";
import { FunctionalComponent, defineComponent } from "vue";
import { ProFieldProgressProps, proFieldProgressProps } from "./props";

const ProFieldProgress = defineComponent<ProFieldProgressProps>(
	(props) => {
		return () => <ElProgress {...props} />;
	},
	{
		name: "ProFieldProgress",
	}
) as unknown as FunctionalComponent<ProFieldProgressProps>;

ProFieldProgress.props = proFieldProgressProps as any;

export * from "./props";

export { ProFieldProgress };

export default ProFieldProgress;
