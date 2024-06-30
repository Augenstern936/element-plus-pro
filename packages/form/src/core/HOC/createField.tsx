/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-27 20:57:53
 * @LastEditTime: 2024-06-30 18:23:21
 * @FilePath: \element-plus-pro\packages\form\src\core\HOC\createField.tsx
 */
import { FunctionalComponent } from 'vue';
import { ProFormItem } from '../FormItem';

function createField(Field: FunctionalComponent, config?: Record<string, any>) {
	return (
		<ProFormItem {...config}>
			<Field />
		</ProFormItem>
	);
}

export default createField;
