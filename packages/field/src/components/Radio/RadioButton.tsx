/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-07-07 13:47:53
 * @FilePath: \element-plus-pro\packages\field\src\components\Radio\RadioButton.tsx
 */
import 'element-plus/theme-chalk/src/radio-button.scss';
import 'element-plus/theme-chalk/src/radio-group.scss';
import { ProFieldRadioButtonProps, proFieldRadioButtonProps } from './typing';
import { useVModel } from '@vueuse/core';
import { DefineComponent, defineComponent } from 'vue';
import useRender from './useRender';

export const ProFieldCheckboxButton = defineComponent<ProFieldRadioButtonProps>((props, ctx) => {
	const model = useVModel(props, 'modelValue', ctx.emit);

	return useRender('radio-button', props, model);
}) as DefineComponent<ProFieldRadioButtonProps>;

ProFieldCheckboxButton.props = proFieldRadioButtonProps;
