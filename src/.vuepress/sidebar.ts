import { sidebar } from "vuepress-theme-hope";

export default sidebar(
  {
    "/build-tool/": 
    [
      { 
        text: "构建工具", 
        prefix: "/build-tool/",
        icon: "earth-americas",
        collapsible: true,
        expanded: false,
        children: [
          {
            text: "Vite 文档",
            prefix: "/build-tool/vite/",
            collapsible: true,
            expanded: false,
            children: [
              "introduce"
            ],
          }
        ]
      }
    ]
  }
);
