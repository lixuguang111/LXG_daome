import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/my',
        name: 'My',
        component:()=>import('@/views/My')
      },
      {
        path: '/index',
        name: 'Index',
        component:()=>import('@/views/Index')
      },
      {
        path: '/class',
        name: 'Class',
        component:()=>import('@/views/Class')
      },
      {
        path: '/books',
        name: 'Books',
        component:()=>import('@/views/Books')
      },
      {
        path: '/zixun',
        name: 'Zixun',
        component:()=>import('@/views/Zixun')
      },
      {
        path:'/',
        redirect:'/index'
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component:()=>import('@/components/Login')
  },
  {
    path:'/set',
    component:()=>import('@/components/set')
  },
  {
    path:'/setPass',
    component:()=>import('@/components/setPass')
  }
]

const router = new VueRouter({
  routes
})

export default router
