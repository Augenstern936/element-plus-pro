/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-10-22 21:05:17
 * @FilePath: \element-plus-pro\packages\form\src\components\UploadAvatar\index.tsx
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import type { ProFieldUploadAvatarProps } from "@element-plus-ui/pro-field";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldCommonProps } from "../../typing";
import { useVModel } from "@vueuse/core";

export interface ProFormUploadAavtarProps extends FormFieldCommonProps, Omit<ProFieldUploadAvatarProps, "size"> {}

const FormUploadAvatar = defineComponent<ProFormUploadAavtarProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"uploadAvatar"} v-model={model.value} />;
  },
  {
    name: "ProFormUploadAvatar"
  }
) as DefineComponent<ProFormUploadAavtarProps>;

export const ProFormUploadAvatar = withInstall(FormUploadAvatar);
