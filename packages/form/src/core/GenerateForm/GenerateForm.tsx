/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-14 17:03:21
 * @LastEditTime: 2024-06-23 21:21:04
 * @FilePath: \element-plus-pro\packages\form\src\core\GenerateForm\GenerateForm.tsx
 */
import './style.scss';
import { ElForm, ElFormItem } from 'element-plus';
import { FunctionalComponent, computed, defineComponent } from 'vue';
import { ProField } from '@element-plus/pro-field';
import { GenerateFormProps, generateFormProps } from './typing';
import Actions from './Actions';
import { formatPlaceholder } from '@element-plus/pro-utils';

const GenerateForm = defineComponent<GenerateFormProps>((props) => {
	const items = computed(() => {
		return Array.isArray(props.items) ? props.items : [];
	});

	const actionProps = computed(() => {
		return typeof props?.actions === 'boolean' ? {} : props.actions;
	});

	return () => (
		<ElForm
			{...props}
			labelPosition={props.layout === 'vertical' ? 'top' : 'right'}
			inline={props.layout === 'inline'}
			class={'generate-form'}
		>
			{items.value?.map((item, index) => {
				const { key, label, dataField, valueType = 'text', readonly } = item;
				const mode = readonly === true || props.readonly === true ? 'read' : 'edit';
				return (
					<ElFormItem
						prop={dataField}
						key={key || dataField || index}
						v-slots={{
							label: () => {
								return typeof label === 'function' ? (
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
							placeholder={formatPlaceholder(label ?? '', valueType)}
						/>
					</ElFormItem>
				);
			})}
			<ElFormItem label=' '>
				<Actions {...actionProps.value} />
			</ElFormItem>
		</ElForm>
	);
}) as unknown as FunctionalComponent<GenerateFormProps>;

GenerateForm.props = generateFormProps as any;

export * from './typing';

export { GenerateForm };
