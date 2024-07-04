var nav = require('./nav.js')
var { EcosystemNav, ComponentNav, BackendNav } = nav

var utils = require('./utils.js')
var { genNav, getComponentSidebar, deepClone } = utils

module.exports = {
  title: 'vue3-element-admin',
  description:
    'vue3-element-admin 是一个后台前端解决方案，它基于 vue3 和 element-plus 实现。它使用了最新的前端技术栈，内置了 i18 国际化解决方案，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。相信不管你的需求是什么，本项目都能帮助到你。',
  base: '/',
  head: [
    [
      'meta',
      {
        name: 'keywords',
        content:
          'admin,typescript,vue-router,admin-template,mockjs,vue-element-admin,vue3,vite,element-plus,vue3-admin,vue3-element-admin,pinia'
      }
    ],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-wu16TJnyYZ' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    repo: 'midfar/vue3-element-admin',
    docsRepo: 'midfar/vue3-element-admin-site',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    sidebarDepth: 3,
    algolia: {
      apiKey: 'ffce0083d0830de5f562c045a481410b',
      indexName: 'vue_element_admin'
    },
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'Features',
            items: genNav([...BackendNav, ...deepClone(ComponentNav)], 'EN')
          },
          {
            text: 'Ecosystem',
            items: genNav(deepClone(EcosystemNav), 'EN')
          },
          {
            text: 'Donate',
            link: '/donate/'
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Essentials',
              collapsable: false,
              children: genEssentialsSidebar()
            },
            {
              title: 'Advanced',
              collapsable: false,
              children: genAdvancedSidebar()
            },
            {
              title: 'Other',
              collapsable: false,
              children: [
                '/guide/other/gitter.md',
                '/guide/other/release-notes.md'
              ]
            }
          ],
          '/feature/component/': getComponentSidebar(
            deepClone(ComponentNav),
            'EN'
          ),
          '/feature/script/': [
            '/feature/script/svgo.md',
            '/feature/script/new.md'
          ]
        }
      },
      '/es/': {
        label: 'Español',
        selectText: 'Idiomas',
        editLinkText: 'Editar esta página en GitHub',
        nav: [
          {
            text: 'Guía',
            link: '/es/guide/'
          },
          {
            text: 'Características',
            items: genNav([...BackendNav, ...deepClone(ComponentNav)], 'ES')
          },
          {
            text: 'Ecosistema',
            items: genNav(deepClone(EcosystemNav), 'ES')
          },
          {
            text: 'Donar',
            link: '/es/donate/'
          }
        ],
        sidebar: {
          '/es/guide/': [
            {
              title: 'Esenciales',
              collapsable: false,
              children: genEssentialsSidebar('/es')
            },
            {
              title: 'Avanzado',
              collapsable: false,
              children: genAdvancedSidebar('/es')
            },
            {
              title: 'Otro',
              collapsable: false,
              children: [
                '/es/guide/other/gitter.md',
                '/es/guide/other/release-notes.md'
              ]
            }
          ],
          '/es/feature/component/': getComponentSidebar(
            deepClone(ComponentNav),
            'ES'
          ),
          '/es/feature/script/': [
            '/es/feature/script/svgo.md',
            '/es/feature/script/new.md'
          ]
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '指南',
            link: '/zh/guide/'
          },
          {
            text: '功能',
            items: genNav([...BackendNav, ...deepClone(ComponentNav)], 'ZH')
          },
          {
            text: '生态系统',
            items: genNav(deepClone(EcosystemNav), 'ZH')
          },
          {
            text: '捐赠',
            link: '/zh/donate/'
          }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              title: '基础',
              collapsable: false,
              children: genEssentialsSidebar('/zh')
            },
            {
              title: '进阶',
              collapsable: false,
              children: genAdvancedSidebar('/zh')
            },
            {
              title: '其它',
              collapsable: false,
              children: [
                '/zh/guide/other/faq.md',
                '/zh/guide/other/release-notes.md'
              ]
            }
          ],
          '/zh/feature/component/': getComponentSidebar(
            deepClone(ComponentNav),
            'ZH'
          ),
          '/zh/feature/script/': [
            '/zh/feature/script/svgo.md',
            '/zh/feature/script/new.md'
          ]
        }
      }
    }
  },
  locales: {
    '/': {
      lang: 'en-US',
      description:
        'vue3-element-admin is a production-ready front-end solution for admin interfaces. It based on vue3 and use the UI Toolkit element-plus.'
    },
    '/zh/': {
      lang: 'zh-CN',
      description:
        'vue3-element-admin 是一个后台前端解决方案，它基于 vue3 和 element-plus 实现。它使用了最新的前端技术栈，内置了 i18 国际化解决方案，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。相信不管你的需求是什么，本项目都能帮助到你。'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: 'UA-109340118-1'
}

function genEssentialsSidebar(type = '') {
  const mapArr = [
    '/guide/',
    '/guide/essentials/layout.md',
    '/guide/essentials/router-and-nav.md',
    '/guide/essentials/permission.md',
    '/guide/essentials/tags-view.md',
    '/guide/essentials/new-page.md',
    '/guide/essentials/style.md',
    '/guide/essentials/server.md',
    '/guide/essentials/mock-api.md',
    '/guide/essentials/import.md',
    '/guide/essentials/deploy.md',
    '/guide/essentials/env.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}

function genAdvancedSidebar(type = '') {
  const mapArr = [
    '/guide/advanced/cors.md',
    '/guide/advanced/eslint.md',
    '/guide/advanced/git-hook.md',
    '/guide/advanced/style-guide.md',
    '/guide/advanced/lazy-loading.md',
    '/guide/advanced/chart.md',
    '/guide/advanced/icon.md',
    '/guide/advanced/cdn.md',
    '/guide/advanced/theme.md',
    '/guide/advanced/i18n.md',
    '/guide/advanced/error.md',
    '/guide/advanced/webpack.md',
    '/guide/advanced/sass.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}
