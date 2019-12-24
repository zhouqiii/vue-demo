import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import(/* webpackChunkName: "list" */ './views/List.vue')
        },
        {
          path: 'user',
          name: 'user',
          component: () => import(/* webpackChunkName: "user" */ './views/User.vue')
        },
        {
          path: 'editor',
          name: 'editor',
          component: () => import(/* webpackChunkName: "list" */ './components/Editor.vue')
        },
        {
          path: 'add',
          name: 'add',
          component: () => import(/* webpackChunkName: "add" */ './views/Add.vue')
        }
      ]
    }
    // {
    //   path: 'add',
    //   name: 'add',
    //   component: () => import(/* webpackChunkName: "add" */ './views/Add.vue')
    // },
    // {
    //   path: '/editor',
    //   name: 'editor',
    //   component: () => import(/* webpackChunkName: "list" */ './components/Editor.vue')
    // }
  ]
})
