import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
import Work from '@/components/Work'
import WorkDetail from '@/components/WorkDetail'
import Contact from '@/components/Contact'
import About01 from '@/components/About01'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
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
      path: '/about01',
      name: 'About01',
      component: About01
    }
  ]
})
