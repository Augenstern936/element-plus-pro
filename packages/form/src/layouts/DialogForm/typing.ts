/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-04-11 22:26:41
 * @LastEditTime: 2024-11-19 11:44:43
 *
 */
import { DialogProps } from "element-plus";
import { ProButtonProps } from "@element-plus-ui/pro-button";
import type { ExtractPropTypes, PropType, VNode } from "vue-demi";
import { CreateFormProps } from "../Form";

export const proDialogFormProps = {
  ...CreateFormProps,
  open: {
    type: Boolean,
    default: void 0
  },
  width: {
    type: [Number, String]
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
    type: [Number, String] as PropType<TitleWeight>,
    default: 600
  },
  trigger: {
    type: [Object, Function] as PropType<ProButtonProps | (() => VNode)>
  },
  dialogProps: {
    type: Object as PropType<DialogProps>,
    default: {}
  }
};

type TitleWeight =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | "bold"
  | "bolder"
  | "lighter"
  | "normal"
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset";

export type ProDialogFormProps = Partial<ExtractPropTypes<typeof proDialogFormProps>>;
