/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2023-12-13 21:26:11
 * @LastEditTime: 2024-10-09 21:49:29
 * @FilePath: \element-plus-pro\packages\components\src\index.ts
 */
import installer from "./default";

export * from "@element-plus-ui/pro-button";
export * from "@element-plus-ui/pro-descriptions";
export * from "@element-plus-ui/pro-field";
export * from "@element-plus-ui/pro-form";
export * from "@element-plus-ui/pro-table";
export * from "@element-plus-ui/pro-text";
// export * from "@element-plus-ui/pro-tabs";
// export * from "@element-plus-ui/pro-center-container";
export * from "./version";

export const install = installer.install;

export default installer;
