<template>
    <!-- <NewFeatures></NewFeatures> -->
    <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import NewFeatures from '@/demo/Index.vue';

export default defineComponent({
    name: 'App',
    components: {
        NewFeatures,
    },
});
</script>

<style>
    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
    }
    #app {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 50px 0;
        width: 500px;
        height: 100%;
        color: #2c3e50;

    }
</style>
