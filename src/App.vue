<template>
    <!-- <NewFeatures></NewFeatures> -->
    <TodoList></TodoList>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import NewFeatures from '@/demo/Index.vue';
import TodoList from '@/views/TodoList.vue';

export default defineComponent({
    name: 'App',
    components: {
        NewFeatures,
        TodoList
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
