export default [
  {
    name: "Project Introduction",
    path: "/",
    component: () => import("../components/ProjectIntro.vue"),
  },
  {
    name: "Dropdown Filter",
    path: "/dropdownFilter",
    component: () => import("../components/DropdownFilter.vue"),
  },
  {
    name: "Search Bar",
    path: "/searchBar",
    component: () => import("../components/SearchBar.vue"),
  },
];
