<template>
    <div>
        <slot name="data" :pageNumber="pageNumber" />
        <div class="row_pagination">
            <span v-for="(item, index) in new Array(numberPages)" :key="index">
                <button class="numberPage_pokemon" @click="pageNumber = index + 1">
                    {{ index + 1 }}
                </button>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Pagination',
    data() {
        return {
            perPage: 6,
            pageNumber: 1
        }
    },
    computed: {
        totalPokemons() {
            return this.$store.getters.pokemonsFiltered.length;
        },
        numberPages() {
            return Math.ceil(this.totalPokemons / this.perPage);
        }
    }
}
</script>
<style scoped>
    .numberPage_pokemon {
        margin: 2px;
        padding: 4px;
    }
</style>