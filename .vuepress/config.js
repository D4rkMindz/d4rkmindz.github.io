module.exports = {
    title: 'My Blog',
    description: 'A Blog and Documentation for myself',
    base: '/',
    themeConfig: {
        nextLinks: false,
        prevLinks: false,
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
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-109045851-6',
            }
        ]
    ]
};