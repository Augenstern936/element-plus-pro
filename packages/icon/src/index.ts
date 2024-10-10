/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-02 16:15:00
 * @LastEditTime: 2024-10-09 23:15:16
 * @FilePath: \element-plus-pro\packages\icon\src\index.ts
 */
import { withInstall } from "@element-plus-ui/pro-utils";

import Icon from "./Icon";

export * from "./typing";

export * from "@element-plus/icons-vue";

export const ProIcon = withInstall(Icon);

export default ProIcon;
