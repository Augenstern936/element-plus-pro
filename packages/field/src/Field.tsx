/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-04 22:57:02
 * @LastEditTime: 2024-04-07 01:14:13
 * @FilePath: \element-plus-pro\packages\field\src\Field.tsx
 */
import { FunctionalComponent, defineComponent, computed } from 'vue';
import { withInstall, formatPlaceholder } from '@element-plus/pro-utils';
import { proFieldProps, ProFieldProps } from './typing';
import components from './components';

const ProField = defineComponent<ProFieldProps>(
	(props, ctx) => {
		const FieldComponent = computed(() => {
			return components[props.valueType || 'text'] as any;
		});

		const model = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit('update:modelValue', value);
			},
		});

		const placeholder = computed(() => {
			const value =
				props.placeholder ??
				(formatPlaceholder('', (props.valueType as any) || 'text') as string | [string, string]);

			if (Array.isArray(value)) {
				return {
					startPlaceholder: value[0],
					endPlaceholder: value[1],
				};
			}

			return {
				placeholder: value,
			};
		});

		return () => (
			<FieldComponent.value
				v-model={model.value}
				{...placeholder.value}
				{...props.fieldProps}
				type={props.valueType}
			/>
		);
	},
	{
		name: 'ProField',
	}
) as FunctionalComponent<ProFieldProps>;

ProField.props = proFieldProps as any;

for (const key in components) {
	const ComName = key.charAt(0).toUpperCase() + key.slice(1);
	const FieldComponent = components[key as keyof typeof components];
	(ProField as { [x: string]: any })[ComName] = (props: any) => <FieldComponent {...props} type={key} />;
}

export default withInstall(ProField);
