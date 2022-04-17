<script setup>
import Header from "./demo/common/Header.vue";
import LeftNav from "./demo/common/LeftNav.vue";
let toggleList = () => {
  if (window.innerWidth > 640) return;
  let list = document.getElementsByClassName("left-nav")[0].classList;
  let body = document.getElementsByTagName("body")[0];

  list.contains("show-for-medium")
    ? (list.remove("show-for-medium"), (body.style.overflow = "hidden"))
    : (list.add("show-for-medium"), (body.style.overflow = "auto"));
};
</script>

<template>
  <div class="header-wrapper">
    <Header msg="Air Vue" />
    <span class="expand-nav" @click="toggleList">
      <div></div>
      <div></div>
      <div></div>
    </span>
  </div>
  <div class="grid-x container">
    <div class="cell show-for-medium left-nav">
      <LeftNav @change-route="toggleList" />
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
    .expand-nav {
      display: none;
      @media only screen and (max-width: 640px) {
        display: block;
        position: inherit;
        right: 20px;
        top: 15px;
        div {
          width: 35px;
          height: 4px;
          background-color: var(--green);
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
      @media only screen and (max-width: 640px) {
        display: block;
        z-index: 100;
        background: var(--color-background-soft);
        transition: 0.4s;
        width: 100%;
      }
    }
    .content {
      left: 220px;
      padding: 20px 20px 80px 20px;
      width: calc(100% - 220px);
      @media only screen and (max-width: 640px) {
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
  color: var(--green);
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
