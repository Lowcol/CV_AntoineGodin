import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import FavoriteView from '@/views/FavoriteView.vue';
import DetailsView from '@/views/DetailsView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },

    {
        path: '/login',
        name: 'login',
        component: LoginView,
    },

    {
        path: '/favoris',
        name: 'favorite',
        component: FavoriteView,
    },

    {
        path: '/details/:id',
        name: 'details',
        component: DetailsView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
