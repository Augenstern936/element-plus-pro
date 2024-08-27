/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2023-12-13 21:22:31
 * @LastEditTime: 2024-08-27 18:05:57
 * @FilePath: \element-plus-pro\packages\button\src\index.ts
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import { DefineComponent } from "vue";
import Button from "./Button.vue";
// import "./style.scss";
// import "element-plus/theme-chalk/el-base.css";
// import "element-plus/theme-chalk/el-button.css";
// import "element-plus/theme-chalk/el-message-box.css";
// import "element-plus/theme-chalk/el-overlay.css";
// import "element-plus/theme-chalk/el-popconfirm.css";
// import "element-plus/theme-chalk/el-popover.css";
// import "element-plus/theme-chalk/el-popper.css";
// import "element-plus/dist/index.css";
import { ProButtonProps } from "./typing";

export * from "./typing";

const ProButton = withInstall(Button) as DefineComponent<ProButtonProps>;

export { ProButton };

export default ProButton;
