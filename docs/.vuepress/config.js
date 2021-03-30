module.exports = {
  base: '/vuepress-blog/',
  description: '前端笔记',
  head: [
    ['link',
      {
        rel: 'icon',
        href: '/icon.png'
      }
    ],
  ],
  themeConfig: {
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'GitHub',
        link: 'https://google.com'
      },
    ],
    sidebar: [
      // {
      //   title: '面试题集',   // 必要的
      //   path: '/interview/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      //   collapsable: false, // 可选的, 默认值是 true,
      //   sidebarDepth: 1,    // 可选的, 默认值是 1
      //   children: [
      //     '/'
      //   ]
      // },
    ]
  }
}