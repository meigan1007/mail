import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const About = () => import('../views/about/About')
const Shop = () => import('../views/shop/Shop')
const User = () => import('../views/user/User')

const originalReplace = VueRouter.prototype.replace
   VueRouter.prototype.replace = function (location) {
   return originalReplace.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

  const routes = [
    {
      path:'',
      redirect: '/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/shop',
      component:Shop
    },
    {
      path:'/user',
      component:User
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  originalReplace
})

export default router
