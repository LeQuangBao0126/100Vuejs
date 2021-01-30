import Vue from 'vue'
import Vuex from 'vuex'
import api from '../services/api';
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        videos: []
    },
    mutations: {
        SET_VIDEO(state, videos) {
            state.videos = videos;
        }
    },
    actions: {
        async loadVideos({ commit }, videos) {
            var response = await api().get('/videos');
            commit("SET_VIDEO", response.data);
        }
    },
    modules: {}
})