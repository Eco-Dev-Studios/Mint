export const state = () => ({
  scrollY: 0,
  isInViewport: false,
});

export const mutations = {
  setPosition(state, position) {
    state.scrollY = position;
  },
  isInViewport(state, eleId) {
    const element = document.getElementById(eleId);
    const rect = element.getBoundingClientRect();
    const html = document.documentElement;
    state.isInViewport =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth);
  },
};
