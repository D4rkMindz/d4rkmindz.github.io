module.exports = {
    title: 'A Dev Journal',
    description: 'A pair of notes of a developer',
    base: '/',
    themeConfig: {
        nextLinks: false,
        prevLinks: false,
        author: {
            name: 'Björn Pfoster',
            twitter: '@DevDarker',
        },
        domain: 'blog.darker.dev',
        repo: 'd4rkmindz/d4rkmindz.github.io',
        repoLabel: 'Contribute!',
        editLinks: true,
        editLinkText: 'Edit on GitHub!',
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
        ],
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
                if ($page.regularPath.startsWith('/blog')){
                    return 'article';
                }

                return 'website';
            },
            url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
            image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image),
            publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
            modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),

        }],
    ]
};