<script setup>
import Header from "./components/common/Header.vue";
import LeftNav from "./components/common/LeftNav.vue";
</script>

<template>
  <div class="header-wrapper">
    <Header msg="VU" />
  </div>
  <div class="grid-x container">
    <div class="cell show-for-large left-nav">
      <LeftNav />
    </div>
    <div class="cell content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  max-width: 1280px;
  font-weight: normal;
  height: calc(100vh - 60px);
  .header-wrapper {
    position: fixed;
    width: 100%;
    background: var(--color-background-soft);
    transition: color 0.5s, background-color 0.5s;
    z-index: 30;
  }
  .container {
    height: 100%;
    top: 80px;
    .left-nav {
      position: fixed;
      width: 220px;
      height: 100%;
      overflow-y: scroll;
      padding: 20px 20px 120px 20px;
    }
    .content {
      left: 220px;
      padding: 20px 20px 80px 20px;
      width: calc(100% - 220px);
      .hljs {
        background: var(--color-code-background);
        padding: 0 20px 0 20px;
      }
    }
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
  background: var(--color-background-mute);
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--color-border);
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--color-border-hover);
}
</style>
