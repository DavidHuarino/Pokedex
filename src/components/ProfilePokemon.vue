<template>
    <div class="main_profile">
        <div class="container_title">
            <h3>{{ dataPokemon.name }}<span> N.º{{ dataPokemon.id }}</span> </h3>
        </div>
        <div class="container_avatar_pokemon">
            <img :src="`https://pokeres.bastionbot.org/images/pokemon/${stringIdToInteger(dataPokemon.id)}.png`" alt="">
        </div>
        <div class="container_details">
            <div class="description_pokemon">
                <p>{{ dataPokemon.description }}</p>
            </div>
            <div class="container_features">
                <div class="features_pokemon">
                    <div class="height">
                        <h4>Height</h4>
                        <p> {{ dataPokemon.height.maximum }} </p>
                    </div>
                    <div class="weight">
                        <h4>Weight</h4>
                        <p> {{ dataPokemon.weight.maximum }} </p>
                    </div>
                </div>
                <div class="base_points_pokemon">
                    <div class="container_grid_base_points">
                        <div>
                            <h4 class="color_base_point">Base Stamina</h4>
                            <p v-if="dataPokemon.base_stamina">{{dataPokemon.base_stamina}}</p>
                            <p v-else>not found</p>
                        </div>
                        <div>
                            <h4 class="color_base_point" >Base Attack</h4>
                            <p v-if="dataPokemon.base_attack">{{dataPokemon.base_attack}}</p>
                            <p v-else>not found</p>
                        </div>
                        <div>
                            <h4  class="color_base_point">Base Defense</h4>
                            <p v-if="dataPokemon.base_defense">{{dataPokemon.base_defense}}</p>
                            <p v-else>not found</p> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="container_type_weakness_attack">
                <div class="container_types_weaknesses">
                    <div class="types_pokemon">
                        <h4> Types </h4>
                        <div class="container_grid_types">
                            <div class="block_type_pokemon" v-for="(type, index) in dataPokemon.types" :key="index" :class="type.toLowerCase()">
                                <p class="color_type_pokemon"> {{ type }} </p>
                            </div>
                        </div>
                    </div>
                    <div class="weaknesses_pokemon">
                        <h4> Weaknesses </h4>
                        <div class="container_grid_weaknesses">
                            <div class="block_weakness_pokemon" v-for="(weakness, index) in dataPokemon.weaknesses" :key="index" :class="weakness.toLowerCase()">
                                <p class="color_weakness_pokemon"> {{ weakness }} </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container_attack">
                    <h4>Special attacks</h4>
                    <div class="container_grid_attacks">
                        <table>
                            <tr v-for="(dataAttack, index) in dataPokemon.special_attacks" :key="index">
                                <td>
                                    <p>{{ dataAttack.name }}</p>
                                </td>
                                <td>
                                    <p>{{ dataAttack.damage }} damage</p>
                                </td>
                                <td class="color_attack">
                                    <p :class="dataAttack.type.toLowerCase()">{{ dataAttack.type }}</p>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="prev_next_evolution">
                <div class="container_evolution">
                    <h4>Prev Evolution</h4>
                    <div class="card_prev_evolution" v-if="dataPokemon.previous_evolution">
                        <div class="box_img">
                            <img :src="`https://pokeres.bastionbot.org/images/pokemon/${stringIdToInteger(dataPokemon.previous_evolution.slice(-1).pop().id)}.png`" alt="">
                        </div>
                        <p class="name_evolution">{{ dataPokemon.previous_evolution.slice(-1).pop().name }}</p>
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
                        <p class="name_evolution">{{ dataPokemon.next_evolution[0].name }}</p>
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
            <button @click.prevent="loadPrevPokemon()" :disabled="!prevPokemon">prev pokemon</button>
            <button @click.prevent="loadHomePokemon()">go pokedex</button>
            <button @click.prevent="loadNextPokemon()" :disabled="!nextPokemon" >next pokemon</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProfilePokemon',
    watch: {
        $route(to) {
            this.namePokemon = to.params.name;
        }
    },
    data() {
        return {
            namePokemon: this.$route.params.name,
        }
    },
    methods: {
        stringIdToInteger(id) {
            return parseInt(id);
        },
        loadPrevPokemon() {
            this.$router.push({
                name: 'Pokemon',
                params: {name: this.prevPokemon.name}
            });
        },
        loadNextPokemon() {
            this.$router.push({
                name: 'Pokemon',
                params: {name: this.nextPokemon.name}
            });
        },
        loadHomePokemon() {
            this.$router.push({
                name: 'Home'
            });
        }
    },
    computed: {
        dataPokemon() {
            return this.$store.getters.getPokemonByName(this.namePokemon);
        },
        prevPokemon() {
            return this.$store.getters.getPokemonById(this.stringIdToInteger(this.dataPokemon.id) - 1);
        },
        nextPokemon() {
            return this.$store.getters.getPokemonById(this.stringIdToInteger(this.dataPokemon.id) + 1);
        }
    },
}
</script>
<style scoped>
    @import '../assets/styles/pokemon_types.css';
    .main_profile {
        background: #fff;
        max-width: 900px;
        width: 90%;
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
        padding: 20px;
        justify-content: space-between;
    }
    .main_profile .container_title {
        font-weight: 500;
        font-size: 20px;
        width: 100%;
        margin-bottom: 5px;
    }
    .main_profile .container_avatar_pokemon {
        width: 24%;
        background: #e4e8f0;
        padding: 5px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        margin-bottom: 7px;

    }
    .main_profile .container_details {
        width: 74%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        margin-bottom: 7px;
    }
    .main_profile .buttons_routes {
        width: 100%;
    }
    .main_profile .container_avatar_pokemon img {
        width: 100%;
    }
    .main_profile .container_details .description_pokemon {
        text-align: left;
        font-weight: 400;
        font-size: 14px;
        width: 100%;
        margin-bottom: 7px;
    }
    .main_profile .container_details .container_features {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 7px;
    }
    .main_profile .container_details .container_type_weakness_attack {
        width: 100%;
        display: flex;
        margin-bottom: 7px;
    }
    .main_profile .container_details .prev_next_evolution {
        display: flex;
        justify-content: space-evenly;
    }
    .main_profile .container_details .prev_next_evolution img {
        width: 50px;
    }
    .main_profile .container_details .prev_next_evolution h4 {
        font-weight: 500;
    }
    .main_profile .container_details .prev_next_evolution p {
        font-size: 14px;
    }
    .main_profile .container_details .container_types_weaknesses {
        width: 33%;
        display: flex;
        flex-direction: column;
    }
    .main_profile .container_details .container_attack {
        width: 66%;
    }
    .main_profile .container_details .container_attack table {
        width: 100%;
        border-collapse: collapse;
        font-weight: 400;
        font-size: 14px;
    }
    .main_profile .container_details .container_attack td {
        padding: 8px;
        border-bottom: 1px solid #ddd;
    }
    .main_profile .container_details .container_attack h4 {
        font-weight: 500;
    }
    .main_profile .container_details .container_attack .color_attack p {
        color: #fff;
        padding: 2px 3px;
    }
    .main_profile .container_details .container_features h4 {
        color: #fff;
        font-weight: 400;
    }
    .main_profile .container_details .container_features p {
        font-size: 15px;
    }
    .main_profile .container_details .features_pokemon {
        width: 24%;
        display: flex;
        justify-content: space-evenly;
        background: #2978b5;
        padding: 5px;
    }
    .main_profile .container_details .container_features .base_points_pokemon {
        width: 74%;
        background: #e84545;
        padding: 5px;
    }
    .main_profile .container_details .base_points_pokemon .container_grid_base_points {
        display: flex;
        justify-content: space-evenly;
    }
    /* types */
    .main_profile .container_details .types_pokemon {
        width: 100%;
        margin-bottom: 7px;
    }
    .main_profile .container_details .types_pokemon h4 {
        font-weight: 500;
        text-align: left;
    }
    .main_profile .types_pokemon .container_grid_types {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        color: #fff;
        margin-top: 4px;
    }
    .main_profile .types_pokemon .container_grid_types .block_type_pokemon {
        padding: 3px;
        margin: 0 5px 5px 0;
    }
    .main_profile .types_pokemon .container_grid_types .block_type_pokemon .color_type_pokemon {
        font-size: 14px;
    }
    /* weakness */ 
    .main_profile .container_details .weaknesses_pokemon h4 {
        font-weight: 500;
        text-align: left;
    }

    .main_profile .weaknesses_pokemon .container_grid_weaknesses {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        color: #fff;
        margin-top: 4px;
    }
    .main_profile .container_grid_attacks {
        margin-top: 4px;
    }
    .main_profile .weaknesses_pokemon .container_grid_weaknesses .block_weakness_pokemon {
        padding: 3px;
        margin: 0 5px 5px 0;
    }
    .main_profile .weaknesses_pokemon .container_grid_weaknesses .block_weakness_pokemon .color_weakness_pokemon {
        font-size: 14px;
    }
    .main_profile .buttons_routes button {
        padding: 6px;
        margin: 5px;
        font-weight: 500;
        font-size: 14px;
        border: 2px solid transparent;
        cursor: pointer;
        background: #2978b5;
        color: #fff;
        border-radius: 3px;
    }
    .main_profile .buttons_routes button:hover {
        background: white;
        color: #2978b5;
        border: 2px solid #2978b5;
    }

    /*  media queries */
    @media screen and (max-width: 768px) {
        .main_profile .container_details .container_features {
            flex-direction: column;
        }
        .main_profile .container_details .features_pokemon {
            width: 100%;
            margin-bottom: 7px;
        }
        .main_profile .container_details .container_features .base_points_pokemon {
            width: 100%;
        }
        .main_profile .container_details .container_type_weakness_attack {
            flex-direction: column;
        }
        .main_profile .container_details .container_attack {
            order: -1;
            width: 100%;
        }
        .main_profile .container_details .container_types_weaknesses {
            flex-direction: column;
            width: 100%;
        }
        .main_profile .container_details .types_pokemon {
            width: 100%;
        }
        .main_profile .container_details .weaknesses_pokemon {
            width: 100%;
        }
        .main_profile .types_pokemon .container_grid_types {
            grid-template-columns: repeat(6, 1fr);
        }
        .main_profile .weaknesses_pokemon .container_grid_weaknesses {
            grid-template-columns: repeat(6, 1fr);
        }
    }
    @media screen and (max-width: 510px) {
        .main_profile {
            flex-direction: column;
            margin: 50px;
        }
        .main_profile .container_avatar_pokemon {
            width: 60%;
            margin: 0px auto 7px auto;
        }
        .main_profile .container_details {
            width: 100%;
        }
        .main_profile .buttons_routes {
            display: flex;
            justify-content: space-between;
        }
        .main_profile .buttons_routes button {
            font-size: 13px;
        }
    }
</style>