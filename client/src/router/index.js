import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Myhome.vue";



const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Shortener/Login",
        name: "Login",
        component: () => import("@/views/ShortenerLogin.vue"),
    },
    {
        path: "/Shortener/Register",
        name: "Register",
        component: () => import("@/views/ShortenerRegister.vue"),
    },
    
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/UserName",
        name: "changeName",
        component: () => import("@/views/UserName.vue"),
    },
    {
        path: "/UserPass",
        name: "changePass",
        component: () => import("@/views/UserPassword.vue"),
    },
    {
        path: "/deleteAccount",
        name: "deleteAcc",
        component: () => import("@/views/DeleteAccount.vue"),
    },
    {
        path: "/Shortener/MyLink",
        name: "MyLink",
        component: ()=> import("@/components/MyLink.vue")
    }
];


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});


export default router;