import * as Icons from "@element-plus/icons-vue";
import type { IconProps } from "element-plus";

export interface ProIconProps extends IconProps {
  name: keyof typeof Icons;
}
