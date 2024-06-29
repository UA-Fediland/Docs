// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Documentation",
  tagline: "Efficient documentation solutions for everyone.",
  favicon: "img/favicon.webp",

  // Set the production url of your site here
  url: "https://docs.fediland.in.ua",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "UA Fediland", // Usually your GitHub org/user name.
  projectName: "UA Fediland", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "uk",
    locales: ["uk"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/favicon.webp",
      navbar: {
        title: "Docs UA Fediland",
      },
      footer: {
        style: "light",
        links: [
            
              {
                label: "Home",
                href: "https://fediland.in.ua",
              },
              {
                label: "Contacts",
                href: "https://fediland.in.ua/contacts",
              },
              {
                label: "Donate",
                href: "https://send.monobank.ua/jar/AQiVab8fC",
              },
        ],
        copyright: `Made by UA Fediland with ❤️`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
