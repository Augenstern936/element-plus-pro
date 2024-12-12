import type { HeadConfig } from "vitepress";

export const head: HeadConfig[] = [
  [
    "link",
    {
      rel: "icon",
      href: "/element-plus-logo-small.svg",
      type: "image/svg+xm"
    }
  ],
  [
    "link",
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180"
    }
  ]
];
