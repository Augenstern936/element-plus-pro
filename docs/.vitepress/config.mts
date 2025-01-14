/*
 * @Description:
 * @Date: 2024-12-11 09:35:59
 * @LastEditTime: 2025-01-13 14:47:46
 */
import { defineConfig } from "vitepress";
import { vitepressDemoPlugin } from "vitepress-demo-plugin";
import { head, nav, sidebar } from "./configs";

export default defineConfig({
  title: "ProComponents",
  description: "基于Element Plus",
  head,
  themeConfig: {
    logo: "/element-plus-logo-small.svg",
    nav,
    sidebar,
    socialLinks: [{ icon: "github", link: "https://github.com/Augenstern936/element-plus-pro" }],
    footer: {
      message: "基于 MIT 许可发布",
      copyright: `版权所有 © 2024-${new Date().getFullYear()}`
    },
    docFooter: {
      prev: "上一页",
      next: "下一页"
    },
    outline: {
      label: "页面导航"
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium"
      }
    },
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    algolia: {
      appId: "R2IYF7ETH7",
      apiKey: "599cec31baffa4868cae4e79f180729b",
      indexName: "index"
    }
  },
  markdown: {
    config: md => md.use(vitepressDemoPlugin)
    //config: md => applyPlugins(md)
  }
});
