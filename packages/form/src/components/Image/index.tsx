/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-09 17:03:56
 * @FilePath: \element-plus-pro\packages\form\src\components\Image\index.tsx
 */
import { withInstall } from "@element-plus-pro/utils";
import type { ImageProps } from "element-plus";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldProps } from "../../typing";

export type ProFormImageProps = FormFieldProps<ImageProps>;

const FormImage = defineComponent<ProFormImageProps>(
  props => {
    return () => <ProFormField {...props} type={"image"} />;
  },
  {
    name: "ProFormImage"
  }
) as DefineComponent<ProFormImageProps>;

export const ProFormImage = withInstall(FormImage);
