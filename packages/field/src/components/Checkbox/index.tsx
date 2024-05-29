/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-05-30 00:01:31
 * @FilePath: \element-plus-pro\packages\field\src\components\Checkbox\index.tsx
 */
import { ElCheckbox, ElCheckboxButton, ElCheckboxGroup } from 'element-plus';
import 'element-plus/theme-chalk/src/checkbox-button.scss';
import 'element-plus/theme-chalk/src/checkbox-group.scss';
import 'element-plus/theme-chalk/src/checkbox.scss';
import { FunctionalComponent, computed, defineComponent, ref } from 'vue';
import { ProFieldCheckboxProps, proFieldCheckboxProps } from './props';

const ProFieldCheckbox = defineComponent<ProFieldCheckboxProps>(
	(props, ctx) => {
		const state = ref<(string | number)[]>([]);

		const model = computed({
			get: () => {
				return props.modelValue ?? state.value;
			},
			set: (value) => {
				if (props.modelValue !== void 0) {
					return ctx.emit('update:modelValue', value);
				}
				state.value = value;
			},
		});

		return () => (
			<ElCheckboxGroup v-model={model.value}>
				{props.options?.map((option, i) => (
					<>
						{props.type === 'checkbox' ? (
							<ElCheckbox key={i} {...option} label={option.value}>
								{option.label}
							</ElCheckbox>
						) : (
							<ElCheckboxButton key={i} {...option} label={option.value}>
								{option.label}
							</ElCheckboxButton>
						)}
					</>
				))}
			</ElCheckboxGroup>
		);
	},
	{
		name: 'ProFieldCheckbox',
	}
) as unknown as FunctionalComponent<ProFieldCheckboxProps>;

ProFieldCheckbox.props = proFieldCheckboxProps as any;

export * from './props';

export { ProFieldCheckbox };

export default ProFieldCheckbox;
