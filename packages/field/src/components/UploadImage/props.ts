/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-10-19 23:13:59
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
    type: Number,
    default: 40
  },
  modelValue: {
    type: [
      String,
      Object as PropType<{ name?: string; url: string }>,
      Array as PropType<Array<string | { name?: string; url: string }>>
    ]
  },
  fieldProps: {
    type: Object as PropType<Partial<UploadProps & ImageProps>>
  }
};

export type ProFieldUploadImageProps = Partial<ExtractPropTypes<typeof proFieldUploadImageProps>>;
