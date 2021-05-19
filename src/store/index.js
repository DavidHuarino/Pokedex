import Vue from "vue"
import Vuex from "vuex"
import json from "../json/data.json"
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        pokemons: []
    },
    mutations: {
        setPokemons(state, pokemons) {
            state.pokemons = pokemons;  
        }
    },
    actions: {
        getPokemons({ commit }, data) {
            commit('setPokemons', data);
        }
    }
});
store.dispatch('getPokemons', json);
export default store;
