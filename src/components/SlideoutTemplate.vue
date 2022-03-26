<template>
  <div
    class="slideoutTemplate-shade"
    :class="slideoutExpanded.value ? 'expanded' : ''"
    @click="toggleSlideout()"
  ></div>
  <div
    class="slideoutTemplate-wrapper"
    :class="slideoutExpanded.value ? 'expanded' : ''"
    ref="wrapper"
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
    id: {
      type: String,
      default: "slideout-id",
      required: true,
    },
    backable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["back-screen"],
  setup(props, { emit }) {
    let slideoutExpanded = reactive({
      value: props.expanded,
    });
    const toggleSlideout = () => {
      slideoutExpanded.value = !slideoutExpanded.value;
    };
    const backScreen = () => {
      emit("back-screen");
    };
    watch(
      () => props.expanded,
      () => {
        slideoutExpanded.value = !slideoutExpanded.value;
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
  left: calc(100% + 500px);
  top: 0;
  margin: 0;
  z-index: 35;
  opacity: 1;
  transition: 0.5s;
  &.expanded {
    left: calc(100% - 500px);
    top: 0;
    transform: 0.4s;
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
      left: 0;
    }
    .icon-close {
      background: url("../assets/icons/LinearIconsSVG/cross.svg");
      background-size: 30px;
      right: 0;
    }
  }
  @media only screen and (max-width: 640px) {
    width: 100%;
    &.expanded {
      left: 0;
    }
  }
}
</style>
