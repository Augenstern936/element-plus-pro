/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-14 17:03:21
 * @LastEditTime: 2024-06-24 14:18:48
 * @FilePath: \element-plus-pro\packages\form\src\core\GenerateForm\GenerateForm.tsx
 */
import { ProField } from "@element-plus/pro-field";
import { formatPlaceholder } from "@element-plus/pro-utils";
import { ElForm, ElFormItem } from "element-plus";
import { FunctionalComponent, computed, defineComponent } from "vue";
import Actions from "./Actions";
import "./style.scss";
import { GenerateFormProps, generateFormProps } from "./typing";

const GenerateForm = defineComponent<GenerateFormProps>((props, ctx) => {
	const items = computed(() => {
		return Array.isArray(props.items) ? props.items : [];
	});

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
			{items.value?.map((item, index) => {
				const { key, label, dataField, required, valueType = "text", readonly } = item;
				const mode = readonly === true || props.readonly === true ? "read" : "edit";
				return (
					<ElFormItem
						prop={dataField}
						required={props.readonly ? false : required ?? props.required}
						key={key || dataField || index}
						v-slots={{
							label: () => {
								return typeof label === "function" ? (
									label()
								) : (
									<span style={props.labelStyle}>{label}</span>
								);
							},
						}}
					>
						<ProField
							{...item}
							{...item.fieldProps}
							mode={mode}
							type={valueType}
							placeholder={formatPlaceholder(label ?? "", valueType)}
						/>
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
