// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import $ from 'jquery'
import '@/assets/css/style.css'
import '@/assets/list/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import '@/assets/list/bootstrap-3.3.7-dist/js/bootstrap.min.js'
import '@/assets/list/font-awesome-4.7.0/css/font-awesome.min.css'
import Vuex from "vuex"


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store: new Vuex.Store({
    state: {
      addhy: false,
      delehy: false,
      xiugai: false,
      hyimg: false,
      asideColor:"",
    },
    mutations: {
      addClick(state, payload) {
        state.addhy = payload;
      },
      delClick(state, payload) {
        state.delehy = payload
      },
      xiugaiClick(state, payload) {
        state.xiugai = payload
      },
      hyimgClick(state, payload) {
        state.hyimg = payload
      },
      asdiColor(state,payload){
        alert(payload)
        state.asideColor = payload
      }
    }
  })
})
