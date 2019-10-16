module.exports = {
  title: 'A Dev Journal',
  description: 'A pair of notes of a developer',
  base: '/',
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
        lang: 'en-GB',
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
        sidebar: [
          ['/', 'Home'],
          {
            title: 'Tutorials',
            path: '/tutorials/',
            sidebarDepth: 2,
            children: [
              ['/tutorials/php/', 'PHP'],
              ['/tutorials/xampp/', 'XAMPP']
            ]
          },
          ['/summaries/', 'Summaries'],
          ['https://darker.dev', 'About Me']
        ],
      },
      '/de/': {
        lang: 'de-CH',
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
        sidebar: [
          ['/de', 'Start'],
          {
            title: 'Tutorials',
            path: '/tutorials/',
            sidebarDepth: 2,
            children: [
              ['/tutorials/php/', 'PHP (en)'],
              ['/tutorials/xampp/', 'XAMPP (en)']
            ]
          },
          ['/de/artikel', 'Artikel'],
          ['/de/installationen', 'Installationen'],
          ['/de/ionic', 'Ionic'],
          ['/de/lernjournal', 'Lernjournal'],
          ['/de/module', 'Module'],
          ['/de/wiki', 'wiki'],
          ['https://darker.dev', 'Über mich']
        ],
      },
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
