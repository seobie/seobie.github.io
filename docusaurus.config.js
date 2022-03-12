// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config();
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Seob'log",
  tagline: 'Be the type of person you want to meet',
  url: 'https://seobie.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'seobie', // Usually your GitHub org/user name.
  projectName: 'seobie.github.io', // Usually your repo name.
  deploymentBranch: 'gp-pages',
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/seobie/seobie.github.io/tree/main/',
        },
        blog: {
          blogTitle: "seob'log",
          blogDescription:
            '프론트엔드 개발을 하며 겪었던 문제나 스터디한 내용을 공유합니다. 사실은 아무거나 막올림',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/seobie/seobie.github.io/tree/main/',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          postsPerPage: 5,
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
        title: "Seob'log",
        logo: {
          alt: 'My Site Logo',
          src: 'img/avatar.png',
        },
        items: [
          // {
          //   label: 'Tutorial',
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          // },
          { label: 'Blog', to: '/blog', position: 'left' },
          { label: 'Tags', to: '/blog/tags', position: 'left' },
          { label: 'Archive', to: '/blog/archive', position: 'left' },
          {
            label: 'Playground',
            to: '/playground',
            position: 'left',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/seobie',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/x.eob',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/seobie',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Yeongseob Lee, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: process.env.ALGORIA_API_KEY,

        // Public API key: it is safe to commit it
        apiKey: process.env.ALGORIA_SEARCH_API_KEY,

        indexName: 'seobie',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. 여러 문서 사이트를 크롤링하고 window.location.href를 사용하여 해당 사이트로 이동하려는 경우에 유용한 알골리아 설정입니다.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        // searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
    }),
};

module.exports = config;
