export const state = () => ({
  scrollY: 0,
});

export const mutations = {
  setPosition(state, position) {
    state.scrollY = position;
  },
};
