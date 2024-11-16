import { createStore } from 'vuex';
import { IMAGE_PATH } from "@/config/constant";

export const store = createStore({
  state: {
    sharedData: 'Dati condivisi',
    imagePath: IMAGE_PATH,
    is_logged: false,
    access_token: ''
  },
  mutations: {
    setSharedData(state, payload) {
      state.sharedData = payload;
    },
    setIsLogged(state, payload) {
      state.is_logged = payload;
    },
    setAccessToken(state, payload) {
      state.access_token = payload;
    }
  },
  actions: {
    updateSharedData({ commit }, payload) {
      commit('setSharedData', payload);
    },
    updateIsLogged({ state }, payload) {
      state.is_logged = payload;
    },
    updateToken({ state }, payload) {
      state.access_token = payload;
    },
  },
  getters: {
    getSharedData: (state) => state.sharedData,
    getImagePath: (state) => state.imagePath,
    getIsLogged: (state) => state.is_logged,
    getToken: (state) => state.access_token
  },
});
