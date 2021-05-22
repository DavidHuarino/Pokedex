<template>
    <div class="main_profile">
        <h3>{{ dataPokemon.name }}</h3>
        <div class="wrapper">
            <div class="box_pokemon_avatar">
                <img :src="`https://pokeres.bastionbot.org/images/pokemon/${stringIdToInteger(dataPokemon.id)}.png`" alt="">
            </div>
            <div class="details">
                <div class="description">
                    <p> {{ dataPokemon.description }} </p>
                </div>
                <div class="features">
                    <div class="height">
                        <h4>Height</h4>
                        <p> {{ dataPokemon.height.maximum }} </p>
                    </div>
                    <div class="weight">
                        <h4>Weight</h4>
                        <p> {{ dataPokemon.weight.maximum }} </p>
                    </div>
                </div>
                <div class="types">
                    <h4> Types </h4>
                    <div class="container_grid">
                        <div v-for="(type, index) in dataPokemon.types" :key="index" :class="type.toLowerCase()">
                        <p class="color_type"> {{ type }} </p>
                    </div>
                    </div>
                </div>
                <div class="weaknesses">
                    <h4> Weaknesses </h4>
                    <div class="container_grid">
                        <div v-for="(weakness, index) in dataPokemon.weaknesses" :key="index" :class="weakness.toLowerCase()">
                            <p class="color_type"> {{ weakness }} </p>
                        </div>
                    </div>
                </div>
                <div class="base_points">
                    <h4>Base Points</h4>
                    <div class="container_grid">
                        <div>
                            <h4 class="color_base_point">Base Stamina</h4>
                            <p>{{dataPokemon.base_stamina}}</p>
                        </div>
                        <div>
                            <h4 class="color_base_point" >Base Attack</h4>
                            <p>{{dataPokemon.base_attack}}</p>
                        </div>
                        <div>
                            <h4  class="color_base_point">Base Defense</h4>
                            <p>{{dataPokemon.base_defense}}</p>
                        </div>
                    </div>
                </div>
                <div class="next_evolution">
                    <div class="container_evolution">
                        <h4>Prev Evolution</h4>
                        <div class="card_prev_evolution" v-if="dataPokemon.previous_evolution">
                            <div class="box_img">
                                <img :src="`https://pokeres.bastionbot.org/images/pokemon/${stringIdToInteger(dataPokemon.previous_evolution.slice(-1).pop().id)}.png`" alt="">
                            </div>
                            <h3 class="name_evolution">{{ dataPokemon.previous_evolution.slice(-1).pop().name }}</h3>
                        </div>
                        <div v-else class="not_found_prev_pokemon">
                            <div class="box_img">
                                <img src="../assets/images/not_found.jpg" alt="">
                            </div>
                        </div>  
                    </div>
                    <div class="container_evolution">
                        <h4>Next Evolution</h4>
                        <div class="card_prev_evolution" v-if="dataPokemon.next_evolution">
                            <div class="box_img">
                                <img :src="`https://pokeres.bastionbot.org/images/pokemon/${stringIdToInteger(dataPokemon.next_evolution[0].id)}.png`" alt="">
                            </div>
                            <h3 class="name_evolution">{{ dataPokemon.next_evolution[0].name }}</h3>
                        </div>
                        <div v-else class="not_found_next_pokemon">
                            <div class="box_img">
                                <img src="../assets/images/not_found.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="buttons_routes">
                <a href="" @click.prevent="loadPrevPokemon()">Prev pokemon</a>
                <button>go pokedex</button>
                <button>next pokemon</button>
            </div>
        
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProfilePokemon',
    data() {
        return {
            namePokemon: this.$route.params.name
        }
    },
    methods: {
        stringIdToInteger(id) {
            return parseInt(id);
        },
        loadPrevPokemon() {
            this.$router.push({
                name: 'Pokemon',
                params: {name: this.prevPokemon.name }
            });
        }
    },
    computed: {
        dataPokemon() {
            return this.$store.getters.getPokemonById(this.namePokemon);
        },
        prevPokemon() {
            return this.$store.state.pokemons[this.stringIdToInteger(this.dataPokemon.id) - 2];
        },
        nextPokemon() {
            return this.$store.state.pokemons[this.stringIdToInteger(this.dataPokemon.id)];
        }
    },
}
</script>
<style scoped>
    @import '../assets/styles/pokemon_types.css';
    p {
        font-weight: 500;
        text-align: center;
    }
    h3 {
        font-weight: 500;
        font-size: 30px;
    }
    h4 {
        font-weight: 500;
        font-size: 15px;
    }
    .main_profile {
        background: #fff;
        border-radius: 10px;
        max-width: 800px;
        width: 90%;

    }
    .main_profile .wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .main_profile .wrapper .box_pokemon_avatar {
        padding: 15px;
        background: #e4e8f0;
        width: 45%;
        margin: 15px 7px 15px 15px;
    }
    .main_profile .wrapper .box_pokemon_avatar img {
        width: 100%;
    }
    .main_profile .wrapper .details {
        width: 45%;
        margin: 15px 15px 15px 7px;
    }
    .main_profile .wrapper .buttons_routes {  
        width: 100%;
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
    .details .next_evolution .not_found_prev_pokemon .box_img {
        width: 70px;
        margin: 0 auto 14px auto;
    }
    .details .next_evolution .not_found_prev_pokemon .box_img img {
        width: 100%;
    }
    .details .next_evolution .not_found_next_pokemon .box_img {
        width: 70px;
        margin: 0 auto 14px auto;
    }
    .details .next_evolution .not_found_next_pokemon .box_img img {
        width: 100%;
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
</style>