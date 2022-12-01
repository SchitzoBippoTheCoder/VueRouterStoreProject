//import VueRouter from 'vue-router';
import { createRouter, createWebHistory } from "vue-router";    
import Homepage from "../views/Homepage.vue";
import LoginPage from "../views/LoginPage.vue"
import ShoppingArea from "../views/ShoppingArea.vue"

const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: Homepage
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/shopping-area',
        name: 'ShoppingArea',
        component: ShoppingArea
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;