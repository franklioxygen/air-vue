<template>
  <div
    :class="[
      `slideoutTemplate-shade`,
      slideoutExpanded.status ? 'expanded' : '',
    ]"
    @click="toggleSlideout()"
  ></div>
  <div
    :class="[
      `slideoutTemplate-wrapper`,
      slideoutExpanded.status ? 'expanded' : '',
      slideoutExpanded.side,
    ]"
  >
    <div class="control-bar">
      <div class="icon-back" v-show="backable" @click="backScreen()"></div>
      <div class="icon-close" @click="toggleSlideout()"></div>
    </div>
    <h3>
      <slot name="title"></slot>
    </h3>
    <div>
      <slot name="content"></slot>
    </div>
    <div>
      <slot name="customComponent"></slot>
    </div>
  </div>
</template>

<script>
import { reactive, watch } from "vue";
export default {
  name: "slideoutTemplate",
  props: {
    expanded: {
      type: Boolean,
      default: false,
    },
    side: {
      type: String,
      default: "right",
    },
    backable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["back-screen"],
  setup(props, { emit }) {
    let slideoutExpanded = reactive({
      status: props.expanded,
      side: props.side,
    });
    const toggleSlideout = () => {
      slideoutExpanded.status = !slideoutExpanded.status;
      slideoutExpanded.side = props.side;
    };
    const backScreen = () => {
      emit("back-screen");
    };
    watch(
      () => props.expanded,
      () => {
        toggleSlideout();
      }
    );
    return {
      slideoutExpanded,
      toggleSlideout,
      backScreen,
    };
  },
};
</script>

<style lang="scss" scoped>
.slideoutTemplate-shade {
  display: none;
  &.expanded {
    display: block;
    background: var(--color-background);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 30;
    opacity: 0.8;
  }
}
.slideoutTemplate-wrapper {
  padding: 30px;
  width: 500px;
  height: 100%;
  border: var(--color-background-soft) solid 2px;
  background: var(--color-background-mute);
  position: fixed;
  top: 0;
  margin: 0;
  z-index: 35;
  opacity: 1;
  transition: 0.5s;
  &.right {
    left: calc(100% + 500px);
    .control-bar {
      .icon-back {
        left: 0;
      }
      .icon-close {
        right: 0;
      }
    }
  }
  &.left {
    right: calc(100% + 500px);
    .control-bar {
      .icon-back {
        right: 0;
      }
      .icon-close {
        left: 0;
      }
    }
  }
  &.expanded {
    top: 0;
    transform: 0.4s;
  }
  &.expanded.right {
    left: calc(100% - 500px);
  }
  &.expanded.left {
    right: calc(100% - 500px);
  }
  .control-bar {
    width: 100%;
    height: 30px;
    margin-bottom: 20px;
    > * {
      cursor: pointer;
      width: 30px;
      height: 30px;
      filter: var(--invert-background-icon);
      position: absolute;
    }
    .icon-back {
      background: url("../assets/icons/LinearIconsSVG/chevron-left.svg");
      background-size: 30px;
    }
    .icon-close {
      background: url("../assets/icons/LinearIconsSVG/cross.svg");
      background-size: 30px;
    }
  }
  @media only screen and (max-width: 640px) {
    width: 100%;
    &.expanded.right {
      left: 0;
    }
    &.expanded.left {
      right: 0;
    }
  }
}
</style>
