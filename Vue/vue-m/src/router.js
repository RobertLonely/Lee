import VueRouter from "vue-router";

//导入对应的路由组件
import Home from "./components/tabbar/Home.vue";
import Member from "./components/tabbar/Member.vue";
import Shopcart from "./components/tabbar/Shopcart.vue";
import Search from "./components/tabbar/Search.vue";
import NewsList from "./components/news/NewsList.vue";
import NewInfo from "./components/news/NewInfo.vue";
import PhotoList from "./components/photos/PhotoList.vue";
import PhotoInfo from "./components/photos/PhotoInfo.vue";
import GoodsList from "./components/goods/GoodsList.vue";

//创建路由对象
var router = new VueRouter({
  routes: [
    //配置路由规则
    { path: "/", redirect: "/Home" },
    { path: "/Home", component: Home },
    { path: "/Member", component: Member },
    { path: "/Shopcart", component: Shopcart },
    { path: "/Search", component: Search },
    { path: "/Home/NewsList", component: NewsList },
    { path: "/Home/NewsList/:id", component: NewInfo },
    { path: "/Home/PhotoList", component: PhotoList },
    { path: "/Home/PhotoInfo/:id", component: PhotoInfo },
    { path: "/Home/GoodsList", component: GoodsList }
  ],
  // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
  linkActiveClass: "mui-active"
});

// 把路由对象暴露出去
export default router;
