/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-07 22:53:35
 * @LastEditTime: 2024-04-14 00:02:36
 * @FilePath: \element-plus-pro\packages\form\src\components\Field\index.tsx
 */
import { FunctionalComponent, defineComponent } from 'vue';
import { FormValueTypeEnum, withInstall } from '@element-plus/pro-utils';

const ProFormField = defineComponent(
	(props, ctx) => {
		return () => <div>11</div>;
	},
	{
		name: 'ProFormField',
	}
) as FunctionalComponent;

// for (const key in FormValueTypeEnum) {
// 	if (Number.isNaN(+key)) {
// 		const name = key[0].toUpperCase() + key.slice(1);
// 		ProFormField[name] = '';
// 	}
// }

export default withInstall(ProFormField);
