import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Main01 from '@/components/Main01'
import About from '@/components/About'
import Work from '@/components/Work'
import WorkDetail from '@/components/WorkDetail'
import Contact from '@/components/Contact'
import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'
import Intro from '@/components/Intro'
import Intro01 from '@/components/Intro01'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/intro01',
      name: 'Intro01',
      component: Intro01
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/main01',
      name: 'Main01',
      component: Main01
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/work/:id',
      name: 'WorkDetail',
      component: WorkDetail
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/test1',
      name: 'Test1',
      component: Test1
    },
    {
      path: '/test2',
      name: 'Test2',
      component: Test2
    }
  ]
})
