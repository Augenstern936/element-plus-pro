/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-10-05 22:47:22
 * @LastEditTime: 2024-10-06 16:34:13
 * @FilePath: \element-plus-pro\packages\icon\src\Icon.tsx
 */
import { ElIcon } from "element-plus";
import * as Icons from "@element-plus/icons-vue";
import { ProIconProps } from "./typing";
import { computed } from "vue";

const Icon = (props: ProIconProps) => {
  const IconEelement = computed(() => Icons[props.name ?? "none"]);

  return <ElIcon {...props}>{IconEelement.value && <IconEelement.value />}</ElIcon>;
};

export default Icon;
