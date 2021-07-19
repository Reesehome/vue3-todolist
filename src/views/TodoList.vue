<template>
    <!-- <header>{{modelValue}}</header> -->
    <ul>
        <li v-for="(l, li) in state.list" :key="li" @click="toggleComplated(l)">{{l.title}}</li>
        <button @click="add">增加一条</button>
    </ul>
</template>
<script lang='ts'>
import { defineComponent, reactive } from 'vue';
import { TodoListItem } from '/types/data.d.ts';
export default defineComponent({
    name: 'TodoList',
    /* v2.0
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: String,
    },
    */
    /* v2.2
    model: {
        prop: 'title',
        event: 'change'
    },
    props: {
        title: String,
    },
    */
    /* v3.0 */
    props: {
        // modelValue: String,
        title: String
    },
    methods: {},
    setup: () => {
        let state = reactive({
            list: [
                {
                    type: 'personal',
                    title: '看牙齿',
                },
                {
                    type: 'personal',
                    title: '回家',
                },
                {
                    type: 'work',
                    title: '写文档',
                },
            ],
        });
        const add = () => {
            state.list.push({
                type: 'extra',
                title: '增加的信息',
            });
        };
        const toggleComplated = (l: TodoListItem) => {
            l.finished = !l.finished;
        };
        /* v2.0 || v2.2
        const change = (val) => {
            this.$emit('change', val)
        };
        */
        return {
            state,
            add,
            toggleComplated,
        };

    },

});
</script>
<style>
button {
    border: none;
    margin-top: 50px;
    padding: 20px 50px;
}
ul > li {
    list-style: none;
    line-height: 2;
}
</style>