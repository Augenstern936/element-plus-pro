/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-10 18:26:31
 * @FilePath: \element-plus-pro\packages\field\src\components\Progress.tsx
 */
import type { ProgressProps } from "element-plus";
import { ElProgress, progressProps } from "element-plus";
import "element-plus/theme-chalk/src/progress.scss";
import { CSSProperties, FunctionalComponent, defineComponent } from "vue";

export interface ProFieldProgressProps extends ProgressProps {
	style?: CSSProperties;
}

const ProFieldProgress = defineComponent<ProFieldProgressProps>(
	(props) => {
		return () => <ElProgress {...props} />;
	},
	{
		name: "ProFieldProgress",
	}
) as unknown as FunctionalComponent<ProFieldProgressProps>;

ProFieldProgress.props = progressProps;

export default ProFieldProgress;
