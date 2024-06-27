/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-07 22:53:35
 * @LastEditTime: 2024-06-23 13:38:20
 * @FilePath: \element-plus-pro\packages\form\src\core\FormField\index.tsx
 */
import { FunctionalComponent, defineComponent } from 'vue';
import { ProField } from '@element-plus/pro-field';
import createField from '../HOC/createField';

export const ProFormField = defineComponent((props, ctx) => {
	console.log(createField, 'createField');
	return () => <ProField />;
}) as unknown as FunctionalComponent;

// for (const key in FormValueTypeEnum) {
// 	if (Number.isNaN(+key)) {
// 		const name = key[0].toUpperCase() + key.slice(1);
// 		ProFormField[name] = '';
// 	}
// }
