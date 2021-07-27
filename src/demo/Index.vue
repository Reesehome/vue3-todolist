<template>
    <!-- <Popup></Popup> -->
    <!-- <LearnSuspense></LearnSuspense> -->
    <!-- <Watch></Watch> -->
    <!-- <WatchEffect></WatchEffect> -->
    <!-- <Setup></Setup> -->
    <!-- <Card></Card> -->
    <!-- <Model></Model> -->
    <Emit></Emit>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Popup from '@/demo/Popup.vue';
import LearnSuspense from '@/demo/Suspense.vue';
import Watch from '@/demo/Watch.vue';
import WatchEffect from '@/demo/WatchEffect.vue';
import Setup from '@/demo/Setup.vue';
import Card from '@/demo/card';
import Model from '@/demo/Model.vue';
import Emit from '@/demo/Emit.vue';

export default defineComponent({
    name: 'NewFeatures',
    components: {
        Popup,
        LearnSuspense,
        Watch,
        WatchEffect,
        Setup,
        Card,
        Model,
        Emit
    },

});
</script>

<style>
#app {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
