import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Miners Online',
  tagline: 'Documentation for Miners Online',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://minersonline.uk',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Miners-Online', // Usually your GitHub org/user name.
  projectName: 'website-v3', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: true,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          id: 'miners_online_server',
          sidebarPath: './sidebarsMinersOnlineServer.ts',
          path: 'docs/miners_online_server',
          routeBasePath: 'docs/miners_online_server',
          editUrl:
            'https://github.com/Miners-Online/website-v3/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Miners-Online/website-v3/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/favicon.png',
    navbar: {
      title: 'Miners Online',
      logo: {
        alt: 'Miners Online Logo',
        src: 'img/favicon.png',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        {to: '/docs/miners_online_server/intro', label: 'Minecraft Server', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Miners-Online/website-v3',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Products and Services',
          items: [
            {
              label: 'Minecraft Server',
              href: '/docs/miners_online_server/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Miners-Online/website-v3',
            },
          ],
        },
      ],
      copyright: `Copyright © 2023 - ${new Date().getFullYear()} Miners Online. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
