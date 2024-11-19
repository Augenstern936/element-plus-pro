/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2023-12-13 21:22:31
 * @LastEditTime: 2024-10-04 14:54:57
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import Button from "./Button.vue";

export * from "./typing";

const ProButton = withInstall(Button);

export { ProButton };

export default ProButton;
