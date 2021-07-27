<template>
    <h2>待办事项</h2>
    <List :data="state.list" @click="showDetail" @toggle-finished="toggleFinished" @del="del"></List>
    <AddBtn placeholder="添加任务" @add="add"></AddBtn>
</template>
<script lang='ts'>
import { defineComponent, reactive } from 'vue';
import { TodoListItem } from '#/data';
import { useRouter, RouteParamsRaw } from 'vue-router';
import List from '@/components/List.vue';
import AddBtn from '@/components/AddBtn.vue';

export default defineComponent({
    name: 'TodoList',
    setup: () => {
        const router = useRouter();
        let state = reactive({
            list: <TodoListItem[]>[
                {
                    id: 1,
                    type: 'personal',
                    title: '看牙齿',
                },
                {
                    id: 2,
                    type: 'personal',
                    title: '回家',
                },
                {
                    id: 3,
                    type: 'work',
                    title: '写文档',
                },
            ],
        });
        const add = (val: string) => {
            if (!state.list) {
                state.list = [{ id: 0, type: 'extra', title: val }];
            } else {
                let listItem = state.list[state.list.length - 1];

                state.list.push({
                    id: listItem.id ? listItem.id + 1 : 1,
                    type: 'extra',
                    title: val,
                });
            }
        };
        const del = (index: number) => {
            state.list.splice(index, 1);
        };
        const showDetail = (l: TodoListItem) => {
            router.push({ name: 'Detail', params: <RouteParamsRaw>l });
        };
        const toggleFinished = (l: TodoListItem) => {
            l.finished = !l.finished;
        };
        return {
            state,
            add,
            del,
            showDetail,
            toggleFinished,
        };
    },
    methods: {
        // 方法放在methods里和setup的区别：setup执行时，组件实例还未构建，并且refs需要解锁（.value),放在setup中代码更符合组合式api设计；methods执行时，组件实例已构建完成，可直接用this, refs自动解锁
        // add() {
        //     this.state.list.push({
        //         type: 'extra',
        //         title: this.newTask,
        //     });
        //     this.newTask = '';
        // },
    },
    components: {
        List,
        AddBtn
    }
});
</script>
<style scoped lang="scss">
h2 {
    text-align: left;
    color: #2d8cf0;
}


</style>