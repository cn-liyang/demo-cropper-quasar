import { RouteRecordRaw } from "vue-router";

const routeChildrenMain: RouteRecordRaw[] = [
  {
    path: "01",
    component: () => import("pages/_0_intro/HelloPage.vue"),
    meta: {
      title: "入门",
      caption: "",
      icon: "mdi-seed-outline",
      link: "https://fengyuanchen.github.io/cropperjs",
    },
  },
  {
    path: "02",
    component: () => import("pages/_0_intro/ImageIOPage.vue"),
    meta: {
      title: "图像 IO",
      caption: "",
      icon: "mdi-seed-plus-outline",
      link: "https://fengyuanchen.github.io/cropperjs",
    },
  },
  {
    path: "1",
    component: () => import("pages/_1_/ImageDialogPage.vue"),
    meta: {
      title: "图像会话",
      caption: "",
      icon: "mdi-seed-plus-outline",
      link: "https://fengyuanchen.github.io/cropperjs",
    },
  },
];

export default routeChildrenMain;
