/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2023-12-13 21:22:31
 * @LastEditTime: 2024-04-26 15:14:06
 * @FilePath: \element-plus-pro\packages\button\src\index.ts
 */
import { withInstall } from "@element-plus/pro-utils";
import Button from "./Button.vue";
import "./styles/index.scss";

export * from "./typing";

const ProButton = withInstall(Button);

export { ProButton };

export default ProButton;
