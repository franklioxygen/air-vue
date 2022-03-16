<template>
  <div class="toggle-wrapper">
    <input type="checkbox" :id="id" :checked="checked" />
    <div class="button-box" @click="toggleState()">
      <div class="button-bar"></div>
    </div>
    <div class="toggle-label" v-if="toggleProps">
      {{ toggleProps.label }}
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "@vue/runtime-core";
export default {
  name: "ToggleButton",
  props: {
    id: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
      required: true,
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
      const targetBox = (event.path || event.composedPath()).filter((e) =>
        e.classList ? e.classList.contains("button-box") : ""
      )[0].classList;
      targetBox.toggle("active");
      document.getElementById(props.id).checked = !document.getElementById(
        props.id
      ).checked;
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
