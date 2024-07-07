/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-07-07 13:00:11
 * @FilePath: \element-plus-pro\packages\field\src\components\Checkbox\CheckboxButton.tsx
 */
import 'element-plus/theme-chalk/src/checkbox-group.scss';
import 'element-plus/theme-chalk/src/checkbox-button.scss';
import { ProFieldCheckboxButtonProps, proFieldCheckboxButtonProps } from './typing';
import { useVModel } from '@vueuse/core';
import { DefineComponent, defineComponent } from 'vue';
import useRender from './useRender';

export const ProFieldCheckboxButton = defineComponent<ProFieldCheckboxButtonProps>((props, ctx) => {
	const model = useVModel(props, 'modelValue', ctx.emit);

	return useRender('checkbox-button', props, model);
}) as DefineComponent<ProFieldCheckboxButtonProps>;

ProFieldCheckboxButton.props = proFieldCheckboxButtonProps;
