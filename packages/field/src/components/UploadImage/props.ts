/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-10-27 17:28:28
 */
import { UploadProps, ImageProps } from "element-plus";
import { ExtractPropTypes, PropType } from "vue-demi";
import { ProFieldMode } from "../../typing";

export const proFieldUploadImageProps = {
  mode: {
    type: String as PropType<ProFieldMode>,
    default: "edit"
  },
  size: {
    type: [String, Number] as PropType<"default" | "large" | "small" | number>,
    default: "default"
  },
  modelValue: {
    type: [
      String,
      Object as PropType<{ name?: string; url: string }>,
      Array as PropType<Array<string | { name?: string; url: string }>>
    ]
  },
  fieldProps: {
    type: Object as PropType<Partial<UploadProps & ImageProps & { size?: "default" | "large" | "small" | number }>>
  }
};

export type ProFieldUploadImageProps = Partial<ExtractPropTypes<typeof proFieldUploadImageProps>>;
