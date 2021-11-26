<template>
  <div id="appContainer" class="w-full h-screen">
    <div
      id="appContentLayout"
      class="max-w-screen-xl h-screen mx-auto flex flex-col items-center justify-center"
    >
      <div class="flex justify-center items-center mb-10">
        <Logo /> <span class="mr-4"></span
        ><switch-mode w-size="10" h-size="10" />
      </div>
      <h1 class="text-xl text-green-800 dark:text-green-400">
        This is a base proyect built with 🔥
      </h1>
      <div class="w-1/2 flex mx-auto justify-evenly">
        <a href="https://nuxtjs.org/" target="_blank">
          <img :src="`/logos/${getMode}`" alt="" width="80" height="80" />
        </a>
        <a href="https://windicss.org/" target="_blank">
          <img src="/logos/windicss-logo.svg" alt="" width="80" height="80" />
        </a>
        <a href="https://vitejs.dev/" target="_blank">
          <img src="/logos/vite-logo.svg" alt="" width="80" height="80" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getMode() {
      let nuxtLogo = "";
      if (this.$colorMode.preference === "light") {
        nuxtLogo = "nuxt-logo.svg";
      }
      if (this.$colorMode.preference === "dark") {
        nuxtLogo = "nuxt-logo-dark.svg";
      }
      return nuxtLogo;
    },
  },
  head: {
    title: "Home Page",
    meta: [
      {
        hid: "home",
        name: "home",
        content: "We are a studio that design and develop to the web",
      },
    ],
  },
};
</script>
