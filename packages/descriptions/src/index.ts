/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-02 16:15:00
 * @LastEditTime: 2024-06-02 16:15:19
 * @FilePath: \element-plus-pro\packages\descriptions\src\index.ts
 */
import { withInstall } from "@element-plus-pro/utils";

import Descriptions from "./Descriptions";

export * from "./Descriptions";

export const ProDescriptions = withInstall(Descriptions);

export default ProDescriptions;
