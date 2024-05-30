/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-05-30 22:31:42
 * @FilePath: \element-plus-pro\packages\field\src\components\Checkbox\index.tsx
 */
import { ElCheckbox, ElCheckboxButton, ElCheckboxGroup } from 'element-plus';
import 'element-plus/theme-chalk/src/checkbox-button.scss';
import 'element-plus/theme-chalk/src/checkbox-group.scss';
import 'element-plus/theme-chalk/src/checkbox.scss';
import { computed, ref } from 'vue';
import { ProFieldCheckboxProps } from './props';

type RenderCheckboxProps = ProFieldCheckboxProps & {
	type: 'checkbox' | 'checkbox-button';
};

const RenderCheckbox = (props: RenderCheckboxProps, ctx: any) => {
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

	return (
		<ElCheckboxGroup v-model={model.value}>
			{props.options?.map((option, i) => {
				return (
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
				);
			})}
		</ElCheckboxGroup>
	);
};

export * from './props';

export const ProFieldCheckbox = (props: ProFieldCheckboxProps) => <RenderCheckbox {...props} type='checkbox' />;

export const ProFieldCheckboxButton = (props: ProFieldCheckboxProps) => (
	<RenderCheckbox {...props} type='checkbox-button' />
);
