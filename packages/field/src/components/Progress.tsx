/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-04 23:43:09
 * @FilePath: \element-plus-pro\packages\field\src\components\Progress.tsx
 */
import 'element-plus/theme-chalk/src/progress.scss';
import { progressProps, ElProgress } from 'element-plus';
import type { ProgressProps } from 'element-plus';
import { CSSProperties, FunctionalComponent, defineComponent } from 'vue';

export interface ProFieldProgressProps extends ProgressProps {
	style?: CSSProperties;
}

const ProFieldProgress = defineComponent<ProFieldProgressProps>(
	(props, ctx) => {
		return () => <ElProgress {...props} />;
	},
	{
		name: 'ProFieldProgress',
	}
) as FunctionalComponent<ProFieldProgressProps>;

ProFieldProgress.props = progressProps;

export default ProFieldProgress;
