/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2023-12-13 21:22:31
 * @LastEditTime: 2024-09-14 16:53:10
 * @FilePath: \element-plus-pro\packages\button\src\index.ts
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import { DefineComponent } from "vue";
import Button from "./Button.vue";
// import "./style.scss";
import { ProButtonProps } from "./typing";

export * from "./typing";

const ProButton = withInstall(Button) as DefineComponent<ProButtonProps>;

export { ProButton };

export default ProButton;
