import VueRouter from 'vue-router';
import { getAppStore } from '../lib/appStore'
import Login from "../pages/login";
import HappyBirthday from "../pages/happy-birthday";

import Step1 from "../pages/forest/step-1";
import Step2 from "../pages/hamo/step-2";
import Step3 from "../pages/hamo/step-3";
import Step4 from "../pages/mutnaya/step-4";
import Step5 from "../pages/mutnaya/step-5";
import Step6 from "../pages/egg/step-6";
import Step7 from "../pages/egg/step-7";
import Step8 from "../pages/egg/step-8";
import Step9 from "../pages/tverskaya/step-9";
import Step10 from "../pages/tverskaya/step-10";
import Step11 from "../pages/singboard/step-11";
import Step12 from "../pages/singboard/step-12";
import Step13 from "../pages/bulgakov/step-13";
import Step14 from "../pages/bulgakov/step-14";
import Step15 from "../pages/city/step-15";
import Step16 from "../pages/city/step-16";
import Step17 from "../pages/metro/step-17";
import Step18 from "../pages/home/step-18";

import TheEnd from "../pages/the-end";
import NotFoundComponent from '../pages/NotFoundComponent'

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
        path: '/happy-birthday',
        component: HappyBirthday,
        meta: {
            requiresAuth: true,
            pathStore: 'happyBirthday',
            nextStep: '/step-1'
        },
        // beforeEnter: (to, from, next) => {
        //     if (sessionStorage.getItem('redirect') !== null) {
        //         const redirect = sessionStorage.redirect
        //         delete sessionStorage.redirect
        //         next(redirect)
        //     } else {
        //         next()
        //     }
        // }
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
        path: '/step-8',
        component: Step8,
        meta: {
            requiresAuth: true,
            pathStore: 'step8',
            nextStep: '/step-9'
        }
    },
    {
        path: '/step-9',
        component: Step9,
        meta: {
            requiresAuth: true,
            pathStore: 'step9',
            nextStep: '/step-10'
        }
    },
    {
        path: '/step-10',
        component: Step10,
        meta: {
            requiresAuth: true,
            pathStore: 'step10',
            nextStep: '/step-11'
        }
    },
    {
        path: '/step-11',
        component: Step11,
        meta: {
            requiresAuth: true,
            pathStore: 'step11',
            nextStep: '/step-12'
        }
    },
    {
        path: '/step-12',
        component: Step12,
        meta: {
            requiresAuth: true,
            pathStore: 'step12',
            nextStep: '/step-13'
        }
    },
    {
        path: '/step-13',
        component: Step13,
        meta: {
            requiresAuth: true,
            pathStore: 'step13',
            nextStep: '/step-14'
        }
    },
    {
        path: '/step-14',
        component: Step14,
        meta: {
            requiresAuth: true,
            pathStore: 'step14',
            nextStep: '/step-15'
        }
    },
    {
        path: '/step-15',
        component: Step15,
        meta: {
            requiresAuth: true,
            pathStore: 'step15',
            nextStep: '/step-16'
        }
    },
    {
        path: '/step-16',
        component: Step16,
        meta: {
            requiresAuth: true,
            pathStore: 'step16',
            nextStep: '/step-17'
        }
    },
    {
        path: '/step-17',
        component: Step17,
        meta: {
            requiresAuth: true,
            pathStore: 'step17',
            nextStep: '/step-18'
        }
    },
    {
        path: '/step-18',
        component: Step18,
        meta: {
            requiresAuth: true,
            pathStore: 'step18',
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
    { path: '*', component: NotFoundComponent }
]

const router = new VueRouter({
    // mode: 'history',
    base: 'https://mrkozlovskiy.github.io/31birthday/#',
    routes,
    // history: true,
})

router.beforeEach((to, from, next) => {
    const appStore = getAppStore();
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