<template>
  <div class="h-screen w-screen relative">
    <div class="text-center center-x-y">
      <h1>Test Page</h1>
      <nuxt-link to="/" class="mt-4 link underline inline-block"
        >Return to home</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Test Page",
    meta: [
      {
        hid: "test",
        name: "test",
        content: "This is a test page",
      },
    ],
  },
};
</script>
