<script setup>
import { onMounted, reactive } from "vue";
import Header from "./components/common/Header.vue";
import LeftNav from "./components/common/LeftNav.vue";
let componentsListExpanded = reactive({
  show: false,
});
let toggleList = () => {
  componentsListExpanded.show = !componentsListExpanded.show;
};
onMounted(() => {
  window.addEventListener("resize", renewalExpandStatus);
});

let renewalExpandStatus = () => {
  if (window.innerWidth > 768) {
    componentsListExpanded.show = true;
  } else {
    componentsListExpanded.show = false;
  }
};
</script>

<template>
  <div class="header-wrapper">
    <Header msg="VU" />
    <span class="expand-nav" @click="toggleList">
      <div></div>
      <div></div>
      <div></div>
    </span>
  </div>
  <div class="grid-x container">
    <div class="cell left-nav" v-show="componentsListExpanded.show">
      <LeftNav @change-route="renewalExpandStatus" />
    </div>
    <div class="cell large-auto content">
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
    .expand-nav {
      display: none;
      @media only screen and (max-width: 768px) {
        display: block;
        position: inherit;
        right: 20px;
        top: 15px;
        div {
          width: 35px;
          height: 4px;
          background-color: $green;
          margin: 9px 0;
        }
      }
    }
  }
  .container {
    top: 80px;
    .left-nav {
      position: fixed;
      width: 220px;
      height: 100%;
      overflow-y: scroll;
      padding: 20px 20px 120px 20px;
      @media only screen and (max-width: 768px) {
        display: block;
        z-index: 100;
        background: var(--color-background-soft);
        width: 100%;
      }
    }
    .content {
      left: 220px;
      padding: 20px 20px 80px 20px;
      width: calc(100% - 220px);
      @media only screen and (max-width: 768px) {
        left: 0;
        width: 100%;
      }
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
