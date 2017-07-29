import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/Main.vue'
import Flavor from '@/pages/flavor/flavor'
import Restaurant from '@/pages/restaurant/restaurant'
import Tencent from '@/pages/restaurant/tencent'
import Detail from '@/pages/detail/detail'
import Comment from '@/pages/comment/comment'

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
        { path: 'detail', component: Detail },
        { path: 'comment', component: Comment }
      ]
    },
    {
      path: '/restaurant',
      name: 'restaurant',
      component: Restaurant,
      children: [
        { path: 'tencent', component: Tencent }
      ]
    }
  ]
})
