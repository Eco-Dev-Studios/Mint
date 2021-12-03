<template>
  <div class="h-auto w-full">
    <!--Header-->
    <header
      id="header"
      class="h-auto bg-true-gray-900 bg-opacity-10 w-full py-4 fixed backdrop-filter backdrop-blur-md"
    >
      <Layout size="xl" class="grid gap-10 grid-cols-2 items-center">
        <div>
          <Logo />
        </div>
        <nav class="grid gap-4 grid-cols-4">
          <a
            href=""
            class="font-semibold text-center text-lg text-gray-800 no-underline"
            >Home</a
          >
          <a
            href=""
            class="font-semibold text-center text-lg text-gray-800 no-underline"
            >About</a
          >
          <a
            href=""
            class="font-semibold text-center text-lg text-gray-800 no-underline"
            >Works</a
          >
          <a
            href=""
            class="font-semibold text-center text-lg text-gray-800 no-underline"
            >Contact</a
          >
        </nav>
      </Layout>
    </header>
    <!--Index-->
    <Layout size="xl" class="pt-18">
      <main class="h-screen w-full relative">
        <div class="animate-animated animate-fade-in w-1/2 center-y">
          <h1 class="font-bold font-sans mb-4 text-7xl text-gray-900">
            Landing Page <br />
            Template
          </h1>
          <p
            class="font-sans font-semibold text-xl text-gray-900 text-opacity-70"
          >
            To facilitate the creation of landing pages, one pages or
            portfolios, this project gives us the necessary configuration tools
            to start a project without much need.
          </p>
          <small class="font-semibold text-gray-900"
            >By Eco Development Studios</small
          >
        </div>
      </main>
    </Layout>
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
      this.$store.commit("scroll/isInViewport", "section2");
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
