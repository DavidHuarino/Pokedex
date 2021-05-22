import Vue from "vue"
import Vuex from "vuex"
import json from "../json/data.json"
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        pokemons: [],
        searchPokemonByName: ''
    },
    mutations: {
        setPokemons(state, pokemons) {
            state.pokemons = pokemons;
        },
        setSearchPokemon(state, searchPokemon) {
            state.searchPokemonByName = searchPokemon;  
        }
    },
    actions: {
        getPokemons({ commit }, data) {
            commit('setPokemons', data);
        },
        getSearchPokemons({ commit }, searchPokemon) {
            commit('setSearchPokemon', searchPokemon);
        }
    },
    getters: {
        pokemonsFiltered(state) {
            let pokeData = state.pokemons.filter(data => data.name.toLowerCase().includes(state.searchPokemonByName));
            if (pokeData) {
                return pokeData;
            }
            return state.pokemons;
        },
        getPokemonById: (state) => name => {
            return state.pokemons.find(pokeData => pokeData.name === name);
        }
    }
});
store.dispatch('getPokemons', json);
export default store;
