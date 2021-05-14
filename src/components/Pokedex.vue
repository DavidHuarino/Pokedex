<template>
    <div class="container">
        
        <div class="box_search">
            <input type="text" placeholder="Type to search">
        </div>
        <section class="card_list">
            <Card v-for="(pokemon, index) in pokemonsData" 
                :key="index"
                :index="index"
                :name="pokemon.name" 
                :url="pokemon.url" />
        </section>
    </div>
</template>
<script>
import Card from '@/components/Card.vue';
export default {
    name: 'Pokedex',
    data() {
        return {
            pokemonsData: [],
        }
    },
    components: {
        Card
    },
    async mounted() {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15');
        const data = await resp.json();
        this.pokemonsData = data.results;
    },
    methods: {

    }
}
</script>
<style>
:root {
    --background: #fff;
}
.container {
    max-width: 1200px;
    margin: 0 auto;

}
.box_search {
    background: wheat;
}
.card_list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: minmax(200px, auto);
}
</style>