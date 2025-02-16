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
        name: "about",
        path: "/about",
        component: () => import("@/view/about.vue")
    },
    {
        name: "archives",
        path: "/archives",
        component: () => import("@/view/archives.vue")
    },
    {
        name: "article",
        path: "/article/:article",
        component: () => import("@/view/article.vue")
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router
