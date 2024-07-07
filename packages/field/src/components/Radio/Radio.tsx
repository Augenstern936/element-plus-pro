/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-07-07 13:44:29
 * @FilePath: \element-plus-pro\packages\field\src\components\Radio\Radio.tsx
 */
import 'element-plus/theme-chalk/src/radio.scss';
import 'element-plus/theme-chalk/src/radio-group.scss';
import { ProFieldRadioProps, proFieldRadioProps } from './typing';
import { useVModel } from '@vueuse/core';
import { DefineComponent, defineComponent } from 'vue';
import useRender from './useRender';

export const ProFieldCheckbox = defineComponent<ProFieldRadioProps>((props, ctx) => {
	const model = useVModel(props, 'modelValue', ctx.emit);

	return useRender('radio', props, model);
}) as DefineComponent<ProFieldRadioProps>;

ProFieldCheckbox.props = proFieldRadioProps;
