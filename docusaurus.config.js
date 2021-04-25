/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Scriptails',
    tagline: 'Dinosaurs are cool',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'luciancaetano',
    projectName: 'scriptails',
    themeConfig: {
        navbar: {
            title: 'Scriptails',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Docs',
                },
                // { to: '/blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/luciancaetano/scriptails',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    href: 'https://www.npmjs.com/package/scriptails',
                    label: 'NPM',
                    position: 'right',
                },
            ],
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
