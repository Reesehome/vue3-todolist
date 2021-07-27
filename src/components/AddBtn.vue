<template>
    <div class="addBtn">
        <i>+</i>
        <input class="newTask" v-model="newTask" :placeholder="placeholder" @keyup.enter="add" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'AddBtn',
    props: {
        placeholder: String
    },
    emits: ['add'],
    setup(props, context) {
        let newTask = ref('');
        const add = () => {
            if(!newTask.value) return;
            context.emit('add', newTask.value);
            newTask.value = '';
        };
        return { newTask, add };
    },
    components: {},
});
</script>

<style lang="scss" scoped>
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
    i {
        display: inline-block;
        width: 22px;
        text-align: center;
        line-height: 22px;
        font-size: 22px;
        font-style: normal;
        user-select: none;
    }
    .newTask {
        display: inline-block;
        margin-left: 20px;
        border: none;
        background-color: #f8f8f8;
        &:focus-visible {
            outline: none;
        }
    }
}
</style>
