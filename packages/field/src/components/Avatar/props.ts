/*
 * @Description:
 * @Date: 2024-04-15 10:48:02
 * @LastEditTime: 2024-08-04 14:16:40
 */
import { avatarProps } from "element-plus";
import { CSSProperties, ExtractPropTypes, PropType } from "vue-demi";
import { ProFieldMode } from "../../typing";

export const proFieldAvatar = {
  ...avatarProps,
  mode: {
    type: String as PropType<ProFieldMode>,
    default: "edit"
  },
  gender: {
    type: String as PropType<keyof typeof GenderEnum>
  },
  style: {
    type: Object as PropType<CSSProperties>,
    default: {}
  }
};

export const enum GenderEnum {
  "female",
  "male"
}

export type ProFieldAvatarProps = Partial<ExtractPropTypes<typeof proFieldAvatar>>;
