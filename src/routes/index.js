import VueRouter from 'vue-router';
import { getAppStore } from '../lib/appStore'
import Login from "../pages/login";
import HappyBirthday from "../pages/happy-birthday";
import Step1 from "../pages/step-1";
import Step2 from "../pages/step-2";
import TheEnd from "../pages/the-end";

const routes = [
    {
        path: '/login',
        component: Login,
        meta: {
            pathStore: 'login',
            nextStep: '/'
        }
    },
    {
        path: '/',
        component: HappyBirthday,
        meta: {
            requiresAuth: true,
            pathStore: 'happyBirthday',
            nextStep: '/step-1'
        }
    },
    {
        path: '/step-1',
        component: Step1,
        meta: {
            requiresAuth: true,
            pathStore: 'step1',
            nextStep: '/step-2'
        }
    },
    {
        path: '/step-2',
        component: Step2,
        meta: {
            requiresAuth: true,
            pathStore: 'step2',
            nextStep: '/the-end'
        }
    },
    {
        path: '/the-end',
        component: TheEnd,
        meta: {
            requiresAuth: true,
            pathStore: 'theEnd'
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    const appStore = getAppStore();
    console.log(appStore)
    if(appStore[to.meta.pathStore]) {
        next({
            path: to.meta.nextStep
        })
    }
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!appStore.login) {
            next({
                path: '/login'
            })
        }
        else next();
    }
    else next()
})

export default router;