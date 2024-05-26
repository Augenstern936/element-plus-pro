/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-03 17:55:59
 * @LastEditTime: 2024-05-26 01:11:48
 * @FilePath: \element-plus-pro\packages\field\src\index.ts
 */
import { withInstall } from '@element-plus/pro-utils';

import Field from './Field';

export * from './Field';

export const ProField = withInstall(Field);

export default ProField;
