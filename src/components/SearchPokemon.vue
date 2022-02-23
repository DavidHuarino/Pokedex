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
    data() {
        return {
        }
    },
    computed: {
        filter: {
            get() {
                return this.$store.state.searchPokemonByName;
            },
            set(val) {
                this.$store.dispatch('getSearchPokemons', val);
                this.$router.push({ path: this.$route.path, query: {
                    ...this.$route.query,
                    orgName: val,
                    pageNumber: 1
                } });
            }
        },
        searchPokemon() {
            return this.$store.getters.getPokemonSearchPokemon;
        }
    },
}
</script>

<style scoped>
    .container-search {
        background-color: #bdbdbd;
        padding: 7px;
        margin: 0 auto 30px auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
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
        border: 0;
    }
    @media screen and (max-width: 768px) {
        .box_img {
            width: 120px;
        }
        .container-search {
            flex-direction: column;
        }
        .input_search {
            width: 90%;
        }
    }
</style>
