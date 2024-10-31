/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:26:41
 * @LastEditTime: 2024-10-31 12:00:08
 * @FilePath: \element-plus-pro\packages\form\src\layouts\DrawerForm\typing.ts
 */
import { DrawerProps } from "element-plus";
import { ProButtonProps } from "@element-plus-ui/pro-button";
import type { ExtractPropTypes, PropType } from "vue-demi";
import { generateFormProps } from "../Form";

export const proDrawerFormProps = {
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
    default: "var(--el-Drawer-title-font-size)"
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
  DrawerProps: {
    type: Object as PropType<DrawerProps>,
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

export type ProDrawerFormProps = Partial<ExtractPropTypes<typeof proDrawerFormProps>>;
