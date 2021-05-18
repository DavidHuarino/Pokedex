<template>
    <div class="card_pokemon">
        <div class="box_img">
            <img :src="`${currentUrlImage}${IdPokemon}.png`" alt="">
        </div>
        <h3>{{ namePokemon }}</h3>
        <button><router-link :to="{name: 'Pokemon', params: {id: IdPokemon}}">show details</router-link></button>
    </div>
</template>
<script>
export default {
    name: 'PokemonCard',
    data() {
        return {
            currentUrlImage: this.urlImages,
            IdPokemon: this.id,
            namePokemon: this.name
        }
    },
    props: {
        urlImages: String,
        id: Number,
        name: String
    }
    
}
</script>
<style>
.card_pokemon {
    border-radius: 10px;
    background: #F7D02C;
    cursor: pointer;
    box-shadow: 3px 5px 8px 2px rgba(0, 0, 0, .4);
    transition: all 0.2s ease;
}
a {
    text-decoration: none;
}
.box_img {
    background-color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px;
}
.card_pokemon:hover {
    transform: translateY(-8px);
}
h3 {
    font-weight: 700;
}
.card_pokemon img {
    width: 100%;
}
</style>