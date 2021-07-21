<template>
    <Component1 @sent-msg="getMsg"></Component1>
    <p>{{msg}}</p>
</template>

<script lang="ts">
import { defineComponent, createApp, ref } from "vue";
const component1 = defineComponent({
    name: 'component1',
    emits: ['sentMsg'],
    created() {
        this.$emit('sentMsg', 'hello, I\'m component-1')
    }
})
// 以下不行
// const app = createApp({});
// const component1 = app.component('Component1', {
//     emits: ['sentMsg'],
//     created() {
//         this.$emit('sentMsg', 'hello, I\'m component-1')
//     }
// })
export default defineComponent({
    name: 'Emit',
    components: {
        'Component1': component1,
    },
    setup() {
        let msg = ref('');
        const getMsg = (val: string) => {
            msg.value = val;
        }
        return {
            msg,
            getMsg
        }
    },
})
</script>

<style>


</style>
