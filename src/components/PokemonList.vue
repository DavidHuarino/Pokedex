<template>
    <div class="cards_pokemons">
        <PokemonCard
            v-for="pokemonObject in pokemons"
            :key="`poke-${pokemonObject.id}`"
            :id="pokemonObject.id"
            :name="pokemonObject.name"
            :urlImages="urlImages"
        />
    </div>
</template>
<script>
import PokemonCard from '@/components/PokemonCard.vue';
export default {
    name: 'PokemonList',
    data() {
        return {
            currentUrl: '',
            pokemons: [],
            urlImages: 'https://pokeres.bastionbot.org/images/pokemon/'
        }
    },
    props: {
        urlApi: String
    },
    components: {
        PokemonCard
    },
    created() {
        this.currentUrl = this.urlApi;
        this.setPokemons();
    },
    methods: {
        async setPokemons() {
            const res = await fetch(this.currentUrl);
            const data = await res.json();
            this.setDataObjects(data.results);
        },
        async setDataObjects(results) {
            results.forEach(async pokeData => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeData.name}`);
                const data = await res.json();
                this.pokemons.push(data);
            });
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
</style>