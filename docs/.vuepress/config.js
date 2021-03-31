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
        text: '首页',
        link: '/'
      },
      { text: '前端三剑客', items: [
        { text: 'HTML', link: '/interview/html/' },
        { text: 'CSS', link: '/interview/css/' },
        { text: 'JavaScript', link: '/interview/JavaScript/' }
      ]},
    ],
    sidebar: [
      {
        title: '前端三剑客',
        collapsable: false,
        children: [
          '/interview/html/',
          '/interview/css/',
          '/interview/JavaScript/'
        ]
      },
    ]
  }
}