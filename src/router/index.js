import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "用户登录"
    },
    component: () => import("@/views/login/Login.vue")
  },
  {
    path: "/customer",
    name: "customer",
    meta: {
      title: "欢迎使用！"
    },
    component: () => import("@/views/customer/Customer.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
});

export default router;
