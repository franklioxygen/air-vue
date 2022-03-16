export default [
  {
    name: "Project Introduction",
    path: "/",
    component: () => import("../demo/ProjectIntro.vue"),
  },
  {
    name: "Dropdown Select",
    path: "/dropdownSelect",
    component: () => import("../demo/DropdownSelectDemo.vue"),
  },
  {
    name: "Search Bar",
    path: "/searchBar",
    component: () => import("../demo/SearchBarDemo.vue"),
  },
  {
    name: "Toggle Button",
    path: "/toggleButton",
    component: () => import("../demo/ToggleButtonDemo.vue"),
  },
  {
    name: "Skeleton Loader",
    path: "/skeletonLoader",
    component: () => import("../demo/SkeletonLoaderDemo.vue"),
  },
];
