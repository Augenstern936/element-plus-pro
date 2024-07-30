/*
 * @Description:;
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2024-07-09 17:06:39
 * @FilePath: \element-plus-pro\packages\form\src\layouts\LoginForm\index.tsx
 */
import { withInstall } from "@element-plus-pro/utils";
import { defineComponent, FunctionalComponent } from "vue-demi";
import { proLoginFormProps, ProLoginFormProps } from "./typing";

const LoginForm = defineComponent<ProLoginFormProps>(
  (props, ctx) => {
    return () => <div>111</div>;
  },
  {
    name: "ProLoginForm"
  }
) as FunctionalComponent<ProLoginFormProps>;

LoginForm.props = proLoginFormProps;

export * from "./typing";

export const ProLoginForm = withInstall(LoginForm);
