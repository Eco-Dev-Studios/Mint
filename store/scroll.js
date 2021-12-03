export const state = () => ({
  scrollY: 0,
  isInViewport: false,
});

export const mutations = {
  setPosition(state, position) {
    state.scrollY = position;
  },
  isInViewport(state, eleId) {
    const ele = document.getElementById(eleId);
    const scroll = window.scrollY || window.pageYOffset;
    const boundsTop = ele.getBoundingClientRect().top + scroll;

    const viewport = {
      top: scroll,
      bottom: scroll + window.innerHeight,
    };

    const bounds = {
      top: boundsTop,
      bottom: boundsTop + ele.clientHeight,
    };
    const isInView =
      (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
      (bounds.top <= viewport.bottom && bounds.top >= viewport.top);

    state.isInViewport = isInView;
  },
};
