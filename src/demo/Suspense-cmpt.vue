<template>
 <div>
    结果是：6
 </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: 'SuspenseCmpt',
    setup(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve({ result: "OK" });
            }, 3000)
        })
    }
})
</script>

<style>


</style>
