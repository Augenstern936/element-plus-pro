/*
 * @Description:
 * @Date: 2024-12-11 09:35:59
 * @LastEditTime: 2024-12-20 17:45:03
 */
// https://vitepress.dev/guide/custom-theme
import ProComponents from "@element-plus-ui/pro-components";
import "@ruabick/vitepress-demo-block/dist/style.css";
import ElementPlus from "element-plus";
import type { Theme } from "vitepress";
import "vitepress/dist/client/theme-default/styles/components/vp-code-group.css";
import DefaultTheme from "vitepress/theme";
import { globals } from "../vitepress";
import "element-plus/theme-chalk/dark/css-vars.css";
import "./style.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus as any);
    app.use(ProComponents as any);
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp as any);
    });
  }
} satisfies Theme;
