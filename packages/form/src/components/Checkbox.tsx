/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-02 21:26:19
 * @FilePath: \element-plus-pro\packages\form\src\components\Checkbox.tsx
 */
import { checkboxProps, ElCheckboxGroup, ElCheckbox, ElCheckboxButton } from 'element-plus';
import type { CheckboxProps } from 'element-plus';
import { FunctionalComponent, defineComponent, computed, CSSProperties, PropType } from 'vue';
import 'element-plus/theme-chalk/src/checkbox.scss';
import 'element-plus/theme-chalk/src/checkbox-group.scss';
import 'element-plus/theme-chalk/src/checkbox-button.scss';

export interface ProFormCheckboxProps extends CheckboxProps {
	type: 'checkbox' | 'checkboxButton';
	options?: { label?: string; value: string | number | boolean; [x: string]: any }[];
	style?: CSSProperties;
}

const ProFormCheckbox = defineComponent<ProFormCheckboxProps>(
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
		name: 'ProFormCheckbox',
	}
) as FunctionalComponent<ProFormCheckboxProps>;

ProFormCheckbox.props = {
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

export default ProFormCheckbox;
