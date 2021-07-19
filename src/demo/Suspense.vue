<template>
    <suspense>
        <template #default>
            <!-- <p>结果是{{val}}</p> -->
            <suspense-cmpt></suspense-cmpt>
        </template>
        <template #fallback>
            <p>计算中</p>
        </template>
    </suspense>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SuspenseCmpt from "./Suspense-cmpt.vue"
export default defineComponent({
    name: 'Suspense',
    setup(){
        let val = 0
        let res = new Promise((resolve)=>{
            setTimeout(()=>{
                val = 5;
                resolve({ result: "OK" });
            }, 3000)
        })
        return { res, val }
    },
    components: {
        SuspenseCmpt
    }
})
</script>

<style>


</style>
