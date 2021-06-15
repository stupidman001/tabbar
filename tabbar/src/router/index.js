import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    name:'home',
    path:'/home',
    component: () => import('../views/home/Home')
  },
  {
    name:'category',
    path:'/category',
    component:() => import('../views/category/Category')
  },
  {
    name:'profile',
    path:'/profile',
    component:() => import('../views/profile/Profile')
  },
  {
    name:'shopcart',
    path:'/shopcart',
    component:() => import('../views/shopcart/Shopcart')
  }]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
