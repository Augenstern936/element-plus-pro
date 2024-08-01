/*
 * @Description:;
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2024-07-09 17:06:18
 * @FilePath: \element-plus-pro\packages\form\src\layouts\DialogForm\index.tsx
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import { defineComponent, FunctionalComponent } from "vue-demi";
import { proDialogFormProps, ProDialogFormProps } from "./typing";

const DialogForm = defineComponent<ProDialogFormProps>(
  (props, ctx) => {
    return () => <div>111</div>;
  },
  {
    name: "ProDialogForm"
  }
) as FunctionalComponent<ProDialogFormProps>;

DialogForm.props = proDialogFormProps;

export * from "./typing";

export const ProDialogForm = withInstall(DialogForm);
