/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-04 22:57:02
 * @LastEditTime: 2024-06-02 13:41:01
 * @FilePath: \element-plus-pro\packages\field\src\Field.tsx
 */
import type { GeneratePropTypes, ToUppercaseFirst } from '@element-plus/pro-types';
import { formatPlaceholder } from '@element-plus/pro-utils';
import 'element-plus/theme-chalk/src/base.scss';
import type { FunctionalComponent, PropType } from 'vue';
import { computed, defineComponent } from 'vue';
import { useVModel } from '@vueuse/core';
import { components } from './components';
import type { FieldProps, ProFieldSuperProps, ProFieldType } from './typing';

export const proFieldProps = {
	modelValue: {
		type: [String, Number, Boolean, Array] as PropType<string | number | boolean | []>,
		default: void 0,
	},
	mode: {
		type: String as PropType<'read' | 'edit'>,
		default: 'edit',
	},
	type: {
		type: String as PropType<ProFieldType>,
		default: 'text',
	},
	placeholder: {
		type: [String, Array as unknown as PropType<[string] | [string, string]>],
	},
	fieldProps: {
		type: Object as PropType<Record<string, unknown>>,
	},
} as const;

export * from './typing';

export type ProFieldProps = Omit<GeneratePropTypes<typeof proFieldProps>, 'type' | 'fieldProps'> & FieldProps;

function getPlaceholder(type: ProFieldType, placeholder: string | [string] | [string, string]) {
	const value = placeholder ?? (formatPlaceholder('', type) as string | [string, string]);

	if (Array.isArray(value) && value.length > 1) {
		return {
			startPlaceholder: value[0],
			endPlaceholder: value[1],
		};
	}

	return {
		placeholder: Array.isArray(value) ? value[0] : value,
	};
}

const ProField = defineComponent<ProFieldProps>(
	(props, ctx) => {
		const model = useVModel(props, 'modelValue', ctx.emit);

		const Field = computed(() => {
			return components[props.type || 'text'] as FunctionalComponent;
		});

		return () => (
			<Field.value
				{...props}
				{...(props.fieldProps || {})}
				{...getPlaceholder(props.type as ProFieldType, props.placeholder as any)}
				v-model={model.value}
			/>
		);
	},
	{
		name: 'ProField',
	}
) as unknown as ProFieldSuperProps<ProFieldProps>;

ProField.props = proFieldProps as any;

for (const key in components) {
	const ComName = (key.charAt(0).toUpperCase() + key.slice(1)) as ToUppercaseFirst<ProFieldType>;
	const FieldComponent = components[key as ProFieldType];
	ProField[ComName] = (props) => {
		return <FieldComponent {...props} {...getPlaceholder(key as ProFieldType, props.placeholder)} />;
	};
}

export default ProField;
