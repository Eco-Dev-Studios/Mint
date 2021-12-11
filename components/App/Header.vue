<template>
  <header
    id="header"
    class="h-auto bg-gray-50 bg-opacity-10 w-full pt-4 z-10 fixed backdrop-filter backdrop-blur-xl -lg:px-4 dark:bg-gray-900/70"
  >
    <app-layout
      size="xl"
      class="border-b-gray-400/10 border-b-2 grid pb-4 gap-10 grid-cols-2 items-center"
    >
      <div class="">
        <app-logo />
      </div>
      <nav class="grid gap-4 grid-cols-5 items-center justify-between">
        <a href="#index" class="link">Home</a>
        <a href="" class="link">{{ getScroll }}</a>
        <a href="#example" class="link">Example</a>
        <a href="" class="link">Contact</a>
        <app-switch-mode class="" />
      </nav>
    </app-layout>
  </header>
</template>

<script>
export default {
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
    getScroll() {
      return this.$store.state.scroll.scrollY;
    },
  },
};
</script>
