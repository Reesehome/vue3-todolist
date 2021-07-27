<template>
    <p>给定基数：{{reactiveData.base}}, 起始值：{{reactiveData.origin}}</p>
    <p>结果为：{{reactiveData.res}}</p>
    <button @click="add">点击相加</button>
</template>

<script lang="ts">
import { reactive, toRefs, watch } from "vue";

export default {
    setup() {
        let reactiveData = reactive({ base: 5, origin: 2, res: 0 })
        const add = () => {
            // 方式一
            // let { base, origin, res } = reactiveData
            // if (!res) {
            //     res = base + origin;
            // }
            // res += origin
            // reactiveData.res = res;

            // 方式二
            let { base, origin, res } = toRefs(reactiveData)
            // console.log(base)
            if (!res.value) {
                res.value = base.value + origin.value;
            }
            res.value += origin.value
        }
        // 直接侦听getter
        // watch(() => reactiveData.res, (val, preVal) => {
        //     console.log(val, preVal)
        // })
        // 直接侦听ref
        // watch(toRef(reactiveData, 'res'), (val, preVal) => {
        //     console.log(val, preVal)
        // })
        // 侦听多个ref
        // watch([toRef(reactiveData, 'res'), toRef(reactiveData, 'base')], ([res, base], [preRes, preBase]) => {
        //     console.log([res, base], [preRes, preBase])
        // })
        // 监听调试器
        watch(() => reactiveData.res, (val, preVal) => {
            console.log(val, preVal)
        }, {
            onTrack(e) {
                console.log('追踪', e)
            },
            onTrigger(e) {
                console.log('更改时', e)
            }
        })
        return {
            reactiveData,
            add
        }
    },
};
</script>

<style>
</style>
