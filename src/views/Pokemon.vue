<template>
    <div class="container_profile">
        <ProfilePokemon/>
    </div>
</template>
<script>
import ProfilePokemon from '@/components/ProfilePokemon.vue';
export default {
    name: 'Pokemon',
    components: {
        ProfilePokemon
    }
}
</script>
<style>
    .container_profile {
        background: rebeccapurple;
        display: flex;
        align-items: center;
        justify-content: center;
        /*min-height: 100vh;*/
        height: 100vh;
        width: 100vw;
    }
</style>