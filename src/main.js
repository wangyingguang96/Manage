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


Vue.config.productionTip = false
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
