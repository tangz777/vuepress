module.exports = {
  base: '/vuepress-blog/',
  description: '前端笔记',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/icon.png',
      },
    ],
  ],
  themeConfig: {
    lastUpdated: '上次更新',
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '面试题集',
        link: '/interview/',
        // items: [
        //   { text: 'HTML', link: '/interview/html/' },
        //   { text: 'CSS', link: '/interview/css/' },
        //   { text: 'JavaScript', link: '/interview/JavaScript/' },
        // ],
      },
    ],
    sidebar: [
      {
        title: '面试题集',
        collapsable: false,
        children: [
          '/interview/html/',
          '/interview/css/',
          '/interview/JavaScript/',
        ],
      },
    ],
  },
}
