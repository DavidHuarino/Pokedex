<template>
    <div class="card_pokemon">
        <div class="box_img">
            <router-link :to="{name: 'Pokemon', params: {id: IdPokemon, name: namePokemon}}">
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
    .card_pokemon:hover {
        transform: translateY(-8px);
    }
    h3 {
        font-weight: 700;
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
    /* types colors */
    .bug {
    background-color: #abb642;
    }

    .dark {
    background-color: #6c584a;
    }

    .dragon {
    background-color: #6843ef;
    }

    .electric {
    background-color: #f2d054;
    }

    .fairy {
    background-color: #e29dac;
    }

    .flying {
    background-color: #a493ea;
    }

    .fighting {
    background-color: #b13c31;
    }

    .fire {
    background-color: #e28544;
    }

    .ghost {
    background-color: #6c5a94;
    }

    .grass {
    background-color: #8bc560;
    }

    .ground {
    background-color: #dbc074;
    }

    .ice {
    background-color: #a6d6d7;
    }

    .normal {
    background-color: #a8a77d;
    }

    .poison {
    background-color: #94489b;
    }

    .psychic {
    background-color: #e66388;
    }

    .rock {
    background-color: #b4a04a;
    }

    .steel {
    background-color: #b8b8ce;
    }

    .water {
    background-color: #6f91e9;
    }

</style>