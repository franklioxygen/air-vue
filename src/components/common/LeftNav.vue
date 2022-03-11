<template>
  <div class="nav-container">
    <router-link v-for="(route, id) in routes" :to="route.path" :key="id">{{
      route.name
    }}</router-link>
  </div>
</template>

<script setup>
import routes from "../../router/routes";
</script>

<style lang="scss" scoped>
.nav-container {
  // border-right: 1px solid $grey-light;
  a {
    display: block;
    color: $green;
  }
}
</style>
