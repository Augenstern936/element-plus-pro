/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2023-12-13 21:22:31
 * @LastEditTime: 2024-06-06 22:04:36
 * @FilePath: \element-plus-pro\packages\copyable\src\index.ts
 */
import './style.scss';
import { withInstall } from '@element-plus/pro-utils';
import Copyable from './Copyable.vue';

export * from './Copyable.vue';

const ProCopyable = withInstall(Copyable);

export { ProCopyable };

export default ProCopyable;
