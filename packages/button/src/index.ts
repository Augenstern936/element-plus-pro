/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2023-12-13 21:22:31
 * @LastEditTime: 2024-05-25 21:24:12
 * @FilePath: \element-plus-pro\packages\button\src\index.ts
 */
import { withInstall } from '@element-plus/pro-utils';
import Button from './Button.vue';
import './styles/index.scss';

export * from './typing';

const ProButton = withInstall(Button);

export { ProButton };

export default ProButton;
