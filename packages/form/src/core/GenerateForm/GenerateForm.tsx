/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-14 17:03:21
 * @LastEditTime: 2024-06-20 23:35:58
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

	return () => (
		<ElForm>
			{items.value?.map((item, index) => {
				const { label, dataField, valueType = 'text' } = item;
				return (
					<ElFormItem label={label} prop={dataField} key={dataField}>
						<ProField {...item} type={valueType} placeholder={formatPlaceholder(label ?? '', valueType)} />
						{props.actions !== false && index + 1 === items.value.length && <Actions />}
					</ElFormItem>
				);
			})}
		</ElForm>
	);
}) as unknown as FunctionalComponent<GenerateFormProps>;

GenerateForm.props = generateFormProps;

export * from './typing';

export { GenerateForm };
