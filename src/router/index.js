import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/Main.vue'
import Flavor from '@/pages/flavor/flavor'
import Recommend from '@/pages/recommend/recommend'

import Restaurant from '@/pages/restaurant/restaurant'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/main/flavor' },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: [
        { path: 'flavor', component: Flavor },
        { path: 'recommend', component: Recommend }
      ]
    },
    {
      path: '/restaurant/:pos',
      name: 'restaurant',
      component: Restaurant
    }
  ]
})
