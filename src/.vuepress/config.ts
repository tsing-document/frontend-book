import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/frontend-book/",

  lang: "zh-CN",
  title: "前端技术文档",
  description: "技术前进计划",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
