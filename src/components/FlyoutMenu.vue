<template>
  <span class="expand-menu-button" @click="toggleMenu">
    <div></div>
    <div></div>
    <div></div>
  </span>
  <nav class="flyout-menu-wrapper" @mouseleave="clearAll">
    <ul
      v-for="(currentLevel, index) in menuLevels.subMenu"
      :key="currentLevel"
      class="menus"
    >
      <li
        v-for="items in currentLevel"
        :key="items"
        @mouseover="genSubMenu(items, index + 1)"
        @mouseout="hideSubMenu(index + 2)"
        @mouseenter="addActive"
        @mouseleave="removeActive"
      >
        <a :href="items.link">{{ items.name }}</a>
      </li>
    </ul>
  </nav>
</template>
<script>
import $ from "jquery";
import { onMounted, reactive } from "@vue/runtime-core";
export default {
  name: "FlyoutMenu",
  props: {
    menuProps: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const toggleMenu = () => {
      document
        .getElementsByClassName("flyout-menu-wrapper")[0]
        .children[0].classList.toggle("show-menu");
    };
    let menuLevels = reactive({
      // subMenu: [],
      subMenu: [props.menuProps],
    });
    let focusLevel = reactive({
      number: 0,
    });
    const genSubMenu = (item, level) => {
      menuLevels.subMenu[level] = item.subMenu;
      focusLevel.number = level;
      // console.log("focusing:-----", focusLevel.number);
      // console.log(level, menuLevels.subMenu[level]);
      hideSubMenu(level + 1);
    };
    const hideSubMenu = (level) => {
      // console.log(focusLevel.number, level);
      menuLevels.subMenu[level] = "";
    };
    const clearAll = () => {
      menuLevels.subMenu = [props.menuProps];
    };
    const addActive = (e) => {
      e.target.classList.add("active");
      e.target.classList.add("focus");
    };
    const removeActive = (e) => {
      // console.log(focusLevel.number);
      e.target.classList.remove("active");
    };
    onMounted(() => {
      let timer;
      $(".flyout-menu-wrapper").on("mousemove", () => {
        const $activeClass = $("li.active");
        document.documentElement.style.setProperty("--coneHeight", "300%");
        clearTimeout(timer);
        timer = setTimeout(() => {
          if ($activeClass.hasClass("active")) {
            document.documentElement.style.setProperty("--coneHeight", "0");
          }
        }, 500);
      });
    });
    return {
      toggleMenu,
      menuLevels,
      focusLevel,
      genSubMenu,
      hideSubMenu,
      clearAll,
      addActive,
      removeActive,
      // tableStyle,
    };
  },
};
</script>

<style lang="scss" scoped>
.expand-menu-button {
  display: block;
  position: sticky;
  width: fit-content;
  right: 20px;
  top: 15px;
  div {
    width: 35px;
    height: 1px;
    background-color: var(--green);
    margin: 12px 0;
  }
}
.flyout-menu-wrapper {
  position: absolute;
  .menus {
    &:first-of-type {
      display: none;
    }
    &.show-menu {
      display: block;
    }
    display: block;
    width: auto;
    margin: 0;
    float: left;
    li {
      list-style: none;
      height: 40px;
      z-index: 1;
      background-color: var(--color-background-soft);
      border-left: 1px solid var(--color-border);
      padding: 0 10px 0 10px;
      a {
        line-height: 40px;
      }
    }
    .active {
      z-index: 3;
      &:after {
        content: "";
        position: absolute;
        top: -100%;
        right: 0;
        width: 100%;
        height: var(--coneHeight);
        clip-path: polygon(100% 0, 0 50%, 100% 100%);
        z-index: -1;
      }
    }
  }
}
</style>
