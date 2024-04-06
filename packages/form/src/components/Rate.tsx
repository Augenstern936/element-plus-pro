/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-02 22:52:08
 * @FilePath: \element-plus-pro\packages\form\src\components\Rate.tsx
 */
import { radioProps, ElRate } from 'element-plus';
import type { RateProps } from 'element-plus';
import { CSSProperties, FunctionalComponent, computed, defineComponent } from 'vue';
import 'element-plus/theme-chalk/src/rate.scss';

export interface ProFormRateProps extends RateProps {
	style?: CSSProperties;
}

const ProFormRate = defineComponent<ProFormRateProps>(
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
		name: 'ProFormRate',
	}
) as FunctionalComponent<ProFormRateProps>;

ProFormRate.props = radioProps as any;

export default ProFormRate;
