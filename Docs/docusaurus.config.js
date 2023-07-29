// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Kindly ImaGen",
  tagline: "Stable Diffusion, without the hassle",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://unity.kindly.dev",
  baseUrl: "/",

  organizationName: "MADD STUDIO LTD", // Usually your GitHub org/user name.
  projectName: "Kindly Unity Integration", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Kindly Unity Integration",
        logo: {
          alt: "Kindly Logo",
          src: "img/mage.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "baseSidebar",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://github.com/thaon/ImaGen",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Madd Studio Ltd, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
