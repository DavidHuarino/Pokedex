<template>
    <div>
        <pagination :pokemonSize="pokemonsFiltered.length">
            <template #data="{ pageNumber }">
                <div v-if="pokemonsFiltered.length">
                    <div class="cards_pokemons">
                        <PokemonCard
                            v-for="pokeObject in pokemonsFiltered.slice((pageNumber - 1) * 6, pageNumber * 6)"
                            :key="stringIdToInteger(pokeObject.id)"
                            :id="pokeObject.id"
                            :name="pokeObject.name"
                            :types="pokeObject.types"
                        />
                    </div>
                </div>
                <div v-else>
                    <div class="not_found">
                        <p>pokemons not found</p>
                    </div>
                </div>
            </template>
        </pagination>
    </div>
</template>
<script>
import PokemonCard from '@/components/PokemonCard.vue';
import Pagination from './Pagination.vue';
export default {
    name: 'PokemonList',
    data() {
        return {
            // urlImages: 'https://pokeres.bastionbot.org/images/pokemon/'
        }
    },
    components: {
        PokemonCard,
        Pagination
    },
    methods: {
        stringIdToInteger(id) {
            return parseInt(id);
        }
    },
    computed: {
        pokemonsFiltered() {
            return this.$store.getters.pokemonsFiltered;
        }
    }
}
</script>
<style>
    .cards_pokemons {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-auto-rows: minmax(200px, auto);
        gap: 30px;
        margin: 15px;
    }
    .not_found {
        background-color: #e84545;
        margin: 15px;
        padding: 10px;
        color: #fff;
    }
    .not_found {
        font-weight: 500;
    }
</style>