// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/dracula');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '三阳河',
  tagline: '穷宜陵，富丁沟，小小樊汊赛扬州。',
  url: 'https://belem2019.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'belem2019', // Usually your GitHub org/user name.
  projectName: 'thenextgeneration', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/belem2019/thenextgeneration/doc',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/belem2019/thenextgeneration/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Belem',
        logo: {
          alt: 'Belem',
          src: 'img/android-chrome-192x192.png',
        },
        items: [
          {
            to: '/docs/',
            position: 'left',
            label: '三阳河',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/belem/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Belem',
            items: [
              {
                label: '三阳河',
                to: '/docs/',
              },
            ],
          },
          {
            title: '社交',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/ibelem',
              },
            ],
          },
          {
            title: '其他',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ibelem',
              },
            ],
          },
        ],
        copyright: `©${new Date().getFullYear()} belem.dev`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
