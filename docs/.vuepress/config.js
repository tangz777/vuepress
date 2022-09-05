module.exports = {
  base: "/vuepress-blog/",
  description: "前端笔记",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/icon.png",
      },
    ],
  ],
  themeConfig: {
    lastUpdated: "上次更新",
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "前端知识点总结",
        link: "/interview/",
        // items: [
        //   { text: 'HTML', link: '/interview/html/' },
        //   { text: 'CSS', link: '/interview/css/' },
        //   { text: 'JavaScript', link: '/interview/JavaScript/' },
        // ],
      },
      {
        text: "阅读",
      },
      {
        text: "每日一题",
      },
      {
        text: "tools",
      },
    ],
    // sidebar: [
    //   {
    //     title: '前端知识点总结',
    //     collapsable: false,
    //     sidebarDepth:1,
    //     children: [
    //       '/pages/html/',
    //       '/pages/css/',
    //       '/pages/JavaScript/',
    //     ],
    //   },
    // ],
    sidebar: [
      {
        title: "前端基础",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          {
            title: "基础篇",
            collapsable: false,
            sidebarDepth: 1,
            children: [
              {
                title: "1 html模块",
                collapsable: true,
                sidebarDepth: 1,
                children: [
                  ["pages/folder1/html/1.md", "html模块1"],
                  ["pages/folder1/html/2.md", "html模块2"],
                ],
              },
              {
                title: "2 CSS模块",
                collapsable: true,
                sidebarDepth: 1,
                children: [
                  ["pages/folder1/css/1.md", "CSS模块1"],
                  ["pages/folder1/css/2.md", "CSS模块2"],
                ],
              },
            ],
          },
        ],
        // "/pages/css/": [
        //   {
        //     title: "测试菜单1", // 必要的
        //     collapsable: false, // 可选的, 默认值是 true,
        //     sidebarDepth: 1, // 可选的, 默认值是 1
        //     children: [
        //       ["1.md", "子菜单1"],
        //       ["3.md", "子菜单2"],
        //     ],
        //   },
        //   {
        //     title: "测试菜单2",
        //     collapsable: false, // 可选的, 默认值是 true,
        //     children: [["2.md", "子菜单2"]],
        //   },
        // ],
      },
    ],
  },
};
