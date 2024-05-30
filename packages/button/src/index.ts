/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2023-12-13 21:22:31
 * @LastEditTime: 2024-05-31 00:04:05
 * @FilePath: \element-plus-pro\packages\button\src\index.ts
 */
import { withInstall } from '@element-plus/pro-utils';
import Button from './Button.vue';

export * from './typing';

const ProButton = withInstall(Button);

export { ProButton };

export default ProButton;
