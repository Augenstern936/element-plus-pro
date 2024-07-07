/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-23 13:06:56
 * @LastEditTime: 2024-07-06 15:40:46
 * @FilePath: \element-plus-pro\packages\form\src\core\FormItem\index.tsx
 */
import { DefineComponent, computed, defineComponent } from 'vue';
import { ElFormItem } from 'element-plus';
import { ProFormColumns } from './typing';

export const ProFormItem = defineComponent<ProFormColumns>((props, ctx) => {
	const label = computed(() => {
		return typeof props.label === 'function' ? props.label() : props.label;
	});

	return () => (
		<ElFormItem {...props} v-slots={{ label: () => label.value }}>
			{ctx.slots.default?.()}
		</ElFormItem>
	);
}) as DefineComponent<ProFormColumns>;
