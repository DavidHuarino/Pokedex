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
            let searchLowerCase = searchPokemon.toLowerCase();
            commit('setSearchPokemon', searchLowerCase);
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
        getPokemonByName: (state) => name => {
            return state.pokemons.find(pokeData => pokeData.name === name);
        },
        getPokemonById: (state) => id => {
            let idString = id.toString();
            return state.pokemons.find(pokeData => pokeData.id === idString.padStart(3, '0'));
        },
        getPokemonSearchPokemon(state) {
            return state.searchPokemonByName;
        }
    }
});
store.dispatch('getPokemons', json);
export default store;
