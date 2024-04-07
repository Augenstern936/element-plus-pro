/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2023-12-13 21:22:31
 * @LastEditTime: 2024-04-08 02:02:48
 * @FilePath: \element-plus-pro\packages\button\src\index.ts
 */
import './styles/index.scss';
import Button from './Button.vue';
import { withInstall } from '@element-plus/pro-utils';

export * from './typing';

const ProButton = withInstall(Button);

export { ProButton };

export default ProButton;
