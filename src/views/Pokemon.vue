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
        background: grey;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        height: 100%;
        width: 100vw;
    }
</style>