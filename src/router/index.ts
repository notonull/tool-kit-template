import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/chartgpt",
        name: "ChartGPT",
        component: () => import("@/views/chartgpt/index.vue")
    }, {
        path: "/excel",
        name: "Excel",
        component: () => import("@/views/excel/index.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;