import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../Home.vue'
import AgencyA from '../AgencyA.vue'
import UnitWarehouse from '../UnitWarehouse.vue'
import Staff from '../Staff.vue'
import Management from '../Management.vue'
import AgencyB from '../AgencyB.vue'
import AgencyC from '../AgencyC.vue'
import Register from '../Register.vue'
import Logout from '../Logout.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Staff',
        name: 'Staff',
        component: Staff
    },
    {
        path: '/Management',
        name: 'Management',
        component: Management,
        children: [
            {name: 'route',path: '/Management',component: resolve => resolve(Management)}, 
            {name: 'route.AgencyA',path: '/AgencyA',component: AgencyA},
            {name: 'route.AgencyB',path: '/AgencyB',component: AgencyB},
            {name: 'route.AgencyC',path: '/AgencyC',component: AgencyC},
        ]
    },
    {
        path: '/AgencyA',
        name: 'AgencyA',
        component: AgencyA
    },
    {
        path: '/UnitWarehouse',
        name: 'UnitWarehouse',
        component: UnitWarehouse ,
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register
    },
    {
        path: '/Logout',
        name: 'Logout',
        component: Logout
    },
]

export const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/','/UnitWarehouse','/Staff','/Register','/Management']
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = localStorage.getItem("user")
    if(authRequired && !loggedIn){
        return next('/')
    }
    next()
    
})