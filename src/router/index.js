import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"

const router = createRouter({
    history: import.meta.env.VITE_ROUTER_HASH === "true"
        ? createWebHashHistory(import.meta.env.VITE_PUBLIC_URL)
        : createWebHistory(import.meta.env.VITE_PUBLIC_URL),
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", component: () => import("@/views/home/Home.vue") }
    ]
})

export default router
