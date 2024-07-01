import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "SparkPixel server",
      description: "一个我的世界MTR服务器",
    },
    "/en/": {
      lang: "en-US",
      title: "SparkPixel server",
      description: "Minecraft Server / Minecraft Transit Railway Server",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
