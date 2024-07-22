/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-14 17:03:21
 * @LastEditTime: 2024-07-21 23:17:26
 * @FilePath: \element-plus-pro\packages\form\src\core\GenerateForm\index.tsx
 */
import { useFetchData } from '@element-plus/pro-hooks';
import { useVModel } from '@vueuse/core';
import { ElForm, ElFormItem } from 'element-plus';
import { DefineComponent, computed, defineComponent, ref } from 'vue-demi';
import Submitter from './Submitter';
import './style.scss';
import { GenerateFormProps, generateFormProps } from './typing';
import useFormContent from './useFormContent';

const GenerateForm = defineComponent<GenerateFormProps>((props, ctx) => {
	const model = props.modelValue !== void 0 ? useVModel(props, 'modelValue', ctx.emit) : ref({});

	const { Content } = useFormContent(props, ctx);

	const { data } = useFetchData({
		params: props.params,
		request: props.request,
	});

	const actionProps = computed(() => {
		return typeof props?.actions === 'boolean' ? {} : props.actions;
	});

	return () => (
		<ElForm {...props} model={model.value} class={'generate-form'}>
			<Content {...props} v-model={model.value}>
				{props.readonly !== true && (
					<ElFormItem class={'pro-form-item-submitter'} label=' '>
						{ctx.slots.submitter ? ctx.slots.submitter(model.value) : <Submitter {...actionProps.value} />}
					</ElFormItem>
				)}
			</Content>
		</ElForm>
	);
}) as DefineComponent<GenerateFormProps>;

GenerateForm.props = generateFormProps as any;

export * from './typing';

export { GenerateForm };
