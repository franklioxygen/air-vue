<template>
  <div class="button-wrapper">
    <button
      :class="['vu-button', buttonProps.level]"
      :style="buttonStyle"
      @click="clickButtonEmit"
      :disabled="buttonProps.disabled"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "CustomizedButton",
  props: {
    buttonText: {
      type: String,
      default: "Click me",
      required: true,
    },
    width: {
      type: String,
      default: "",
    },
    buttonProps: {
      type: Object,
      required: true,
    },
  },
  emits: ["click-button"],
  setup(props, { emit }) {
    const buttonStyle = computed(() => {
      return {
        width: props.width,
      };
    });
    const clickButtonEmit = () => {
      emit("click-button");
    };
    return {
      buttonStyle,
      clickButtonEmit,
    };
  },
};
</script>

<style lang="scss" scoped>
.button-wrapper {
  position: relative;
  .vu-button {
    color: var(--color-text-strong);
    text-align: center;
    text-decoration: none;
    display: inline-block;
    transition-duration: 0.4s;
    cursor: pointer;
    border: 2px solid var(--color-border);
    &.vu-btn-primary {
      background-color: $green;
      &.vu-btn-primary:hover {
        border: 2px solid var(--color-background-highlight-2);
      }
    }
    &.vu-btn-secondary {
      background-color: var(--color-background-soft);
    }
  }
  .vu-button:enabled:active {
    background-color: var(--color-background-highlight-2);
  }
  .vu-button:hover {
    box-sizing: border-box;
    color: var(--color-text-strong);
    border: 2px solid $green;
  }
  .vu-button:disabled {
    color: var(--color-background-highlight);
    border: 2px solid var(--color-background-mute);
    cursor: not-allowed;
  }
}
</style>
