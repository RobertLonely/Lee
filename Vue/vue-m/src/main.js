//导入vue组件
import Vue from "vue";

//导入完整的vue组件
// import Vue from '../node_modules/vue/dist/vue'

//导入路由的包
import VueRouter from "vue-router";
//安装路由
Vue.use(VueRouter);

//导入 vue-resource
import VueResource from "vue-resource";
//安装 vue-resource
Vue.use(VueResource);

// 按需导入 Mint-UI 中的组件  
import { Header, Swipe, SwipeItem } from "mint-ui";
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入 MUI 的样式
import "../lib/mui/css/mui.css";
// 导入扩展图标样式
import "../lib/mui/css/icons-extra.css";

//导入 App 根组件
import App from "./App.vue";

//导入自己的 router.js 路由模块
import router from "./router.js";

//创建组件模板
// var App={
//   template:'<h3>123</h3>'
// }

//创建一个vm实例，使用render函数渲染指定组件
var vm = new Vue({
  el: "#app",
  //使用render函数渲染页面
  render: c => c(App),
  //挂载路由对象到 VM 实例上
  router
});
