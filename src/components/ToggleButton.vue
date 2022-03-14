<template>
  <div class="toggle-wrapper">
    <input type="checkbox" name="mode" id="checkbox" :checked="checked" />
    <div class="button-box" @click="toggleState()">
      <div class="button-bar"></div>
    </div>
    <div class="toggle-label">{{ toggleProps.label }}</div>
  </div>
</template>

<script>
import { onMounted, reactive } from "@vue/runtime-core";
export default {
  name: "ToggleButton",
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    toggleProps: {
      type: Object,
      required: false,
    },
  },
  emits: ["toggle-button"],
  setup(props, { emit }) {
    let currentState = reactive({
      state: props.checked,
    });
    let toggleState = () => {
      currentState.state = !currentState.state;
      toggleButtonEmit(currentState.state);
      moveBar();
    };
    const toggleButtonEmit = (state) => {
      emit("toggle-button", state);
    };
    const moveBar = () => {
      document
        .getElementsByClassName("button-box")[0]
        .classList.toggle("active");
      document.getElementById("checkbox").checked =
        !document.getElementById("checkbox").checked;
    };
    onMounted(() => {
      currentState.state === true ? moveBar() : null;
    });
    return { currentState, toggleState, toggleButtonEmit };
  },
};
</script>

<style lang="scss" scoped>
.toggle-wrapper {
  input {
    transform: scale(0);
    position: absolute;
  }
  .button-box {
    display: inline-block;
    width: 60px;
    background: var(--color-background-highlight);
    padding: 0 !important;
    border: 0.1rem solid var(--color-border-hover);
    transition: 0.5s;
    cursor: pointer;
    &.active {
      background: $green;
      .button-bar {
        position: absolute;
        left: 28px;
      }
    }
    .button-bar {
      transition: 0.3s;
      left: 0;
      border-radius: 0.3rem;
      border: 0.1rem solid var(--color-border);
      width: 29px;
      height: 29px;
      background: var(--color-background-mute);
    }
  }
  .toggle-label {
    display: inline-block;
    margin-left: 20px;
  }
}
</style>
