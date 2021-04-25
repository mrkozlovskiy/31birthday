import VueRouter from 'vue-router';
import { getAppStore } from '../lib/appStore'
import Login from "../pages/login";
import HappyBirthday from "../pages/happy-birthday";
import Step1 from "../pages/bulgakov/step-1";
import Step2 from "../pages/bulgakov/step-2";
import Step3 from "../pages/egg/step-1";
import Step4 from "../pages/egg/step-2";
import Step5 from "../pages/egg/step-3";
import Step6 from "../pages/tverskaya/step-1";
import Step7 from "../pages/tverskaya/step-2";
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
            nextStep: '/step-3'
        }
    },
    {
        path: '/step-3',
        component: Step3,
        meta: {
            requiresAuth: true,
            pathStore: 'step3',
            nextStep: '/step-4'
        }
    },
    {
        path: '/step-4',
        component: Step4,
        meta: {
            requiresAuth: true,
            pathStore: 'step4',
            nextStep: '/step-5'
        }
    },
    {
        path: '/step-5',
        component: Step5,
        meta: {
            requiresAuth: true,
            pathStore: 'step5',
            nextStep: '/step-6'
        }
    },
    {
        path: '/step-6',
        component: Step6,
        meta: {
            requiresAuth: true,
            pathStore: 'step6',
            nextStep: '/step-7'
        }
    },
    {
        path: '/step-7',
        component: Step7,
        meta: {
            requiresAuth: true,
            pathStore: 'step7',
            nextStep: '/step-8'
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