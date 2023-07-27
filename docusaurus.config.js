// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Honeycomb Protocol Docs",
  tagline: "Documentation for the Honeycomb gaming protocol.",
  url: "https://docs.honeycombprotocol.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "honeycomb-protocol",
  projectName: "docs",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // presets: [
  //   [
  //     'classic',
  //     /** @type {import('@docusaurus/preset-classic').Options} */
  //     ({
  //       docs: {
  //         sidebarPath: require.resolve('./sidebars.js'),
  //         // Please change this to your repo.
  //         // Remove this to remove the "edit this page" links.
  //         editUrl:
  //           'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
  //       },
  //       blog: {
  //         showReadingTime: true,
  //         // Please change this to your repo.
  //         // Remove this to remove the "edit this page" links.
  //         editUrl:
  //           'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
  //       },
  //       theme: {
  //         customCss: require.resolve('./src/css/custom.css'),
  //       },
  //     }),
  //   ],
  // ],

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/honeycomb-protocol/docs/tree/main/",
          // remarkPlugins: [require("mdx-mermaid")],
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-TNL3E6G9YK",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "Honeycomb Protocol Docs",
        logo: {
          alt: "Honeycomb Protocol Logo",
          src: "img/logo.svg",
          srcDark: "img/logo.svg",
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: "https://github.com/honeycomb-protocol/docs",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/honeycomb-protocol",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/honeycomb-protocol",
              },
              {
                label: "StackExchange",
                href: "https://solana.stackexchange.com/questions/tagged/honeycomb-protocol",
              },
              {
                label: "GitHub",
                href: "https://github.com/honeycomb-protocol",
              },
            ],
          },
          {
            title: "Powered by",
            items: [
              {
                label: "Docusaurus",
                href: "https://docusaurus.io/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Honeycomb Protocol. Built by Tumi Labs.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["rust"],
      },
    }),
};

module.exports = config;
