import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "D3 by Observable",
  description:
    "D3 by Observable | The JavaScript library for bespoke data visualization",
  base: "/",
  cleanUrls: true,
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL("./theme/CustomFooter.vue", import.meta.url)
          ),
        },
      ],
    },
  },
  head: [
    ["link", { rel: "apple-touch-icon", href: "/logo.png" }],
    [
      "link",
      { rel: "icon", type: "image/png", href: "/logo.png", sizes: "512x512" },
    ],
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-9B88TP6PKQ",
      },
    ],
    [
      "script",
      {},
      "window.dataLayer=window.dataLayer||[];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js',new Date());\ngtag('config','G-9B88TP6PKQ');",
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: "/logo-light.svg",
      dark: "/logo-dark.svg",
    },
    nav: [
      { text: "Getting Started", link: "/getting-started" },
      { text: "Examples", link: "/markdown-examples" },
    ],
    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Why Observable", link: "/" },
          { text: "A taste of Observable", link: "/" },
          { text: "Creating your account", link: "/" },
          { text: "Learn Observable" },
        ],
      },
      {
        text: "Notebooks",
        items: [
          { text: "Cell modes", link: "/" },
          { text: "Data Table cell", link: "/" },
          { text: "Chart cell", link: "/" },
          { text: "Add Data", link: "/" },
          { text: "Importing", link: "/" },
          { text: "Debugging", link: "/" },
          { text: "Tinker Mode", link: "/" },
          { text: "Fork, Suggest, Merge", link: "/" },
          { text: "Saving & History", link: "/" },
          { text: "Collaboration", link: "/" },
        ],
      },
      {
        text: "Collections",
        items: [{ text: "Placeholder" }],
      },
      {
        text: "Dashboards",
        items: [{ text: "Placeholder" }],
      },
      {
        text: "Notifications",
        items: [{ text: "Placeholder" }],
      },
      {
        text: "Accounts & Workspaces",
        items: [
          { text: "Security", link: "/" },
          { text: "Transfer", link: "/" },
          { text: "Membership", link: "/" },
          { text: "Databases", link: "/" },
          { text: "Permissions", link: "/" },
          { text: "Secrets", link: "/" },
          { text: "API / Notebook Keys", link: "/" },
          { text: "Suggestions", link: "/" },
          { text: "Profile", link: "/" },
          { text: "Trash", link: "/" },
        ],
      },
    ],
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/observablehq/plot" },
      { icon: "twitter", link: "https://twitter.com/observablehq" },
      { icon: "mastodon", link: "https://vis.social/@observablehq" },
      {
        icon: "slack",
        link: "https://observable-community.slack.com/ssb/redirect",
      },
      { icon: "linkedin", link: "https://www.linkedin.com/company/observable" },
      { icon: "youtube", link: "https://www.youtube.com/c/Observablehq" },
    ],
    footer: {
      copyright: `Copyright ${new Date().getUTCFullYear()} Observable, Inc.`,
    },
  },
});
