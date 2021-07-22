<template>
    <h2>待办事项详情-{{detailData.title}}</h2>
    <div class="notice">
        <span class="demonstration">提醒我</span>
        <el-date-picker v-model="detailData.noticeTime" type="datetime" placeholder="选择日期时间">
        </el-date-picker>
    </div>
    <textarea class="remark" type="textarea" :rows="4" v-model="detailData.remark" placeholder="添加备注" />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { TodoListItem } from '/types/data.d.ts';
import { ElDatePicker, ElButton } from 'element-plus';

export default defineComponent({
    name: 'Detail',
    setup() {
        const currentRoute = useRoute();
        const state = reactive({
            detailData: <TodoListItem>{},
        });

        state.detailData = currentRoute.params;
        return {
            ...toRefs(state),
        };
    },
    components: {
        ElDatePicker,
        ElButton,
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
