/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2023-12-13 21:26:11
 * @LastEditTime: 2024-06-18 21:00:20
 * @FilePath: \element-plus-pro\packages\components\src\index.ts
 */
import installer from './default';

export * from '@element-plus/pro-text';
export * from '@element-plus/pro-form';
export * from '@element-plus/pro-field';
export * from '@element-plus/pro-button';
export * from '@element-plus/pro-copyable';
export * from '@element-plus/pro-descriptions';
// export * from "@element-plus/pro-tabs";
// export * from '@element-plus/pro-table';
// export * from "@element-plus/pro-center-container";
// export * from "@element-plus/pro-search-bar";
export * from './version';

export const install = installer.install;

export default installer;
