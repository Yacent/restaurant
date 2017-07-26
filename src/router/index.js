import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/Main.vue'
import Flavor from '@/pages/flavor/flavor'
import My from '@/pages/my/my'
import Mypoint from '@/pages/mypoint/mypoint'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/main/flavor'},
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: [
        { path: 'flavor', component: Flavor },
        { path: 'my', component: My },
        { path: 'mypoint', component: Mypoint }
      ]
    }
  ]
})
