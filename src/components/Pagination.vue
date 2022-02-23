<template>
    <div>
        <slot name="data" :pageNumber="pageNumber" />
        <div v-if="pokemonSize > 0" class="row_pagination">
            <button class="direction_left_button" @click="changePageNumber(pageNumber - 1)" :disabled="pageNumber <= 1">
                Previous
            </button>
            <span v-for="(item, index) in arrayPage" :key="index">
                <button v-if="item !== '...'" class="numberPage_pokemon" @click="changePageNumber(item)" :class="{ 'active_button' : pageNumber === item }" >
                    {{ item }}
                </button>
                <button v-else class="numberPage_pokemon">
                    {{ item }}
                </button>
            </span>
            <button class="direction_right_button" @click="changePageNumber(pageNumber + 1)" :class="{ 'direction_right' : pageNumber === numberPages }" :disabled="pageNumber >= numberPages">
                Next
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Pagination',
    props: {
        pokemonSize: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            perPage: 6,
            pageNumber: null,
            paginationSize: 5,
        }
    },
    watch: {
        $route(to) {
            this.pageNumber = Number(to.query.pageNumber);
            console.log("wadafa", to.query.pageNumber);
        }
    },
    mounted() {
        console.log(this.$route.query, "aqui home");
        this.pageNumber = Number(this.$route.query.pageNumber) || 1;
    },
    methods: {
        changePageNumber(newPageNumber) {
            this.pageNumber = newPageNumber;
            this.$router.push({ path: this.$route.path, query: {
                ...this.$route.query,
                pageNumber: newPageNumber,
            } });
        }
    },
    computed: {
        arrayPage() {
            let [left, right] = [null, null];
            let [leftArray, rightArray] = [[], []];
            if (this.pageNumber - 1 > 0) { left = this.pageNumber - 1; }
            if (this.pageNumber + 1 <= this.numberPages) { right = this.pageNumber + 1; }
            if ( this.pageNumber - 1 <= 3) {
                leftArray =  Array.from({ length: this.pageNumber - 1 }, (_, i) => i + 1);
            } else {
                leftArray = [1, '...', left];
            }
            if (this.numberPages - this.pageNumber <= 3) {
                const range = (start, end) => new Array(end - start + 1).fill(undefined).map((_, i) => i + start);
                if (right) { rightArray = range(right, this.numberPages); }
            } else {
                rightArray = [right, '...', this.numberPages];
            }
            if (!left && this.numberPages > 4) { rightArray.splice(1, 0, right + 1); }
            if (!right && this.numberPages > 4) { leftArray.splice(leftArray.length - 1, 0, left - 1); }
            return [...leftArray, this.pageNumber, ...rightArray];
        },
        totalPokemons() {
            return this.$store.getters.pokemonsFiltered.length;
        },
        numberPages() {
            return Math.ceil(this.totalPokemons / this.perPage);
        },
        paginationPokemon() {
            return Array.from({ length: this.numberPages }, (_, i) => i + 1);
        },
    }
}
</script>
<style scoped>
    .direction_right {
        cursor: no-drop;
        background-color: crimson;
    }
    .direction_left_button {
        padding: 4px;
        height: 32px;
        border: none;
        border: 1px solid gray;
        background-color: white;
        cursor: pointer;
        color: #2196f3;
        font-size: 14px;
        font-weight: 400;
        border-top-left-radius: 10%;
        border-bottom-left-radius: 10%;
    }
    .row_pagination  {
        margin-bottom: 30px;
        margin-top: 20px;
    }
    .numberPage_pokemon {
        padding: 4px;
        width: 32px;
        height: 32px;
        cursor: pointer;
        text-decoration: none;
        background-color: white;
        font-size: 14px;
        border: none;
        border: 1px solid gray;
        color: #2196f3;
    }
    .active_button {
        background: #2196f3;
        color: white;
        border: 1px solid #2196f3;
    }
    .numberPage_pokemon:nth-child(n + 1) {
        margin-left: -1px;
    }
    .direction_right_button {
        padding: 4px;
        height: 32px;
        border: none;
        border-bottom: 1px solid gray;
        border-top: 1px solid gray;
        border-right: 1px solid gray;
        background-color: white;
        cursor: pointer;
        color: #2196f3;
        font-size: 14px;
        font-weight: 400;
        border-top-right-radius: 10%;
        border-bottom-right-radius: 10%;
    }
    .direction_buttons:nth-child(1) {
        border-right: 0;
    }
</style>