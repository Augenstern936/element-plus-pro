/*
 * @Description:;
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2024-10-22 22:17:39
 *
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import { DefineComponent, defineComponent } from "vue-demi";
import { proLoginFormProps, ProLoginFormProps } from "./typing";

const LoginForm = defineComponent<ProLoginFormProps>(
  (props, ctx) => {
    return () => <div>111</div>;
  },
  {
    name: "ProLoginForm"
  }
) as DefineComponent<ProLoginFormProps>;

LoginForm.props = proLoginFormProps;

export * from "./typing";

export const ProLoginForm = withInstall(LoginForm);
