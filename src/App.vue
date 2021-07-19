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
#app {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
