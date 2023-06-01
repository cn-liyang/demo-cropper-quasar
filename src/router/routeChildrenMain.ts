import { RouteRecordRaw } from "vue-router";

const routeChildrenMain: RouteRecordRaw[] = [
  {
    path: "01",
    component: () => import("pages/_0_intro/HelloPage.vue"),
    meta: {
      title: "入门",
      caption: "Hello OpenCV.js",
      icon: "mdi-seed-outline",
      link: "https://docs.opencv.org/4.5.0/d0/d84/tutorial_js_usage.html",
    },
  },
  {
    path: "02",
    component: () => import("pages/_0_intro/ImageIOPage.vue"),
    meta: {
      title: "图像 IO",
      caption: "Image Read and Show Example",
      icon: "mdi-seed-plus-outline",
      link: "https://docs.opencv.org/4.5.0/df/d24/tutorial_js_image_display.html",
    },
  },
];

export default routeChildrenMain;
