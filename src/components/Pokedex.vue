<template>
    <div class="container">  
        <div class="search_bar">
            <input type="text" placeholder="Type to search">
        </div>
        <PokemonList
            :urlApi="urlApi"
        />
    </div>
</template>
<script>
import PokemonList from '@/components/PokemonList.vue';
export default {
    name: 'Pokedex',
    data() {
        return {
            urlApi: 'https://pokeapi.co/api/v2/pokemon?limit=20'
        }
    },
    components: {
        PokemonList
    }
}
</script>
<style>
:root {
    --background: #fff;
}
.container {
    max-width: 900px;
    margin: 0 auto;
}
.search_bar {
    background: wheat;
}
</style>