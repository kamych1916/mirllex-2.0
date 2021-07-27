export default {
  ssr: true,

  head: {
    title: 'Mirllex — digital studio | Websites & Marketing & Systems & Mobile Apps ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'},

      { name: "robots", content: "index, follow"},
      { name: "theme-color", content: "#fff"},
      { name: "description", content: 'Мы — digital студия, которая помогает бизнесу выделяться. Разрабатываем качественный продукт — Брендинг & Маркетинг & Веб-сайты' },
      { name: "keywords", content: 'mirllex digital studio, digital студия, диджитал студия, digital studio, digital marketing, digital маркетинг, диджитал маркетинг, digital agency, digital агенство, диджитал агенство, разработка вебсайта, лендинг' },

      { property: 'og:url', content: 'http://perugino.club/'},
      { property: 'og:title', content: 'Mirllex — digital studio | Websites & Marketing & Systems'},
      { property: 'og:description', content: 'Мы — digital студия, которая помогает бизнесу выделяться. Разрабатываем качественный продукт — Брендинг & Маркетинг & Веб-сайты' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image:type', content:'image/png'},
      { property: 'og:image', content: 'http://mirllex.space/og.png'},


      { property: 'twitter:title', content: 'Mirllex — digital studio | Websites & Marketing & Systems'},
      { property: 'twitter:description', content: 'Мы — digital студия, которая помогает бизнесу выделяться. Разрабатываем качественный продукт — Брендинг & Маркетинг & Веб-сайты' },
      { property: 'twitter:image', content: 'http://mirllex.space/og.png'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { itemprop: 'thumbnailUrl', href: 'http://mirllex.space/og.png'}
    ]
  },

  css: ["@assets/sass/style.scss"],

  plugins: [
    { src: "@/plugins/plugins", ssr: false },
  ],

  components: true,

  buildModules: ["@nuxtjs/style-resources"],

  modules: ["nuxt-i18n", "@nuxtjs/axios"],
  i18n: {
    locales: [
      {
        code: "ru",
        file: "ru.js"
      }
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "ru"
  },
  axios: {},

  build: {}
  
};
