export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Landing page template",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/main.css"],
  loading: { color: "#3B8070" },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "nuxt-vite",
    "nuxt-windicss",
    "@nuxtjs/color-mode",
    "@nuxtjs/pwa",
  ],
  windicss: {
    scan: {
      dirs: ["./"],
      exclude: [
        "node_modules",
        ".git",
        ".nuxt/**/*",
        "*.template.html",
        "app.html",
      ],
      include: [],
    },
    transformCSS: "pre",
    preflight: {
      alias: {
        // add nuxt aliases
        "nuxt-link": "a",
        // @nuxt/image module
        "nuxt-img": "img",
      },
    },
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      theme_color: "#fafafa",
      name: "Template No 1",
    },
    icon: {
      fileName: "icon.png",
    },
  },
  // DarkMode Config
  colorMode: {
    preference: "system",
    fallback: "dark",
    classSuffix: "",
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
