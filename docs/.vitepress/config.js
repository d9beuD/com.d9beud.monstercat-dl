import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',

  lang: 'en-US',
  title: '🎵 monstercat-dl',
  description: 'Download Monstercat songs from your Terminal app!',

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/d9beuD/monstercat-dl' }
    ],

    sidebar: {

      '/guide/': [
        {
          text: '📖 Guide',
          collapsible: true,
          items: [
            { text: 'Getting started', link: '/guide/' },
            { text: 'Install', link: '/guide/install' },
            { text: 'Usage', link: '/guide/usage' },
          ]
        },
      ]
    },
  },
})
