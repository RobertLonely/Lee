import VueRouter from "vue-router";

import Home from "./components/tabbar/Home.vue";
import Member from "./components/tabbar/Member.vue";
import Search from "./components/tabbar/Search.vue";
import Shopcart from "./components/tabbar/Shopcart.vue";

var router = new VueRouter({
  routes: [
    { path: "/", redirect: "/Home" },
    { path: "/Home", component: Home },
    { path: "/Member", component: Member },
    { path: "/Search", component: Search },
    { path: "/Shopcart", component: Shopcart }
  ]
});

export default router 
