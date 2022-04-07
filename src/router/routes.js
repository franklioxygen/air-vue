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
    name: "Toggle Switch",
    path: "/toggleSwitch",
    component: () => import("../demo/ToggleSwitchDemo.vue"),
  },
  {
    name: "Skeleton Loader",
    path: "/skeletonLoader",
    component: () => import("../demo/SkeletonLoaderDemo.vue"),
  },
  {
    name: "Data Table",
    path: "/dataTable",
    component: () => import("../demo/DataTableDemo.vue"),
  },
  {
    name: "Slide Out",
    path: "/slideOut",
    component: () => import("../demo/SlideOutDemo.vue"),
  },
  {
    name: "Modal Overlay",
    path: "/modalOverlay",
    component: () => import("../demo/ModalOverlayDemo.vue"),
  },
  {
    name: "Customized Button ",
    path: "/customizedButton",
    component: () => import("../demo/CustomizedButtonDemo.vue"),
  },
  {
    name: "Inline Message",
    path: "/inlineMessage",
    component: () => import("../demo/InlineMessageDemo.vue"),
  },
  {
    name: "Toast Message",
    path: "/toastMessage",
    component: () => import("../demo/ToastMessageDemo.vue"),
  },
  {
    name: "Progress Bar",
    path: "/progressBar",
    component: () => import("../demo/ProgressBarDemo.vue"),
  },
];
