import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "",
    redirect: "/homepage"
  },
  {
    path: "/homepage",
    name: "homepage",
    meta: {
      title: "首页"
    },
    component: () => import("@/views/homepage/Login.vue")
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
