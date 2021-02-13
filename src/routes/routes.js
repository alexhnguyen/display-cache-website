const routes = [
  // public views
  {
    name: "BarackObama",
    path: "/BarackObama",
    meta: {
      isPublic: true,
    },
    component: () => import("../pages/BarackObama.vue"),
  },
  {
    name: "JustinTrudeau",
    path: "/JustinTrudeau",
    meta: {
      isPublic: true,
    },
    component: () => import("../pages/JustinTrudeau.vue"),
  },
];

// add 404

export default routes;
