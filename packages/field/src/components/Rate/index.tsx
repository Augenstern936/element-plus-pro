/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-05-17 20:31:48
 * @FilePath: \element-plus-pro\packages\field\src\components\Rate\index.tsx
 */
import { ElRate } from 'element-plus';
import 'element-plus/theme-chalk/src/rate.scss';
import { FunctionalComponent, computed, defineComponent } from 'vue';
import { ProFieldRateProps, proFieldRateProps } from './props';

const ProFieldRate = defineComponent<ProFieldRateProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit('update:modelValue', value);
			},
		});

		return () => <ElRate v-model={state.value} {...props} />;
	},
	{
		name: 'ProFieldRate',
	}
) as unknown as FunctionalComponent<ProFieldRateProps>;

ProFieldRate.props = proFieldRateProps as any;

export * from './props';

export { ProFieldRate };

export default ProFieldRate;
