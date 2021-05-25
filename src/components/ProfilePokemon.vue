<template>
    <div class="main_profile">
        <!--
        <h3>{{ dataPokemon.name }} <span>N.º{{dataPokemon.id}}</span></h3>
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
                <button @click.prevent="loadPrevPokemon()" :disabled="!prevPokemon">prev pokemon</button>
                <button @click.prevent="loadHomePokemon()">go pokedex</button>
                <button @click.prevent="loadNextPokemon()" :disabled="!nextPokemon" >next pokemon</button>
            </div>
            
        </div>
        -->
        <div class="container_title">
            <h3>{{ dataPokemon.name }}<span> N.º{{ dataPokemon.id }}</span> </h3>
        </div>
        <div class="container_avatar_pokemon">
            <img :src="`https://pokeres.bastionbot.org/images/pokemon/${stringIdToInteger(dataPokemon.id)}.png`" alt="">
        </div>
        <div class="descripcion_pokemon">
            <p>{{ dataPokemon.description }}</p>
        </div>
        <div class="features_pokemon">
            <div class="height">
                <h3>Height</h3>
                <p> {{ dataPokemon.height.maximum }} </p>
            </div>
            <div class="weight">
                <h3>Weight</h3>
                <p> {{ dataPokemon.weight.maximum }} </p>
            </div>
        </div>
        <!--
        <div class="types_pokemon">
            <h3> Types </h3>
            <div class="container_grid_types">
                <div class="block_type_pokemon" v-for="(type, index) in dataPokemon.types" :key="index" :class="type.toLowerCase()">
                    <p class="color_type_pokemon"> {{ type }} </p>
                </div>
            </div>
        </div>
        <div class="weaknesses_pokemon">
            <h3> Weaknesses </h3>
            <div class="container_grid_weaknesses">
                <div class="block_weakness_pokemon" v-for="(weakness, index) in dataPokemon.weaknesses" :key="index" :class="weakness.toLowerCase()">
                    <p class="color_weakness_pokemon"> {{ weakness }} </p>
                </div>
            </div>
        </div>
        <div class="base_points_pokemon">
            <h3>Base Points</h3>
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
        </div>-->
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
        max-width: 800px;
        width: 90%;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: flex-start;
        padding: 20px;

        
    }
    .main_profile .container_title {
        font-weight: 500;
        font-size: 20px;
        width: 100%;
    }
    .main_profile .container_avatar_pokemon {
        width: 25%;
        /*margin: 10px auto;*/
        background: #e4e8f0;
        padding: 5px;
        border-radius: 4px;
    }
    .main_profile .container_avatar_pokemon img {
        width: 100%;
    }
    .main_profile .descripcion_pokemon {
        text-align: left;
        font-weight: 400;
        font-size: 13px;
        width: 75%;
        height: 100%;
    }
    .main_profile .features_pokemon {
        display: flex;
        justify-content: space-evenly;
        background: #2978b5;
        padding: 8px;
        border-radius: 4px;
        width: 50%;
        flex: 1 0 200px;
    }
    .main_profile .types_pokemon .container_grid_types {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 15px;
        row-gap: 7px;
        color: #fff;
    }
    .main_profile .types_pokemon .container_grid_types .block_type_pokemon {
        border-radius: 4px;
        padding: 3px;
    }
    .main_profile .types_pokemon .container_grid_types .block_type_pokemon .color_type_pokemon {
        font-weight: 400;
        font-size: 15px;
    }
    .main_profile .weaknesses_pokemon .container_grid_weaknesses {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 15px;
        row-gap: 7px;
        color: #fff;
    }
    .main_profile .weaknesses_pokemon .container_grid_weaknesses .block_weakness_pokemon {
        border-radius: 4px;
        padding: 3px;
    }
    .main_profile .weaknesses_pokemon .container_grid_weaknesses .block_weakness_pokemon .color_weakness_pokemon {
        font-weight: 400;
        font-size: 15px;
    }
    .main_profile .base_points_pokemon .container_grid_base_points {
        display: flex;
        justify-content: space-evenly;
    }
    /*
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
        display: block;
        width: 100%;
        margin: auto auto;
    }
    .main_profile .wrapper .details {
        width: 45%;
        margin: 15px 15px 15px 7px;
    }
    .main_profile .wrapper .buttons_routes {  
        width: 100%;
        margin-bottom: 15px;
    }
    .main_profile .wrapper .buttons_routes button {
        padding: 7px;
        margin: 5px;
        font-weight: 500;
        font-size: 14px;
        border: 2px solid transparent;
        cursor: pointer;
        background: #2978b5;
        color: #fff;
        border-radius: 3px;
        
    }
    .main_profile .wrapper .buttons_routes button:hover {
        background: white;
        color: #2978b5;
        border: 2px solid #2978b5;
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
    */
</style>