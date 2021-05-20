<template>
    <div class="container-search">
        <div class="box_img">
            <img src="../assets/images/logoPokemon.png" alt="">
        </div>
        <div class="input_search">
            <input type="search" placeholder="Type to search" v-model="filter">
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchPokemon',
    computed: {
        filter: {
            get() {
                return this.$store.state.searchPokemonByName;
            },
            set(val) {
                this.$store.dispatch('getSearchPokemons', val);
            }
        }
    }
}
</script>

<style scoped>
    .container-search {
        background-color: #bdbdbd;
        padding: 7px;
        margin: 0 15px 30px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
    .box_img {
        width: 90px;
    }
    .box_img img {
        width: 100%;
    }
    .input_search {
        width: 300px;
        justify-self: center;

    }
    .input_search input[type="search"] {
        outline: none;
        width: 100%;
        padding: 10px 20px;
        border-radius: 3px;
        font-size: 14px;
    }
</style>
