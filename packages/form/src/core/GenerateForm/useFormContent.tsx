/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-07-21 17:49:59
 * @LastEditTime: 2024-07-21 23:10:51
 * @FilePath: \element-plus-pro\packages\form\src\core\GenerateForm\useFormContent.tsx
 */
import { ElFormItem, ElIcon, ElSpace, ElTooltip, FormItemProps } from 'element-plus';
import { ProField } from '@element-plus/pro-field';
import { SetupContext, ref } from 'vue-demi';
import { formatPlaceholder } from '@element-plus/pro-utils';
import { GenerateFormProps, ProFormColumns } from './typing';
import { InfoFilled } from '@element-plus/icons-vue';
import useFormProps from './useFormProps';
import { useVModel } from '@vueuse/core';
import { useGridHelpers } from '../helpers';

const useFormContent = (formProps: GenerateFormProps, formCtx: SetupContext) => {
	const { columns } = useFormProps(formProps, formCtx.slots?.default?.() as []);

	const getFormItemProps = (item: ProFormColumns, model: Record<string, any>) => {
		const { dataField, rules = {} } = item;
		const globalRulesItem = dataField && formProps.rules ? formProps.rules[dataField] ?? {} : {};
		const required = item.required ?? rules.required ?? formProps.required ?? globalRulesItem.required;
		const label = typeof item.label === 'function' ? item.label(model, formProps.columns) : item.label;

		return {
			...item,
			label,
			required,
			prop: dataField,
			rules: {
				...globalRulesItem,
				...rules,
			},
		};
	};

	const getFieldProps = (item: ProFormColumns) => {
		const { label, valueType = 'text', readonly } = item;
		return {
			...item,
			...item.fieldProps,
			type: valueType,
			mode: readonly === true || formProps.readonly === true ? 'read' : 'edit',
			placeholder: formatPlaceholder(typeof label === 'string' ? label : '', valueType),
		};
	};

	const Content = (props: Record<string, any>, ctx: SetupContext) => {
		const model = props.modelValue !== void 0 ? useVModel(props, 'modelValue', ctx.emit) : ref({});

		const { RowWrapper, ColWrapper } = useGridHelpers(props);

		return (
			<RowWrapper gutter={10} {...props.rowProps}>
				{columns?.map((item, index) => {
					if (typeof item.hide === 'function') {
						item.hide(model.value, formProps.columns);
					}
					if (item.hide === true) {
						return '';
					}
					if (item.is === 'slot') {
						return formCtx.slots.default?.()[item.index];
					}
					const { key, dataField, tooltip } = item;
					const formItemProps = getFormItemProps(item as ProFormColumns, model);
					const slotName = key || dataField;
					return (
						<ColWrapper {...props.colProps}>
							<ElFormItem
								{...(formItemProps as FormItemProps)}
								key={key || dataField || index}
								v-slots={{
									label: () => (
										<ElSpace size={3} style={formProps.labelStyle}>
											{tooltip && (
												<ElTooltip placement={'top'} content={tooltip}>
													<ElIcon size={16}>
														<InfoFilled />
													</ElIcon>
												</ElTooltip>
											)}
											{formItemProps.label}
										</ElSpace>
									),
								}}
							>
								{slotName && formCtx.slots[slotName] ? (
									formCtx.slots[slotName]?.()
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
						</ColWrapper>
					);
				})}
				<ColWrapper gutter={10} {...props.rowProps}>
					{ctx.slots?.default?.()}
				</ColWrapper>
			</RowWrapper>
		);
	};

	return {
		Content,
	};
};

export default useFormContent;
