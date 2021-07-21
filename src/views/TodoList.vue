<template>
    <h2>待办事项</h2>
    <ul>
        <li v-for="(l, li) in state.list" :key="li" @click="showDetail(l)" class="listItem" :class="{'finished': l.finished}" >
            <i class="listCicle" @click="toggleFinished(l)"></i>
            <span class="listTitle">{{l.title}}</span>
            <span class="delBtn" @click="del(li)">删除</span>
        </li>
    </ul>
    <div class="addBtn">
        <i>+</i>
        <input class="newTask"  v-model="newTask" placeholder="添加任务" @keyup.enter="add"/>
    </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue';
import { TodoListItem } from '/types/data.d.ts';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'TodoList',
    setup: () => {
        const router = useRouter();
        let newTask = ref('');
        let state = reactive({
            list: <TodoListItem>[
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
                title: newTask.value,
            });
            newTask.value = '';
        }
        const del = (index: string | number | symbol)=> {
            state.list.splice(index, 1)
        }
        const showDetail = (l: TodoListItem) => {
            router.push({ path: '/detail' })
        };
        const toggleFinished = (l: TodoListItem) => {
            l.finished = !l.finished;
        }
        return {
            newTask,
            state,
            add,
            del,
            showDetail,
            toggleFinished
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

    }
});
</script>
<style scoped>
    h2 {
        text-align: left;
        color: #2d8cf0;
    }
    ul {
        padding-left: 0;
        height: calc(100% - 85px);
        overflow: auto;
    }
    ul > li {
        background-color: #f8f8f9;
        margin-bottom: 2px;
        padding: 10px;
        border-radius: 5px;
        list-style: none;
        line-height: 2;
        text-align: left;
    }
    .listItem {
        position: relative;
    }
    .listTitle {
        margin-left:  20px;
        user-select: none;
    }
    .finished .listTitle {
        color: #c5c8ce;
        text-decoration: line-through;
    }
    .finished .listCicle{
        background-color: #c5c8ce;

    }
    .listCicle {
        display: inline-block;
        margin-left: 20px;
        width: 20px;
        height: 20px;
        vertical-align: text-top;
        border: 2px solid #808695;
        border-radius: 50%;
        transition-property: transform, border-color, background-color;
        transition-duration: .2s;
    }

    .finished .listCicle{
        border-color: #c5c8ce;
        background-color: #c5c8ce;
    }
    .listCicle:active {
        transform: scale(0.9);
        border-color: #aaa;
        background-color: #aaa;
    }
    .delBtn {
        position: absolute;
        top: 10px;
        right: 0;
        font-size: 14px;
        padding: 0 20px;
        display: none;
        color: #808695;
        transition-property: color;
        transition-duration: .2s;
    }
    .delBtn:hover {
        color: #2c3e50;
    }

    .listItem:hover .delBtn {
        display: block;
        user-select: none;
        cursor: pointer;
    }
    .addBtn {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 10px 30px;
        background-color: #f8f8f8;
        transform: translateY(-10px);
        width: 500px;
        border: none;
        border-radius: 5px;
        text-align: left;
    }
    .addBtn i {
        display: inline-block;
        width: 22px;
        text-align: center;
        line-height: 22px;
        font-size: 22px;
        font-style: normal;
        user-select: none;
    }
    .addBtn .newTask {
        display: inline-block;
        margin-left: 20px;
        border: none;
        background-color: #f8f8f8;
    }
    .addBtn .newTask:focus-visible {
        outline: none;
    }
</style>