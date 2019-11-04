import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import NotFound from '@/components/NotFound'
import ListExample from '@/components/ListExample'
import ListPeople from '@/components/ListPeople'
Vue.use(Router)
export const router = new Router({
 mode: 'history',
 routes: [
   {
     path: '/',
     name: 'main',
     component: Main
   },
   {
     path: '/login',
     name: 'login',
     component: Login
   },
   {
    path: '/listexample',
    name: 'listexample',
    component: ListExample
   },   
   {
    path: '/listepeople',
    name: 'listpeople',
    component: ListPeople
   },
   {
     path: '/404',
     name: 'notfound',
     component: NotFound
   },
   {
     path: '*',
     redirect: '/404'
   }
 ]
})
