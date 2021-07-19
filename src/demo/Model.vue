<template>
    <ModelCmpt v-model:counter="counter" @update:counter="updateCounter"></ModelCmpt>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ModelCmpt from './ModelCmpt.vue';
export default defineComponent({
    data() {
        return {};
    },
    setup() {
		let counter = ref(0);
		return {
			counter
		}
	},
	methods: {
		updateCounter(val: number){
			console.log(val)
			// this.counter = val;
		}
	},
    components: {
		ModelCmpt
	},
});
</script>

<style>
</style>
