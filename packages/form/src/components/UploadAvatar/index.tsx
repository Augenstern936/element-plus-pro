/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-10-10 20:38:07
 * @FilePath: \element-plus-pro\packages\form\src\components\UploadAvatar\index.tsx
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import type { ProFieldUploadAvatarProps } from "@element-plus-ui/pro-field";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldProps } from "../../typing";

export type ProFormUploadAavtarProps = FormFieldProps<ProFieldUploadAvatarProps>;

const FormUploadAvatar = defineComponent<ProFormUploadAavtarProps>(
  props => {
    return () => <ProFormField {...props} type={"uploadAvatar"} />;
  },
  {
    name: "ProFormUploadAvatar"
  }
) as DefineComponent<ProFormUploadAavtarProps>;

export const ProFormUploadAvatar = withInstall(FormUploadAvatar);
