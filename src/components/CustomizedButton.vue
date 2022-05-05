<template>
  <div class="button-wrapper">
    <button
      :class="['av-button', level]"
      :style="buttonStyle"
      @click="clickButtonEmit"
      :disabled="disabled"
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
    id: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      default: "Click me",
      required: true,
    },
    width: {
      type: String,
      default: "200px",
    },
    level: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
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
      emit("click-button", { id: props.id });
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
  .av-button {
    color: var(--color-text-strong);
    text-align: center;
    text-decoration: none;
    display: inline-block;
    transition-duration: 0.4s;
    cursor: pointer;
    border: 2px solid var(--color-border);
    &.av-btn-primary {
      background-color: var(--green);
      &.av-btn-primary:hover {
        border: 2px solid var(--green-light);
      }
    }
    &.av-btn-secondary {
      background-color: var(--color-background-soft);
      &.av-btn-secondary:hover {
        border: 2px solid var(--green);
      }
    }
  }
  .av-button:enabled:active {
    background-color: var(--color-background-highlight-2);
  }
  .av-button:hover {
    box-sizing: border-box;
    color: var(--color-text-strong);
    border: 2px solid var(--color-background-soft);
  }
  .av-button:disabled {
    background-color: var(--color-background-soft);
    border: 2px solid var(--color-background-mute);
    cursor: not-allowed;
  }
}
</style>
