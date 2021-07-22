<template>
    <h2>待办事项详情-{{detailData.title}}</h2>
    <List :data="detailData.children" @toggle-finished="toggleFinished" @del="del"></List>
    <AddBtn placeholder="下一步" @add="add"></AddBtn>
    <div class="notice">
        <span class="demonstration">提醒我</span>
        <el-date-picker v-model="detailData.noticeTime" type="datetime" placeholder="选择日期时间">
        </el-date-picker>
    </div>
    <textarea class="remark" type="textarea" :rows="4" v-model="detailData.remark" placeholder="添加备注" />
    <el-button type="primary">保存</el-button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, toRef } from 'vue';
import { useRoute } from 'vue-router';
import { TodoListItem } from '/types/data.d.ts';
import { ElDatePicker, ElButton } from 'element-plus';
import List from '@/components/List.vue';
import AddBtn from '@/components/AddBtn.vue';

export default defineComponent({
    name: 'Detail',
    setup() {
        const currentRoute = useRoute();
        // 获取详情数据
        const state = reactive({
            detailData: <TodoListItem>{},
        });
        state.detailData = currentRoute.params;

        // 处理列表事件
        const del = (index: string | number | symbol) => {
            state.detailData.children.splice(index, 1);
        };

        const toggleFinished = (l: TodoListItem) => {
            l.finished = !l.finished;
        };

        const add = (val: string) => {
            let children = toRef(state.detailData, 'children');

            if (!children.value) {
                children.value = [{ id: 0, type: 'extra', title: val }];
            } else {
                children.value.push({
                    id: children.value[children.value.length - 1].id + 1,
                    type: 'extra',
                    title: val,
                });
            }
        };
        return {
            ...toRefs(state),
            del,
            toggleFinished,
            add,
        };
    },
    components: {
        ElDatePicker,
        ElButton,
        List,
        AddBtn,
    },
});
</script>

<style scoped lang="scss">
$bg: #f8f8f8;
h2 {
    text-align: left;
    color: #2d8cf0;
}
.notice {
    margin-bottom: 10px;
    padding: 20px;
    background: $bg;
    text-align: left;
    .demonstration {
        margin-right: 20px;
    }
}
.remark {
    display: inline-block;
    box-sizing: border-box;
    margin-bottom: 20px;
    padding: 20px;
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: $bg;
    resize: none;
    &:focus-visible {
        outline: none;
    }
}
</style>
