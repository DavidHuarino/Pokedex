<template>
    <div class="card_pokemon">
        <div class="box_img">
            <router-link :to="{name: 'Pokemon', params: {id: IdPokemon, name: namePokemon}}">
                <img :src="`${currentUrlImage}${IdPokemon}.png`" alt="">
            </router-link>
        </div>
        <h3>{{ namePokemon }}</h3>
        <div class="container_type_pokemon">
            <div class="type_pokemon">
                <h3><span class="type_name">GRASS</span></h3>
            </div>
            <div class="type_pokemon">
                <h3><span class="type_name">ELECTRIC</span></h3>
            </div>
        </div>
        <!--<button><router-link :to="{name: 'Pokemon', params: {id: IdPokemon}}">show details</router-link></button>-->
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
        background: #fff;
        box-shadow: 1px 2px 6px 2px rgba(0, 0, 0, .4);
        transition: all 0.2s ease-in-out;
        padding: 10px;
    }
    .box_img {
        background: #e4e8f0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        
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
    .container_type_pokemon {
        display: flex;
        flex-wrap: space-beetween;
        justify-content: space-around;
        color: #fff;
    }
    .type_pokemon .type_name {
        font-size: 13px;
        background: gray;
        padding: 4px;
    }

</style>