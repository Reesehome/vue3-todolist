<template>
    <ul>
        <li v-for="(l, li) in data" :key="li" @click="showDetail(l, li)" class="listItem" :class="{'finished': l.finished}">
            <i class="listCicle" @click.stop="toggleFinished(l, li)"></i>
            <span class="listTitle">{{l.title}}</span>
            <span class="delBtn" @click.stop="del(li)">删除</span>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TodoListItem } from '/types/data.d.ts';

export default defineComponent({
    name: 'List',
    props: {
        data: <TodoListItem>Array,
    },
    emits: ['click', 'toggleFinished', 'del'],
    setup(props, context) {
        const showDetail = (l: TodoListItem, li: string | number | symbol) => {
            context.emit('click', l, li);
        };
        const toggleFinished = (
            l: TodoListItem,
            li: string | number | symbol
        ) => {
            context.emit('toggleFinished', l, li);
        };
        const del = (li: string | number | symbol) => {
            context.emit('del', li);
        };
        return {
            showDetail,
            toggleFinished,
            del,
        };
    },
    components: {},
});
</script>

<style lang="scss" scoped>
ul {
    padding-left: 0;
    max-height: calc(100% - 85px);
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
    margin-left: 20px;
    user-select: none;
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
    transition-duration: 0.2s;
    &:active {
        transform: scale(0.9);
        border-color: #aaa;
        background-color: #aaa;
    }
}
.finished {
    .listTitle {
        color: #c5c8ce;
        text-decoration: line-through;
    }
    .listCicle {
        border-color: #c5c8ce;
        background-color: #c5c8ce;
    }
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
    transition-duration: 0.2s;
    &:hover {
        color: #2c3e50;
    }
}

.listItem:hover {
    .delBtn {
        display: block;
        user-select: none;
        cursor: pointer;
    }
}
</style>
