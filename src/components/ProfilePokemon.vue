<template>
    <div class="wrapper">
        <h1>Bullbasur</h1>
        <div class="box_pokemon_profile">
            <img :src="`https://pokeres.bastionbot.org/images/pokemon/${this.$route.params.id}.png`" alt="">
        </div>
        <div class="details">
            
            <div class="types_pokemon">
                <div class="green">
                    GRASS
                </div>
                <div class="blue">
                    POISON
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProfilePokemon',
    mounted() {
        console.log(this.$route, "gaaaa");
    },
}
</script>
<style>
    .wrapper {
        width: 100%;
        max-width: 600px;
        background: #fff;
        display: flex;
        border-radius: 10px;
    }
    .box_pokemon_profile {
        width: 30%;
    }
    .box_pokemon_profile img {
        width: 100%;
    }
    .types_pokemon {
        display: flex;
        justify-content: center;
        color: #fff;
    }
    .green {
        background: green;
        padding: 6px;
    }
    .blue {
        background-color: blue;
        padding: 6px;
    }
    .details {
        width: 70%;
    }
</style>