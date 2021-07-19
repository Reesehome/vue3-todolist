<template>
    <span @click="$emit('update:counter', counter + 1)">{{counter}}</span>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
    props: {
        counter: {
            type: Number,
            default: 0
        }
    }
})
</script>

<style>
</style>
