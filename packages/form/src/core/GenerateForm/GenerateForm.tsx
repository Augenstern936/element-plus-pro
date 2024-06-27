/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-14 17:03:21
 * @LastEditTime: 2024-06-27 20:26:18
 * @FilePath: \element-plus-pro\packages\form\src\core\GenerateForm\GenerateForm.tsx
 */
import { ProField } from '@element-plus/pro-field';
import { formatPlaceholder } from '@element-plus/pro-utils';
import { ElForm, ElFormItem } from 'element-plus';
import { FunctionalComponent, computed, defineComponent, ref } from 'vue';
import Actions from './Actions';
import './style.scss';
import { GenerateFormProps, ProFormItem, generateFormProps } from './typing';
import useFormProps from './useFormProps';
import { useVModel } from '@vueuse/core';

const GenerateForm = defineComponent<GenerateFormProps>((props, ctx) => {
	const model = props.modelValue ? useVModel(props, 'modelValue', ctx.emit) : ref({});

	const { items } = useFormProps(props);

	const actionProps = computed(() => {
		return typeof props?.actions === 'boolean' ? {} : props.actions;
	});

	const getFieldProps = (item: ProFormItem) => {
		const { label, valueType = 'text', readonly } = item;
		return {
			...item,
			...item.fieldProps,
			type: valueType,
			mode: readonly === true || props.readonly === true ? 'read' : 'edit',
			placeholder: formatPlaceholder(typeof label === 'string' ? label : '', valueType),
		};
	};

	return () => (
		<ElForm
			{...props}
			model={model.value}
			labelPosition={props.layout === 'vertical' ? 'top' : 'right'}
			inline={props.layout === 'inline'}
			class={'generate-form'}
		>
			{items?.map((item, index) => {
				const { key, dataField, rules = {} } = item;
				const globalRulesItem = dataField && props.rules ? props.rules[dataField] ?? {} : {};
				const required = item.required ?? rules.required ?? props.required ?? globalRulesItem.required;
				const label = typeof item.label === 'function' ? item.label() : item.label;
				const slotName = key || dataField;
				return (
					<ElFormItem
						key={key || dataField || index}
						prop={dataField}
						required={props.readonly ? false : required}
						rules={{
							...globalRulesItem,
							...rules,
						}}
						v-slots={{
							label: () => <div style={props.labelStyle}>{label}</div>,
						}}
					>
						{slotName && ctx.slots[slotName] ? (
							ctx.slots[slotName]?.()
						) : (
							<>
								{dataField ? (
									<ProField {...getFieldProps(item)} v-model={(model.value as any)[dataField]} />
								) : (
									<ProField {...getFieldProps(item)} />
								)}
							</>
						)}
					</ElFormItem>
				);
			})}
			{ctx.slots?.default?.()}
			{props.readonly !== true && (
				<ElFormItem label=' '>
					<Actions {...actionProps.value} />
				</ElFormItem>
			)}
		</ElForm>
	);
}) as unknown as FunctionalComponent<GenerateFormProps>;

GenerateForm.props = generateFormProps as any;

export * from './typing';

export { GenerateForm };
