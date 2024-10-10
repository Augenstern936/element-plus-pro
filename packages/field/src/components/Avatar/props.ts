/*
 * @Description:
 * @Date: 2024-04-15 10:48:02
 * @LastEditTime: 2024-10-08 16:53:02
 */
import { avatarProps } from "element-plus";
import type { UploadProps } from "element-plus";
import { CSSProperties, ExtractPropTypes, PropType } from "vue-demi";
import { ProFieldMode } from "../../typing";

export const proFieldAvatar = {
  ...avatarProps,
  mode: {
    type: String as PropType<ProFieldMode>,
    default: "edit"
  },
  mark: {
    type: String as PropType<Mark>
  },
  style: {
    type: Object as PropType<CSSProperties>,
    default: {}
  },
  uploadProps: {
    type: Object as PropType<Partial<UploadProps>>,
    default: {}
  }
};

export type Mark = "female" | "male" | "on-line" | "off-line" | (() => string | number | JSX.Element);

export type ProFieldAvatarProps = Partial<ExtractPropTypes<typeof proFieldAvatar>>;
