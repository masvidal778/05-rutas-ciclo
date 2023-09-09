import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout.vue'),
        children: [
            {
                path: 'home', //'' path per defecte
                name: 'pokemon-home',
                component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage.vue')
            },
            {
                path: 'about',
                name: 'pokemon-about',
                component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage.vue')
            },
            {
                path: 'pokemonid/:id',
                name: 'pokemon-id',
                component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage.vue'),
                props: (route) => {
                    const id = Number(route.params.id)
                    return isNaN(id) ? {id: 1} : {id}
                }
            },
            {
                path: '',
                redirect: { name: 'pokemon-about' }
            }
        ]
    },
    {
        path: '/dbz',
        name: 'dbz',
        component: () => import(/* webpackChunkName: "DragonBallLayout" */ '@/modules/dbz/layouts/DragonBallLayout.vue'),
        children: [
            {
                path: 'characters', //'' path per defecte
                name: 'dbz-characters',
                component: () => import(/* webpackChunkName: "Characters" */ '@/modules/dbz/pages/Characters.vue')
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import(/* webpackChunkName: "AboutDBZ" */ '@/modules/dbz/pages/About.vue')
            },
            {
                path: '',
                redirect: { name: 'dbz-characters' }
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

/*
// Guard Global - Síncrono
router.beforeEach((to, from, next) => {
    //console.log(to, from, next)
    const random = Math.random() * 100

    if(random > 50){
        console.log('autenticat')
        next()
    }else{
        console.log(random, 'bloquejat pel beforeEach Guard')
        next({ name: 'pokemon-home' })
    }
})

 */

// Guard Global - Asíncrono
const canAccess = () => {
    return new Promise( resolve => {
        const random = Math.random() * 100

        if(random > 50){
            console.log('autenticat - canAccess')
            resolve(true)
        }else{
            console.log(random, 'bloquejat pel beforeEach Guard - canAccess')
            resolve(false)
        }
    } )
}

router.beforeEach(async (to, from, next) => {

    const authorized = await canAccess()

    authorized
        ? next()
        : next({ name: 'pokemon-home' })

})

export default router