import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import About from '@/components/About'
import Work from '@/components/Work'
import WorkDetail from '@/components/WorkDetail'
import Contact from '@/components/Contact'
import Test1 from '@/components/Test1'
import About01 from '@/components/About01'
import Intro from '@/components/Intro'
import Work01 from '@/components/Work01'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main
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
      path: '/work_detail',
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
      path: '/about01',
      name: 'About01',
      component: About01
    },
    {
      path: '/intro',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/work01',
      name: 'Work01',
      component: Work01
    }
  ]
})
