<script setup>
import Header from "./components/common/Header.vue";
import LeftNav from "./components/common/LeftNav.vue";
</script>

<template>
  <div class="header-wrapper">
    <Header msg="VU" />
  </div>
  <div class="grid-x container">
    <div class="cell large-3 show-for-large left-nav">
      <LeftNav />
    </div>
    <div class="cell large-auto small-auto content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  max-width: 1280px;
  padding: 2rem;
  font-weight: normal;
  height: calc(100vh - 60px);
}
.container {
  height: 100%;
  .left-nav {
    min-width: 220px;
    height: 100%;
    border-right: 1px solid $grey-light;
    overflow-y: scroll;
  }
  .content {
    padding-left: 10px;
    width: 100%;
  }
}

a,
.green {
  text-decoration: none;
  color: $green;
  transition: 0.4s;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
