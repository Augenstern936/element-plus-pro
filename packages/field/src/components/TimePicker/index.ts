/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-09-13 21:28:34
 * @LastEditTime: 2024-10-10 22:52:28
 * @FilePath: \element-plus-pro\packages\field\src\components\TimePicker\index.tsx
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import { FieldTime, FieldTimeRange } from "./TimePicker";

export * from "./props";

export const ProFieldTime = withInstall(FieldTime);

export const ProFieldTimeRange = withInstall(FieldTimeRange);
