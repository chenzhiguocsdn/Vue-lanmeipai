export default {
  namespaced: true,
  state: {
    userinfo: {
      username: "",
      token: null,
    },
  },
  mutations: {
    setUser(state, payload) {
      state.userinfo = payload;
    },
    clearUser(state) {
      state.userinfo = {
        username: "",
        token: null,
      };
    },
  },
  actions: {},
};
