/*
 * @Description:
 * @Date: 2024-04-15 10:48:02
 * @LastEditTime: 2024-10-16 22:28:17
 */
import { UploadProps, AvatarProps } from "element-plus";
import { ExtractPropTypes, PropType } from "vue-demi";
import { ProFieldMode } from "../../typing";

export const proFieldUploadAvatar = {
  modelValue: {
    type: String,
    default: ""
  },
  mode: {
    type: String as PropType<ProFieldMode>,
    default: "edit"
  },
  mark: {
    type: String as PropType<Mark>
  },
  fieldProps: {
    type: Object as PropType<Partial<UploadProps & AvatarProps>>
  }
};

export type Mark = "female" | "male" | "on-line" | "off-line" | (() => string | number | JSX.Element);

export const excludeUplaodPropsKeys = [
  "multiple",
  "show-file-list",
  "list-type",
  "disabled",
  "limit",
  "file-list",
  "model:file-list",
  "on-preview",
  "on-remove",
  "on-exceed",
  "before-remove"
] as const;

export type ProFieldUploadAvatarProps = Partial<
  Omit<ExtractPropTypes<typeof proFieldUploadAvatar>, (typeof excludeUplaodPropsKeys)[number]>
>;
