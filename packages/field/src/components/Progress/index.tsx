/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-15 15:50:20
 * @FilePath: \element-plus-pro\packages\field\src\components\Progress.tsx
 */
import { ElProgress } from "element-plus";
import "element-plus/theme-chalk/src/progress.scss";
import { FunctionalComponent, defineComponent } from "vue";
import { ProFieldProgressProps, proFieldProgressProps } from "./typing";

const ProFieldProgress = defineComponent<ProFieldProgressProps>(
	(props) => {
		return () => <ElProgress {...props} />;
	},
	{
		name: "ProFieldProgress",
	}
) as unknown as FunctionalComponent<ProFieldProgressProps>;

ProFieldProgress.props = proFieldProgressProps;

export * from "./typing";

export { ProFieldProgress };

export default ProFieldProgress;
