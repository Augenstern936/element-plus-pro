/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-14 17:03:21
 * @LastEditTime: 2024-07-13 22:54:38
 * @FilePath: \element-plus-pro\packages\form\src\core\GenerateForm\GenerateForm.tsx
 */
import { ProField } from '@element-plus/pro-field';
import { useFetchData } from '@element-plus/pro-hooks';
import { formatPlaceholder } from '@element-plus/pro-utils';
import { useVModel } from '@vueuse/core';
import { ElForm, ElFormItem } from 'element-plus';
import { DefineComponent, computed, defineComponent, ref } from 'vue-demi';
import Actions from './Actions';
import './style.scss';
import { GenerateFormProps, ProFormColumns, generateFormProps } from './typing';
import useFormProps from './useFormProps';

const GenerateForm = defineComponent<GenerateFormProps>((props, ctx) => {
	const model = props.modelValue ? useVModel(props, 'modelValue', ctx.emit) : ref({});

	const { data } = useFetchData({
		params: props.params,
		request: props.request,
	});

	const actionProps = computed(() => {
		return typeof props?.actions === 'boolean' ? {} : props.actions;
	});

	const getFieldProps = (item: ProFormColumns) => {
		const { label, valueType = 'text', readonly } = item;
		return {
			...item,
			...item.fieldProps,
			type: valueType,
			mode: readonly === true || props.readonly === true ? 'read' : 'edit',
			placeholder: formatPlaceholder(typeof label === 'string' ? label : '', valueType),
		};
	};

	return () => {
		const { columns } = useFormProps(props, ctx.slots?.default?.() as []);

		return (
			<ElForm
				{...props}
				model={model.value}
				labelPosition={props.layout === 'vertical' ? 'top' : 'right'}
				inline={props.layout === 'inline'}
				class={'generate-form'}
			>
				{columns?.map((item, index) => {
					const hide = typeof item.hide === 'function' ? item.hide(model.value, props.columns) : item.hide;

					if (hide === true) {
						return '';
					}

					if (item.is === 'slot') {
						return ctx.slots.default?.()[item.index];
					}
					const { key, dataField, rules = {} } = item;
					const globalRulesItem = dataField && props.rules ? props.rules[dataField] ?? {} : {};
					const required = item.required ?? rules.required ?? props.required ?? globalRulesItem.required;
					const label =
						typeof item.label === 'function' ? item.label(model.value, props.columns) : item.label;
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
										<ProField
											{...getFieldProps(item as ProFormColumns)}
											v-model={(model.value as any)[dataField]}
										/>
									) : (
										<ProField {...getFieldProps(item as ProFormColumns)} />
									)}
								</>
							)}
						</ElFormItem>
					);
				})}
				{props.readonly !== true && (
					<ElFormItem label=' '>
						<Actions {...actionProps.value} />
					</ElFormItem>
				)}
			</ElForm>
		);
	};
}) as DefineComponent<GenerateFormProps>;

GenerateForm.props = generateFormProps as any;

export * from './typing';

export { GenerateForm };
