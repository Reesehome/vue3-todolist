import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/todo'
    },
    {
        path: '/todo',
        name: 'Todo',
        component: () => import("@/views/TodoList.vue"),
    },
    {
        path: '/detail',
        name: 'Detail',
        component: () => import("@/views/TodoDetail.vue")
    },
    {
        path: '/newFeature',
        name: 'NewFeature',
        component: () => import("@/demo/Index.vue"),
    }

]

export default createRouter({
    history: createWebHistory(),
    routes
})

