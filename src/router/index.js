import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/Main.vue'
import Flavor from '@/pages/flavor/flavor'
import My from '@/pages/my/my'
import Mypoint from '@/pages/mypoint/mypoint'
import Foodset from '@/pages/foodset/foodset'
import Tasteset from '@/pages/tasteset/tasteset'
import BFoodedit from '@/pages/b_foodedit/foodedit'
import Recommend from '@/pages/recommend/recommend'
import Restaurant from '@/pages/restaurant/restaurant'
import Business from '@/pages/business/business'
import BusinessRest from '@/pages/business/businessRest'

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
        { path: 'recommend', component: Recommend },
        { path: 'my', component: My },
        { path: 'mypoint', component: Mypoint }
      ]
    },
    { path: '/foodset', component: Foodset },
    { path: '/tasteset', component: Tasteset },
    { path: '/foodedit', component: BFoodedit },
    {
      path: '/business',
      name: 'business',
      component: Business,
      children: [
        { path: 'restaurant/:bPos', name: 'businessR', component: BusinessRest }
      ]
    },
    {
      path: '/restaurant/:pos',
      name: 'restaurant',
      component: Restaurant
    }
  ]
})
