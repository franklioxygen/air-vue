<template>
  <div class="nav-container">
    <div class="dark-mode-toggle">
      <ToggleSwitch
        id="change-theme"
        :checked="!isDarkMode()"
        @toggle-switch="toggleSwitchEvent"
      />
      <span>{{ currentTheme.value }}</span>
    </div>
    <router-link
      v-for="(route, id) in routes"
      :to="route.path"
      :key="id"
      @click="changeRoute"
      >{{ route.name }}</router-link
    >
    <hr />
    Todo: <br />
    ThrowoutMenu <br />
    BreadCrumb <br />
    Carousel <br />
    Galleria <br />
    <hr />
    Documentation <br />
    Accessibility <br />
    Switch theme <br />
  </div>
</template>

<script setup>
import { onMounted, reactive } from "@vue/runtime-core";
import routes from "../../router/routes";
import ToggleSwitch from "../../src/components/ToggleSwitch.vue";
const emit = defineEmits(["change-route"]);
const changeRoute = () => emit("change-route");
let currentTheme = reactive({
  value: null,
});
const switchScheme = (scheme) => {
  document.documentElement.setAttribute("data-theme", scheme);
};
const isDarkMode = () => {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};
const toggleSwitchEvent = (event) => {
  event.state
    ? (switchScheme("light"),
      (currentTheme.value = String.fromCodePoint(0x1f31d)))
    : (switchScheme("dark"),
      (currentTheme.value = String.fromCodePoint(0x1f31c)));
};
onMounted(() => {
  //initial mode
  isDarkMode()
    ? (switchScheme("dark"),
      (currentTheme.value = String.fromCodePoint(0x1f31c)))
    : (currentTheme.value = String.fromCodePoint(0x1f31d));
});
</script>

<style lang="scss" scoped>
.nav-container {
  .dark-mode-toggle {
    margin: 10px 0 20px 0;
    > * {
      display: inline-block;
      margin-right: 10px;
    }
    span {
      vertical-align: middle;
    }
  }
  a {
    display: block;
    color: var(--green);
    margin: 8px 0;
    @media only screen and (max-width: 640px) {
      margin: 15px 0;
      font-size: 20px;
    }
  }
  .router-link-active {
    border-left: 3px solid var(--green);
    padding-left: 5px;
  }
}
</style>
