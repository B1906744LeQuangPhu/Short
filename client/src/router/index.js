import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Myhome.vue";
import Login from "@/components/Form.vue";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;