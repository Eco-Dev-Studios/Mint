<template>
  <div>
    <div id="appContainer" class="w-full h-screen flex relative">
      <div class="center-x-y">
        <a href="#section1">Go to section 1</a> <br />
        <a href="#section1">Go to section 2</a>
        <div class="w-12 h-12 mx-auto">
          <switch-mode />
        </div>
      </div>
      <div
        class="h-screen w-1/2 bg-true-gray-800 flex items-center justify-center dark:bg-gray-900"
        :style="{ transform: ` translateX(-${getScroll}px)` }"
      >
        <Logo />
        {{ isInViewport }}
      </div>
      <div
        class="h-screen w-1/2 bg-true-gray-800 flex items-center justify-center dark:bg-gray-900"
        :style="{ transform: ` translateX(${getScroll}px)` }"
      >
        <p class="font-normal text-normal text-gray-800 font-sans text-gray-50">
          Landing Page Template by Eco Development Studios
        </p>
      </div>
    </div>
    <div
      class="h-screen bg-true-gray-800 w-full flex flex-col items-center justify-center text-gray-50"
      id="section1"
    >
      <a href="#appContainer">Go to Home ☝🏻</a>
      <a href="#section2">Go to down 👇🏻</a>
    </div>
    <div
      class="h-screen bg-true-gray-800 w-full flex items-center justify-center text-gray-50"
      id="section2"
    >
      <a href="#section1">Go to Up ☝🏻</a>
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
      this.$store.commit("scroll/isInViewport", "section1");
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
    isInViewport() {
      return this.$store.state.scroll.isInViewport;
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
