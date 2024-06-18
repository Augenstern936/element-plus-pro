/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-14 17:03:21
 * @LastEditTime: 2024-06-18 22:16:10
 * @FilePath: \element-plus-pro\packages\form\src\core\GenerateForm\GenerateForm.tsx
 */
import './style.scss';
import { ElForm, ElFormItem } from 'element-plus';
import { FunctionalComponent, computed, defineComponent } from 'vue';
import { ProField } from '@element-plus/pro-field';
import { GenerateFormProps, generateFormProps } from './typing';
import Actions from './Actions';

const GenerateForm = defineComponent<GenerateFormProps>((props, ctx) => {
	const items = computed(() => {
		return Array.isArray(props.items) ? props.items : [];
	});

	return () => (
		<ElForm>
			{items.value?.map((item, index) => (
				<ElFormItem label={item.label} prop={item.dataField} key={item.dataField}>
					<ProField type={item.valueType} />
					{props.actions !== false && index + 1 === items.value.length && <Actions />}
				</ElFormItem>
			))}
		</ElForm>
	);
}) as unknown as FunctionalComponent<GenerateFormProps>;

GenerateForm.props = generateFormProps;

export * from './typing';

export { GenerateForm };
