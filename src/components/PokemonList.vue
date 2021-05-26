<template>
    <div>
        <div v-if="pokemonsFiltered.length">
            <div class="cards_pokemons">
                <PokemonCard
                    v-for="pokeObject in pokemonsFiltered"
                    :key="stringIdToInteger(pokeObject.id)"
                    :id="stringIdToInteger(pokeObject.id)"
                    :name="pokeObject.name"
                    :urlImages="urlImages"
                    :types="pokeObject.types"
                />
            </div>
        </div>
        <div v-else>
            <div class="not_found">
                <p>pokemons not found</p>
            </div>
        </div>
    </div>
</template>
<script>
import PokemonCard from '@/components/PokemonCard.vue';
export default {
    name: 'PokemonList',
    data() {
        return {
            urlImages: 'https://pokeres.bastionbot.org/images/pokemon/'
        }
    },
    components: {
        PokemonCard
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