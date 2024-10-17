/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-10-10 20:39:47
 * @FilePath: \element-plus-pro\packages\form\src\components\UploadImage\index.tsx
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import type { ImageProps } from "element-plus";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldProps } from "../../typing";

export type ProFormUploadImageProps = FormFieldProps<ImageProps>;

const FormUploadImage = defineComponent<ProFormUploadImageProps>(
  props => {
    return () => <ProFormField {...props} type={"uploadImage"} />;
  },
  {
    name: "ProFormUploadImage"
  }
) as DefineComponent<ProFormUploadImageProps>;

export const ProFormUploadImage = withInstall(FormUploadImage);
