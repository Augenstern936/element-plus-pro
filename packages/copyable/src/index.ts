/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2023-12-13 21:22:31
 * @LastEditTime: 2024-05-30 23:22:37
 * @FilePath: \element-plus-pro\packages\copyable\src\index.ts
 */
import { withInstall } from '@element-plus/pro-utils';
import Copyable from './Copyable.vue';

export * from './Copyable.vue';

const ProCopyable = withInstall(Copyable);

export { ProCopyable };

export default ProCopyable;
