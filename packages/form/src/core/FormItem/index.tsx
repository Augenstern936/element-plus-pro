/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-23 13:06:56
 * @LastEditTime: 2024-06-27 21:25:14
 * @FilePath: \element-plus-pro\packages\form\src\core\FormItem\index.tsx
 */
import { defineComponent } from 'vue';
import { ProFormField } from '../FormField';
import { ElFormItem } from 'element-plus';

export const ProFormItem = defineComponent((props, ctx) => {
	return () => (
		<ElFormItem>
			<ProFormField />
		</ElFormItem>
	);
});
