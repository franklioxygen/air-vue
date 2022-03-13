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
let setDarkMode = () => {
  document.documentElement.setAttribute("data-theme", "dark");
};
let setLightMode = () => {
  document.documentElement.setAttribute("data-theme", "light");
};
let isDarkMode = () => {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};
onMounted(() => {
  const changeTheme = document.getElementById("change-theme");
  changeTheme.addEventListener("change", (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  });
  if (isDarkMode()) {
    setDarkMode();
  }
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
