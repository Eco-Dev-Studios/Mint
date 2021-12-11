<template>
  <div class="h-auto w-full relative">
    <app-layout size="xl" class="h-auto grid grid-flow-row gap-10 grid-cols-6">
      <div
        class="bg-cover bg-center rounded-lg bg-image-2 col-start-2 col-span-4 row-span-6"
      ></div>
      <div
        class="bg-cover bg-center rounded-lg bg-image-2 col-start-1 col-end-3 row-span-8"
      ></div>
      <div
        id="example"
        class="bg-cover bg-center rounded-lg bg-image-3 animate-delay col-end-7 col-span-2 row-span-12 animate-delay-150 animated"
        :class="{ 'animate-head-shake': isInViewport }"
      ></div>
      <div
        class="bg-cover bg-center rounded-lg bg-image-2 col-start-1 col-end-4 row-span-8"
      ></div>
      <div
        class="bg-cover bg-center rounded-lg bg-image-3 col-start-3 col-span-2 row-span-12"
      ></div>
      <div
        class="bg-cover bg-center rounded-lg bg-image-2 col-start-2 col-span-4 row-span-8"
      >
        06
      </div>
      <div
        class="bg-cover bg-center rounded-lg bg-image-3 col-span-2 col-start-1 row-span-18"
      ></div>
    </app-layout>
  </div>
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
      this.$store.commit("scroll/isInViewport", "example");
    },
  },

  computed: {
    isInViewport() {
      return this.$store.state.scroll.isInViewport;
    },
  },
};
</script>

<style scoped>
.bg-image-2 {
  background-image: url("https://images.unsplash.com/photo-1538898780761-268f71f67675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80");
}
.bg-image-3 {
  background-image: url("https://images.unsplash.com/photo-1530177150700-84cd9a3b059b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80");
}
</style>
