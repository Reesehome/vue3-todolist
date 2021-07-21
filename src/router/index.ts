import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/todo'
    },
    {
        path: '/todo',
        component: () => import("@/views/TodoList.vue"),
    },
    {
        path: '/detail',
        component: () => import("@/views/TodoDetail.vue")
    },
    {
        path: '/newFeature',
        component: () => import("@/demo/Index.vue"),
    }

]

export default createRouter({
    history: createWebHistory(),
    routes
})

