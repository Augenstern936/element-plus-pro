/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-10-05 22:49:47
 * @LastEditTime: 2024-10-10 09:37:00
 *
 */
import * as Icons from "@element-plus/icons-vue";
import { iconProps } from "element-plus";
import { PropType } from "vue-demi";
import { GeneratePropTypes } from "@element-plus-ui/pro-types";

export const proIconProps = {
  ...iconProps,
  name: {
    type: String as PropType<ProIconName>,
    default: ""
  }
};

export type ProIconName = keyof typeof Icons;

export type ProIconProps = GeneratePropTypes<typeof proIconProps>;
