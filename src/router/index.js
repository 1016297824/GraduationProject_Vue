import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "用户登录"
    },
    component: () => import("@/views/login/Login")
  },
  {
    path: "/register",
    name: "register",
    meta: {
      title: "用户注册"
    },
    component: () => import("@/views/login/Register")
  },
  {
    path: "/customer",
    name: "customer",
    meta: {
      title: "欢迎使用！"
    },
    component: () => import("@/views/customer/Customer"),
    children: [
      {
        path: "reserve",
        name: "reserve",
        meta: {
          title: "预定"
        },
        component: () => import("@/views/customer/Reserve")
      },
      {
        path: "reserveAdd",
        name: "reserveAdd",
        meta: {
          title: "预定"
        },
        component: () => import("@/views/customer/ReserveAdd")
      },
      {
        path: "order",
        name: "order",
        meta: {
          title: "点餐"
        },
        component: () => import("@/views/customer/Order")
      },
      {
        path: "orderAdd",
        name: "orderAdd",
        meta: {
          title: "点餐"
        },
        component: () => import("@/views/customer/OrderAdd")
      },
      {
        path: "purchase",
        name: "purchase",
        meta: {
          title: "采购"
        },
        component: () => import("@/views/customer/Purchase")
      },
      {
        path: "Password",
        name: "Password",
        meta: {
          title: "修改密码"
        },
        component: () => import("@/views/customer/Password")
      }
    ]
  },
  {
    path: "/supermanager",
    name: "supermanager",
    meta: {
      title: "欢迎使用！"
    },
    component: () => import("@/views/supermanager/SuperManager")
  },
  {
    path: "/manager",
    name: "manager",
    meta: {
      title: "欢迎使用！"
    },
    component: () => import("@/views/manager/Manager")
  },
  {
    path: "/staff",
    name: "staff",
    meta: {
      title: "欢迎使用！"
    },
    component: () => import("@/views/staff/Staff")
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
