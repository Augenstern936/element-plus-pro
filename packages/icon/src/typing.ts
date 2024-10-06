import * as Icons from "@element-plus/icons-vue";
import type { IconProps } from "element-plus";

export type ProIconName = keyof typeof Icons;

export interface ProIconProps extends IconProps {
  name: ProIconName;
  class?: string;
}
