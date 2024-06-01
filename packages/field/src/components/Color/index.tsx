/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-06-01 00:38:30
 * @FilePath: \element-plus-pro\packages\field\src\components\Color\index.tsx
 */
import { ElColorPicker } from 'element-plus';
import 'element-plus/theme-chalk/src/color-picker.scss';
import { defineComponent, FunctionalComponent } from 'vue';
import { proFieldColor, ProFieldColorProps } from './props';
import { useVModel } from '@vueuse/core';

const ProFieldColor = defineComponent<ProFieldColorProps>(
	(props, ctx) => {
		const model = useVModel(props, 'modelValue', ctx.emit);

		return () => <ElColorPicker {...props} v-model={model.value} />;
	},
	{
		name: 'ProFieldColor',
	}
) as unknown as FunctionalComponent<ProFieldColorProps>;

ProFieldColor.props = proFieldColor as any;

export * from './props';

export { ProFieldColor };

export default ProFieldColor;
