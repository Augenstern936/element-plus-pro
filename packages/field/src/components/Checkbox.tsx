/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-04 22:46:28
 * @FilePath: \element-plus-pro\packages\field\src\components\Checkbox.tsx
 */
import 'element-plus/theme-chalk/src/checkbox.scss';
import 'element-plus/theme-chalk/src/checkbox-group.scss';
import 'element-plus/theme-chalk/src/checkbox-button.scss';
import { checkboxProps, ElCheckboxGroup, ElCheckbox, ElCheckboxButton } from 'element-plus';
import type { CheckboxProps } from 'element-plus';
import { FunctionalComponent, defineComponent, computed, CSSProperties, PropType } from 'vue';

export interface ProFieldCheckboxProps extends CheckboxProps {
	type: 'checkbox' | 'checkboxButton';
	options?: { label?: string; value: string | number | boolean; [x: string]: any }[];
	style?: CSSProperties;
}

const ProFieldCheckbox = defineComponent<ProFieldCheckboxProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit('update:modelValue', value);
			},
		});

		return () => (
			<ElCheckboxGroup v-model={state.value}>
				{props.options?.map((option, i) => (
					<>
						{props.type == 'checkbox' ? (
							<ElCheckbox {...option} key={i} />
						) : (
							<ElCheckboxButton {...option} key={i}>
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
) as FunctionalComponent<ProFieldCheckboxProps>;

ProFieldCheckbox.props = {
	...checkboxProps,
	type: {
		type: String as PropType<'checkbox' | 'checkboxButton'>,
		default: 'checkbox',
	},
	options: {
		type: Array,
		default: [],
	},
};

export default ProFieldCheckbox;
