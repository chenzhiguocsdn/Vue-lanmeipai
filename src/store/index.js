import Vue from "vue";
import Vuex from "vuex";
import Loginmodule from "./modules/LoginModule";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Loginmodule,
  },
});
