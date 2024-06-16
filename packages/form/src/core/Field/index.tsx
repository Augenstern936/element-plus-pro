/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-07 22:53:35
 * @LastEditTime: 2024-06-16 18:23:06
 * @FilePath: \element-plus-pro\packages\form\src\core\Field\index.tsx
 */
import { FunctionalComponent, defineComponent } from 'vue';
import { ProField } from '@element-plus/pro-field';
import { FormValueTypeEnum, withInstall } from '@element-plus/pro-utils';

const ProFormField = defineComponent(
	(props, ctx) => {
		return () => <ProField />;
	},
	{
		name: 'ProFormField',
	}
) as unknown as FunctionalComponent;

// for (const key in FormValueTypeEnum) {
// 	if (Number.isNaN(+key)) {
// 		const name = key[0].toUpperCase() + key.slice(1);
// 		ProFormField[name] = '';
// 	}
// }

export default withInstall(ProFormField);
