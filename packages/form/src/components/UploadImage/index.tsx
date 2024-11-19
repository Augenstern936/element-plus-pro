/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-10-22 21:04:47
 *
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import type { ProFieldUploadImageProps } from "@element-plus-ui/pro-field";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldCommonProps } from "../../typing";
import { useVModel } from "@vueuse/core";

export interface ProFormUploadImageProps extends FormFieldCommonProps, Omit<ProFieldUploadImageProps, "size"> {}

const FormUploadImage = defineComponent<ProFormUploadImageProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"uploadImage"} v-model={model.value} />;
  },
  {
    name: "ProFormUploadImage"
  }
) as DefineComponent<ProFormUploadImageProps>;

export const ProFormUploadImage = withInstall(FormUploadImage);
