import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "构建工具", icon: "database", link: "/build-tool/vite/introduce.md",  activeMatch: "^/build-tool/$", },
  "/mine/"
]);
