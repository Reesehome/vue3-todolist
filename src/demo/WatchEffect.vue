<template>
    <p>给定基数：{{reactiveData.base}}, 起始值：{{reactiveData.origin}}</p>
    <p>结果为：{{reactiveData.res}}</p>
    <button @click="add">点击相加</button>
    <p>点击次数：{{clickTimes}}</p>
</template>

<script lang="ts">
import { reactive, ref, toRefs, watchEffect } from "vue";

export default {
    setup() {
        let reactiveData = reactive({ base: 5, origin: 2, res: 0 });
        let clickTimes = ref(0);
        const add = () => {
            let { base, origin, res } = toRefs(reactiveData);
            if(!res.value) {
                res.value = base.value + origin.value;
            }
            res.value += 2;
            clickTimes.value ++;
        }
        // watchEffect 与 watch 区别： watchEffect类似于computed， 作用于马上需要执行的函数
        // watchEffect(() => {
        //     let val = reactiveData.res
        //     if (val) {
        //         clickTimes.value = (val - 7) / 2;
        //     }
        // })
        watchEffect(() => {
            let val = reactiveData.res
        }, {
            onTrack({target}) {
                console.log(target)
            }
        })
        return {
            reactiveData,
            clickTimes,
            add
        }
    }
};
</script>

<style>
</style>
