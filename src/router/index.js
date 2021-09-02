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
  },
  {
    path:'/calendar',
    component:()=>import('@/components/calendar')
  },
  {
    path:'/detail',
    component:()=>import('@/components/detail')
  },
  {
    path:'/classes',
    component:()=>import('@/components/classes')
  },
  {
    path:'/zx_detail',
    component:()=>import('@/components/zx_detail')
  }
]

const router = new VueRouter({
  routes
})

export default router
