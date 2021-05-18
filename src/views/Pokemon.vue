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
        height: 100vh;
        background-color: #ff304f;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>