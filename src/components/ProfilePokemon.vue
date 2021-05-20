<template>
    <div class="main_profile">
        <h3>{{ this.$route.params.name }}</h3>
        <div class="wrapper">
            <div class="box_pokemon_avatar">
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
    </div>
</template>
<script>
export default {
    name: 'ProfilePokemon',
}
</script>
<style>
    .main_profile {
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        max-width: 700px;
        width: 90%;

    }
    .main_profile .wrapper {
        display: flex;
    }
    .main_profile .wrapper .box_pokemon_avatar {
        padding: 15px;
        background: #e4e8f0;
        width: 50%;
    }
    .main_profile .wrapper .box_pokemon_avatar img {
        width: 100%;
    }
    .main_profile .wrapper .details {
        width: 50%;
    }
</style>