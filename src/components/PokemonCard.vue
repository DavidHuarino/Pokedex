<template>
    <div class="card_pokemon">
        <div class="box_img">
            <router-link :to="{name: 'Pokemon', params: {name: namePokemon}}">
                <img :src="`${currentUrlImage}${IdPokemon}.png`" alt="">
            </router-link>
        </div>
        <h3>{{ namePokemon }}</h3>
        <div class="container_type_pokemon">
            <div class="type_pokemon" v-for="(type, index) in typesPokemon" :key="index" :class="type.toLowerCase()">
                <h3><span class="type_name">{{ type }}</span></h3>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PokemonCard',
    data() {
        return {
            currentUrlImage: this.urlImages,
            IdPokemon: this.id,
            namePokemon: this.name,
            typesPokemon: this.types,

        }
    },
    props: {
        urlImages: String,
        id: Number,
        name: String,
        types: Array
    }
    
}
</script>
<style scoped>
    @import '../assets/styles/pokemon_types.css';
    .card_pokemon {
        border-radius: 10px;
        background: #fff;
        box-shadow: 1px 2px 6px 2px rgba(0, 0, 0, .4);
        transition: all 0.2s ease-in-out;
        padding: 10px;
    }
    .box_img {
        background: #e4e8f0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        margin-bottom: 5px;
    }
    .box_img img {
        padding: 5px;
    }
    .card_pokemon:hover {
        transform: translateY(-8px);
    }
    h3 {
        font-weight: 400;
        margin-bottom: 5px;
    }
    .card_pokemon img {
        width: 100%;
    }
    .container_type_pokemon {
        display: flex;
        flex-wrap: space-beetween;
        justify-content: space-around;
        color: #fff;
    }
    .type_pokemon .type_name {
        font-size: 13px;
        padding: 4px;
    }

</style>