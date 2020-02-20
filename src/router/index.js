import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
{
	path: '/home',
	name: 'Home',
	component: Home
},
{
	path: '/',
	redirect:"/home"
},
{
	path: '/upcoming',
	name: 'upcoming',
	component: ()=> import ("@/views/UpComing")
},
{
	path: '/nowplaying',
	name: 'nowplaying',
	component: ()=> import ("@/views/NowPlaying")
}
]

const router = new VueRouter({
	routes,
	linkActiveClass:"active"
})

export default router
