<template>
    <div class="cards_pokemons">
        <PokemonCard
            v-for="pokeObject in getPokemonsFiltered"
            :key="stringIdToInteger(pokeObject.id)"
            :id="stringIdToInteger(pokeObject.id)"
            :name="pokeObject.name"
            :urlImages="urlImages"
            :types="pokeObject.types"
        />
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
        getPokemonsFiltered() {
            return this.$store.getters.pokemonsFiltered;
        }
    }
}
</script>
<style>
.cards_pokemons {
    display: grid;
    /*grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));*/   
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(200px, auto);
    gap: 30px;
    margin: 15px;
}
</style>