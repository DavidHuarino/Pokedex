<template>
    <div class="main_profile">
        <h3>{{ this.$route.params.name }}</h3>
        <div class="wrapper">
            <div class="box_pokemon_avatar">
                <img :src="`https://pokeres.bastionbot.org/images/pokemon/${this.$route.params.id}.png`" alt="">
            </div>
            <div class="details">
                <div class="description">
                    <p> {{ getPokemonDataById.description }} </p>
                </div>
                <div class="features">
                    <div class="height">
                        <h4>Height</h4>
                        <p> {{ getPokemonDataById.height.maximum }} </p>
                    </div>
                    <div class="weight">
                        <h4>Weight</h4>
                        <p> {{ getPokemonDataById.weight.maximum }} </p>
                    </div>
                </div>
                <div class="types">
                    <h4> Types </h4>
                    <div class="container_grid">
                        <div v-for="(type, index) in getPokemonDataById.types" :key="index" :class="type.toLowerCase()">
                        <p class="color_type"> {{ type }} </p>
                    </div>
                    </div>
                </div>
                <div class="weaknesses">
                    <h4> Weaknesses </h4>
                    <div class="container_grid">
                        <div v-for="(weakness, index) in getPokemonDataById.weaknesses" :key="index" :class="weakness.toLowerCase()">
                            <p class="color_type"> {{ weakness }} </p>
                        </div>
                    </div>
                </div>
                <div class="base_points">
                    <h4>Base Points</h4>
                    <div class="container_grid">
                        <div>
                            <h4 class="color_base_point">Base Stamina</h4>
                            <p>{{getPokemonDataById.base_stamina}}</p>
                        </div>
                        <div>
                            <h4 class="color_base_point" >Base Attack</h4>
                            <p>{{getPokemonDataById.base_attack}}</p>
                        </div>
                        <div>
                            <h4  class="color_base_point">Base Defense</h4>
                            <p>{{getPokemonDataById.base_defense}}</p>
                        </div>
                    </div>
                </div>
                <div class="next_evolution">
                    <div class="container_evolution">
                        <h4>Prev Evolution</h4>
                        <div class="card_prev_evolution" v-if="getPokemonDataById.previous_evolution">
                            <div class="box_img">
                                <img :src="`https://pokeres.bastionbot.org/images/pokemon/${getPokemonDataById.previous_evolution[0].id}.png`" alt="">
                            </div>
                            <h3 class="name_evolution">{{ getPokemonDataById.previous_evolution[0].name }}</h3>
                        </div>
                        <div v-else>
                            <p>Not found</p>
                        </div>
                    </div>
                    <div class="container_evolution">
                        <h4>Next Evolution</h4>
                        <div class="card_prev_evolution" v-if="getPokemonDataById.next_evolution">
                            <div class="box_img">
                                <img :src="`https://pokeres.bastionbot.org/images/pokemon/${getPokemonDataById.next_evolution[0].id}.png`" alt="">
                            </div>
                            <h3 class="name_evolution">{{ getPokemonDataById.next_evolution[0].name }}</h3>
                        </div>
                        <div v-else>
                            <p>Not found</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProfilePokemon',
    computed: {
        getPokemonDataById() {
            return this.$store.state.pokemons[this.$route.params.id - 1];
        }
    },
}
</script>
<style scoped>
    p {
        font-weight: 500;
        text-align: center;
    }
    .main_profile {
        background: #fff;
        border-radius: 10px;
        max-width: 800px;
        width: 90%;

    }
    .main_profile .wrapper {
        display: flex;
        margin-bottom: 40px
    }
    .main_profile .wrapper .box_pokemon_avatar {
        padding: 15px;
        background: #e4e8f0;
        width: 50%;
        margin: 15px 7px 15px 15px;
    }
    .main_profile .wrapper .box_pokemon_avatar img {
        width: 100%;
    }
    .main_profile .wrapper .details {
        width: 50%;
        margin: 15px 15px 15px 7px;
    }
    .details .description {
        margin-bottom: 8px;
    }
    .details .description p {
        text-align: left;
    }
    .details .types {
        margin-bottom: 8px;
    }
    .details .weaknesses {
        margin-bottom: 8px;
    }
    .details .features {
        display: flex;
        justify-content: space-around;
        padding: 8px;
        margin-bottom: 8px;
        background: #2978b5;
    }
    .details .base_points {
        margin-bottom: 8px;
    }
    .details .base_points .container_grid {
        display: flex;
        justify-content: space-around;
        background: #e84545;
        padding: 8px;
    }
    .details .base_points .color_base_point {
        color: #fff;
    }
    .details .features .height h4, .details .features .weight h4 {
        color: #fff;
    }
    .details .color_type {
        color: #fff;
        font-weight: 400;
        font-size: 14px;
        margin: 4px;
    }
    .details .next_evolution .name_evolution {
        font-weight: 400;
        font-size: 14px;
    }
    .details .next_evolution .card_prev_evolution .box_img img {
        width: 100%;
    }
    .details .next_evolution .card_prev_evolution .box_img {
        width: 70px;
        margin: 0 auto;
    }
    .details .next_evolution {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .details .weaknesses .container_grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 5px;
    }
    .details .types .container_grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 5px;
    }
    h3 {
        font-weight: 500;
        font-size: 30px;
    }
    h4 {
        font-weight: 500;
        font-size: 15px;
    }

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