<template>
  <div id="appContainer" class="w-full h-full">
    <!-- <div class="fixed top-0">
      {{ getScroll }}
    </div> -->
    <div
      id="appContentLayout"
      class="max-w-screen-xl h-screen mx-auto flex flex-col items-center justify-center"
    >
      <div class="flex justify-center items-center mb-10">
        <Logo /> <span class="mr-4"></span
        ><switch-mode w-size="10" h-size="10" />
      </div>
      <!-- <h1 class="text-xl text-green-800 dark:text-green-400">
        This is a base proyect built with 🔥
      </h1> -->

      <a href="#test">Test</a>
      <a href="#test2">Test2</a>

      <div class="w-1/2 flex mx-auto justify-evenly transform">
        <!-- <a href="https://nuxtjs.org/" target="_blank">
          <img
            :src="`/logos/${getMode}`"
            alt="nuxtjs"
            width="80"
            height="80"
            :style="{ transform: ` translateX(-${getScroll}px)` }"
          />
        </a> -->
        <div :style="{ transform: ` translateX(-${getScroll}px)` }">
          <h1 class="font-bold text-10xl text-gray-800 font-sans">Cess</h1>
        </div>
        <a href="https://windicss.org/" target="_blank">
          <img src="/logos/windicss-logo.svg" alt="" width="80" height="80" />
        </a>
        <div :style="{ transform: ` translateX(${getScroll}px)` }">
          <h1 class="font-bold text-10xl text-gray-800 font-sans">White</h1>
        </div>
        <!-- <a href="https://vitejs.dev/" target="_blank">
          <img
            src="/logos/vite-logo.svg"
            alt=""
            width="80"
            height="80"
            :style="{ transform: ` translateX(${getScroll}px)` }"
          />
        </a> -->
      </div>
    </div>
    <div class="h-screen ? w-full" id="test">
      <a href="#appContentLayout">Go to Home</a>
    </div>
    <div class="h-screen ? w-full" id="test2">
      <a href="#test">Go to Test</a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    scrollY: 0,
  }),
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      this.scrollY = window.scrollY;
      this.$store.commit("scroll/setPosition", window.scrollY);
    },
  },
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
    getScroll() {
      return this.$store.state.scroll.scrollY;
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
