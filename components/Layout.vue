<template>
  <div
    class="h-auto mx-auto transition-all ease-in-out duration-150"
    :class="getSize"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "",
    },
  },
  computed: {
    getSize() {
      switch (this.size) {
        case "sm":
          return "max-w-screen-sm -sm:w-full";
        case "md":
          return "max-w-screen-md -md:w-full";
        case "lg":
          return "max-w-screen-lg -lg:w-full";
        case "xl":
          return "max-w-screen-xl -xl:w-full";
        case "2xl":
          return "max-w-screen-2xl -2xl:w-full";
        default:
          return "max-w-screen";
      }
    },
  },
};
</script>
