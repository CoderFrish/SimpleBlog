import {createRouter, createWebHistory} from "vue-router";
import type {RouteRecordRaw} from 'vue-router'
import main from "@/view/main.vue"

const routes: RouteRecordRaw[] = [
    {
        name: "main",
        path: "/",
        component: main
    },
    {
        name: "login",
        path: "/login",
        component: () => import("@/view/login.vue")
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router
