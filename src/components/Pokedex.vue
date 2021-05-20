<template>
    <div class="container">
        <SearchPokemon/>
        <PokemonList/>
    </div>
</template>
<script>
import PokemonList from '@/components/PokemonList.vue'
import SearchPokemon from '@/components/SearchPokemon.vue'
export default {
    name: 'Pokedex',
    data() {
        return {
        }
    },
    components: {
        PokemonList,
        SearchPokemon
    },
}
</script>
<style>
.container {
    max-width: 900px;
    margin: 0 auto;
}
</style>