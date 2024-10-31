/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:26:41
 * @LastEditTime: 2024-10-31 11:59:52
 * @FilePath: \element-plus-pro\packages\form\src\layouts\DialogForm\typing.ts
 */
import { DialogProps } from "element-plus";
import { ProButtonProps } from "@element-plus-ui/pro-button";
import type { ExtractPropTypes, PropType } from "vue-demi";
import { generateFormProps } from "../Form";

export const proDialogFormProps = {
  ...generateFormProps,
  open: {
    type: Boolean,
    default: void 0
  },
  title: {
    type: String
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
    type: [Object, Function] as PropType<ProButtonProps | (() => JSX.Element)>
  },
  dialogProps: {
    type: Object as PropType<DialogProps>,
    default: {}
  },
  onFinish: {
    type: Function as PropType<(data?: Record<string, any>) => void | Promise<boolean>>
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
