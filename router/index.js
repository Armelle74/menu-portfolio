import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Portfolio from '@/components/views/portfolio.vue'
import Skills from '@/components/views/skills.vue'
import Experience from '@/components/views/experience.vue'
import Contact from '@/components/views/contact.vue'

Vue.use(Router)
/* eslint-disable eol-last */
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router