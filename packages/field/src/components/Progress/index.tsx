/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-06-15 22:23:17
 * @FilePath: \element-plus-pro\packages\field\src\components\Progress\index.tsx
 */
import { ElProgress, ElText } from 'element-plus';
import 'element-plus/theme-chalk/src/progress.scss';
import { FunctionalComponent, computed, defineComponent } from 'vue';
import { ProFieldProgressProps, proFieldProgressProps } from './props';

const ProFieldProgress = defineComponent<ProFieldProgressProps>(
	(props) => {
		const textColor = computed(() => {
			enum Color {
				'success' = 'var(--el-color-success)',
				'warning' = 'var(--el-color-warning)',
				'exception' = 'var(--el-color-danger)',
			}
			return props.status ? Color[props.status] ?? 'var(--el-color-primary)' : 'var(--el-color-primary)';
		});

		return () =>
			props.mode === 'edit' ? (
				<ElProgress {...props} />
			) : (
				<ElText style={{ ...props.style, color: props.color || textColor.value }}>{props.percentage}%</ElText>
			);
	},
	{
		name: 'ProFieldProgress',
	}
) as unknown as FunctionalComponent<ProFieldProgressProps>;

ProFieldProgress.props = proFieldProgressProps as any;

export * from './props';

export { ProFieldProgress };

export default ProFieldProgress;
