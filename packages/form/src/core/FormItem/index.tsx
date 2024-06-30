/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-23 13:06:56
 * @LastEditTime: 2024-06-30 14:11:34
 * @FilePath: \element-plus-pro\packages\form\src\core\FormItem\index.tsx
 */
import { defineComponent } from 'vue';
import { ElFormItem } from 'element-plus';

export const ProFormItem = defineComponent((props, ctx) => {
	return () => <ElFormItem {...props}>{ctx.slots.default?.()}</ElFormItem>;
});
