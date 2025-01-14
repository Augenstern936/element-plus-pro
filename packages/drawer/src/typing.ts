/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-12-17 17:42:44
 * @LastEditTime: 2024-12-17 17:48:12
 */
import { drawerProps } from "element-plus";
import { ProButtonProps } from "@element-plus-ui/pro-button";
import { PropType, VNode, ExtractPropTypes } from "vue-demi";
import { TextWeight } from "@element-plus-ui/pro-types";

export const proDrawerProps = {
  ...drawerProps,
  modelValue: {
    type: Boolean,
    default: void 0
  },
  titleSize: {
    type: [Number, String],
    default: "var(--el-dialog-title-font-size)"
  },
  titleColor: {
    type: String,
    default: "var(--el-text-color-primary)"
  },
  titleWeight: {
    type: [Number, String] as PropType<TextWeight>,
    default: 600
  },
  trigger: {
    type: [Object, Function] as PropType<VNode | ProButtonProps | ((e: { open: Function }) => VNode | ProButtonProps)>
  }
};

export type ProDrawerProps = Partial<ExtractPropTypes<typeof proDrawerProps>>;
