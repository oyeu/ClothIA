const state = () => ({
  photos: []
});

const getters = {};

const actions = {};

const mutations = {
  addPhoto(state, photo) {
    state.photos = [photo, ...state.photos];
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}