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
];