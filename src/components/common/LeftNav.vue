<template>
  <div class="nav-container">
    <router-link
      v-for="(route, id) in routes"
      :to="route.path"
      :key="id"
      @click="changeRoute"
      >{{ route.name }}</router-link
    >
    test <br />test <br />test <br />test <br />test <br />test <br />test
    <br />test <br />test <br />test <br />test <br />test <br />test <br />test
    <br />test <br />test <br />test <br />test <br />test <br />test <br />test
    <br />test <br />test <br />test <br />test <br />test <br />test <br />test
    <br />test <br />test <br />test <br />
  </div>
</template>

<script setup>
import routes from "../../router/routes";
const emit = defineEmits(["change-route"]);
const changeRoute = () => emit("change-route");
// let changeRoute = () => {
//   emit(["change-route"]);
// };
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
