import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/router/Home'
import YuDing from '@/components/router/YuDing'
import Wodeyuding from '@/components/router/Wodeyuding'
import Yudingshenpi from '@/components/router/Yudingshenpi'
import HysYdgl from '@/components/router/HysYdgl'
import Hysgl from '@/components/router/Hysgl'
import Qvyujianzhu from '@/components/router/Qvyujianzhu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/yuding',
      name: 'YuDing',
      component: YuDing
    }, {
      path: '/wodeyuding',
      name: 'Wodeyuding',
      component: Wodeyuding
    }, {
      path: '/yudingshenpi',
      name: 'Yudingshenpi',
      component: Yudingshenpi
    }, {
      path: '/hysYdgl',
      name: 'HysYdgl',
      component: HysYdgl
    }, {
      path: '/hysgl',
      name: 'Hysgl',
      component: Hysgl
    }, {
      path: '/qvyujianzhu',
      name: 'Qvyujianzhu',
      component: Qvyujianzhu
    }
  ]
})
