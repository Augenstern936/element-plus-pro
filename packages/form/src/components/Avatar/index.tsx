/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-08-04 14:55:53
 * @FilePath: \element-plus-pro\packages\form\src\components\Avatar\index.tsx
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import type { AvatarProps } from "element-plus";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldProps } from "../../typing";

export type ProFormAavtarProps = FormFieldProps<AvatarProps>;

const FormAvatar = defineComponent<ProFormAavtarProps>(
  props => {
    return () => <ProFormField {...props} type={"avatar"} />;
  },
  {
    name: "ProFormAvatar"
  }
) as DefineComponent<ProFormAavtarProps>;

export const ProFormAvatar = withInstall(FormAvatar);
