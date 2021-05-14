<template>
    <div class="card" v-show="information">
        <div class="box_img">
            <img :src="`https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`" alt="">
        </div>
        <h3> {{ name }} </h3>
    </div>
</template>
<script>
export default {
    name: 'Card',
    data() {
        return {
            information: {}
        }
    },
    props: {
        name: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    async mounted() {
        const resp = await fetch(this.url);
        const data = await resp.json();
        this.information = data;
        console.log(data)
    },
}
</script>
<style>
.card {
    padding: 12px;
    margin: 10px;
    border-radius: 5px;
    background: wheat;
    text-align: center;
    cursor: pointer;
}
.card:hover {
    background: cornflowerblue;
}
h3 {
    font-weight: 700;
}
.card img {
    width: 100%;
    background: tomato;
}
</style>