const navigationDe = require('./navigation-de');

module.exports = {

  title: 'A Dev Journal',
  description: 'A pair of notes of a developer',
  base: '/',
  locales: {
    '/': {
      lang: 'en',
      title: 'A Dev Journal',
      description: 'A pair of notes of a developer',
      selectText: 'Languages',
      label: 'English',
      ariaLabel: 'Languages',
      editLinkText: 'Edit this page on GitHub!',
      serviceWorker: {
        updatePopup: {
          message: 'New content is available.',
          buttonText: 'Refresh',
        },
      },
    },
    '/de/': {
      lang: 'de',
      title: 'Ein Entwicklertagebuch',
      description: 'Ein paar Notizen von einem Entwickler für Entwickler',
      selectText: 'Sprachen',
      label: 'Deutsch',
      ariaLabel: 'Sprachen',
      editLinkText: 'Bearbeite diese Seite auf GitHub!',
      serviceWorker: {
        updatePopup: {
          message: 'Neuer Inhalt verfügbar',
          buttonText: 'Laden',
        },
      },
    },
  },
  themeConfig: {
    nextLinks: false,
    prevLinks: false,
    domain: 'blog.darker.dev',
    repo: 'd4rkmindz/d4rkmindz.github.io',
    repoLabel: 'Contribute!',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub!',
    contact: [
      {
        type: 'github',
        link: 'https://github.com/d4rkmindz',
      },
      {
        type: 'twitter',
        link: 'https://twitter.com/DevDarker',
      },
    ],
    author: {
      name: 'Björn Pfoster',
      twitter: '@DevDarker',
    },
    locales: {
      '/': {
        sidebar: [
          ['/', 'Home'],
          {
            title: 'Blog',
            path: '/blog/',
            sidebarDepth: 2,
            children: [
              ['/blog/2019/how-to-inject-settings-array-in-php-di', 'How To Inject A Settings Array In PHP DI'],
            ]
          },
          {
            title: 'Tutorials',
            path: '/tutorials/',
            sidebarDepth: 2,
            children: [
              ['/tutorials/', 'Start'],
              ['/tutorials/php/', 'PHP'],
              ['/tutorials/xampp/', 'XAMPP']
            ]
          },
          ['/summaries/', 'Summaries'],
          ['https://darker.dev', 'About Me']
        ],
      },
      '/de/': navigationDe,
    },
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ['@vuepress/google-analytics', {
      'ga': 'UA-109045851-6',
    }],
    // https://github.com/lorisleiva/vuepress-plugin-seo
    ['seo', {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      author: (_, $site) => $site.themeConfig.author,
      tags: $page => $page.frontmatter.tags,
      twitterCard: $page => $page.title + ' - by @DevDarker',
      type: $page => {
        if ($page.regularPath.startsWith('/blog')) {
          return 'article';
        }

        return 'website';
      },
      url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
      image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image),
      publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
    }],
    // https://github.com/ntnyq/vuepress-plugin-social-share
    ['social-share', {
      networks: ['twitter', 'facebook', 'reddit', 'telegram', 'whatsapp'],
      twitterUser: 'DevDarker',
      autoQuote: true,
      isPlain: false,
      fallbackImage: '/cover.png',
    }],
    // https://github.com/tolking/vuepress-plugin-reading-progress
    ['reading-progress', {fixed: 'top'}],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true,
    }],
  ]
};
