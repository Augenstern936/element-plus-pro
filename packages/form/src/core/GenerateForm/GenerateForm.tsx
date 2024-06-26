/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-14 17:03:21
 * @LastEditTime: 2024-06-26 11:45:53
 * @FilePath: \element-plus-pro\packages\form\src\core\GenerateForm\GenerateForm.tsx
 */
import { ProField } from "@element-plus/pro-field";
import { formatPlaceholder } from "@element-plus/pro-utils";
import { ElForm, ElFormItem } from "element-plus";
import { FunctionalComponent, computed, defineComponent } from "vue";
import Actions from "./Actions";
import "./style.scss";
import { GenerateFormProps, generateFormProps } from "./typing";
import useFormProps from "./useFormProps";

const GenerateForm = defineComponent<GenerateFormProps>((props, ctx) => {
	const { items } = useFormProps(props);

	const actionProps = computed(() => {
		return typeof props?.actions === "boolean" ? {} : props.actions;
	});

	return () => (
		<ElForm
			{...props}
			labelPosition={props.layout === "vertical" ? "top" : "right"}
			inline={props.layout === "inline"}
			class={"generate-form"}
		>
			{items?.map((item, index) => {
				const { key, dataField, rules = {}, valueType = "text", readonly } = item;
				const globalRulesItem = dataField && props.rules ? props.rules[dataField] ?? {} : {};
				const required = item.required ?? rules.required ?? props.required ?? globalRulesItem.required;
				const label = typeof item.label === "function" ? item.label() : item.label;
				const mode = readonly === true || props.readonly === true ? "read" : "edit";
				const slotName = key || dataField;
				return (
					<ElFormItem
						key={key || dataField || index}
						prop={dataField}
						required={required}
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
							<ProField
								{...item}
								{...item.fieldProps}
								mode={mode}
								type={valueType}
								placeholder={formatPlaceholder(typeof label === "string" ? label : "", valueType)}
							/>
						)}
					</ElFormItem>
				);
			})}
			{ctx.slots?.default?.()}
			<ElFormItem label=" ">
				<Actions {...actionProps.value} />
			</ElFormItem>
		</ElForm>
	);
}) as unknown as FunctionalComponent<GenerateFormProps>;

GenerateForm.props = generateFormProps as any;

export * from "./typing";

export { GenerateForm };
