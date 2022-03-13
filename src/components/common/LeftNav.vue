<template>
  <div class="nav-container">
    <input
      type="checkbox"
      name="mode"
      id="change-theme"
      :checked="isDarkMode()"
    />
    <span> Toggle Theme</span>
    <router-link
      v-for="(route, id) in routes"
      :to="route.path"
      :key="id"
      @click="changeRoute"
      >{{ route.name }}</router-link
    >
    Todo: <br />
    DataTable <br />
    SkeletonLoader <br />
    Slideout <br />
  </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import routes from "../../router/routes";
const emit = defineEmits(["change-route"]);
const changeRoute = () => emit("change-route");
let switchScheme = (scheme) => {
  document.documentElement.setAttribute("data-theme", scheme);
};
let isDarkMode = () => {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};
onMounted(() => {
  // add event listener for change theme
  document
    .getElementById("change-theme")
    .addEventListener("change", (event) => {
      event.target.checked ? switchScheme("dark") : switchScheme("light");
    });
  //initial mode
  isDarkMode() ? switchScheme("dark") : null;
});
</script>

<style lang="scss" scoped>
.nav-container {
  a {
    display: block;
    color: $green;
    margin: 8px 0;
    @media only screen and (max-width: 768px) {
      margin: 12px 0;
    }
  }
}
</style>
