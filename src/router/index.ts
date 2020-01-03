import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "login",
    meta: {
      title: "Login-登录",
      hideInMenu: true
    },
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "Login-登录",
      hideInMenu: true
    },
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/home",
    name: "home",
    meta: {
      title: "Home-首页",
      hideInMenu: true
    },
    component: () => import("@/views/home/index.vue"),
    children: [
      {
        path: "chat",
        name: "Chat",
        component: () => import("@/views/im/chat/index.vue")
      },
      {
        path: "duany",
        name: "Duany",
        component: () => import("@/views/im/duany/index.vue")
      },
      {
        path: "pre",
        name: "Pre",
        component: () => import("@/views/knowledge/data_pre/index.vue")
      },
      {
        path: "role",
        name: "Role",
        component: () => import("@/views/knowledge/role/index.vue")
      },
      {
        path: "setting",
        name: "Setting",
        component: () => import("@/views/knowledge/setting/index.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
