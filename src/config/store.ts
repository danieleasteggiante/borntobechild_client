import { createStore } from 'vuex';
import {IMAGE_PATH} from "@/config/constant";

export const store = createStore({
  state: {
    sharedData: 'Dati condivisi',
    imagePath: IMAGE_PATH,
  },
  mutations: {
    setSharedData(state, payload) {
      state.sharedData = payload;
    },
  },
  actions: {
    updateSharedData({ commit }, payload) {
      commit('setSharedData', payload);
    },
  },
  getters: {
    getSharedData: (state) => state.sharedData,
    getImagePath: (state) => state.imagePath,
  },
});
