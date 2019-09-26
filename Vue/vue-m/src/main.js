//导入vue组件
import Vue from "vue";
// import Vue from '../node_modules/vue/dist/vue'
import VueRouter from "vue-router";
Vue.use(VueRouter);

import { Header } from "mint-ui";
Vue.component(Header.name, Header);

import "../lib/mui/css/mui.css";
import "../lib/mui/css/icons-extra.css";

//导入App组件
import App from "./App.vue";

import router from "./router.js";

//创建组件模板
// var App={
//   template:'<h3>123</h3>'
// }

//创建一个vm实例，使用render函数渲染指定组件
var vm = new Vue({
  el: "#app",
  render: c => c(App),
  router
});
