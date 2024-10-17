/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-10-16 22:28:04
 */
import { UploadProps, ImageProps } from "element-plus";
import { ExtractPropTypes, PropType } from "vue-demi";
import { ProFieldMode } from "../../typing";

export const proFieldUploadImageProps = {
  mode: {
    type: String as PropType<ProFieldMode>,
    default: "edit"
  },
  modelValue: {
    type: [String, Array] as PropType<string | string[]>
  },
  fieldProps: {
    type: Object as PropType<Partial<UploadProps & ImageProps>>
  }
};

export type ProFieldUploadImageProps = Partial<ExtractPropTypes<typeof proFieldUploadImageProps>>;
