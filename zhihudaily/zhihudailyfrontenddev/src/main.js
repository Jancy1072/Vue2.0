// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Root from './Root.vue'
import {router} from './routers'
import store from './vuex/store.js'
/* eslint-disable no-new */
Vue.filter("formatDate",function(value) {
	var temp=value.split('')
	temp.splice(4,0,"年")
	temp.splice(7,0,"月")
	temp.splice(temp.length,0,"日")
	var temp2=temp.toString().replace(/,/g,'');
	return temp2;
});
new Vue({
  el: '#app',
  router,
  template: '<Root/>',
  components: {Root},
  store
})
