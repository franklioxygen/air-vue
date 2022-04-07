<template>
  <div class="progress-wrapper">
    <div class="tube"></div>
    <div class="liquid" :style="liquidStyle"></div>
    <div class="ball" :style="ballStyle">
      <div
        v-if="textPosition === 'float-text'"
        :class="['text-percentage', textPosition]"
      >
        {{ currentProgress }}%
      </div>
    </div>
    <div
      v-if="textPosition === 'fixed-text'"
      :class="['text-percentage', textPosition]"
    >
      {{ currentProgress }}%
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "ProgressBar",
  props: {
    currentProgress: {
      type: Number,
      default: 0,
      required: true,
    },
    textPosition: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const liquidStyle = computed(() => {
      return props.currentProgress !== null
        ? `width: ${props.currentProgress}%;`
        : "";
    });
    const ballStyle = computed(() => {
      return props.currentProgress !== null
        ? `left:${props.currentProgress}% `
        : "";
    });
    return { liquidStyle, ballStyle };
  },
};
</script>

<style lang="scss" scoped>
.progress-wrapper {
  position: relative;
  width: 100%;
  margin: 20px 0 20px 0;
  .tube {
    border: 1px var(--color-border-hover) solid;
    background: var(--color-background-highlight);
    height: 10px;
    border-radius: var(--input-radius);
  }
  .liquid {
    background: $green;
    height: 10px;
    border-radius: var(--input-radius);
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.3s;
    box-shadow: inset -40px 0px 10px -10px $green-light;
    &.fixed-text {
      left: 0;
    }
  }
  .ball {
    width: 15px;
    height: 15px;
    background: $green-light;
    border: 1px var(--color-border-hover) solid;
    box-shadow: 0 0 10px var(--color-background-highlight);
    border-radius: 50%;
    position: absolute;
    margin-left: -7.5px;
    top: -2.5px;
    transition: 0.3s;
    .text-percentage {
      display: none;
      &.float-text {
        display: block;
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: var(--label-text-size);
      }
    }
  }
  .text-percentage {
    &.fixed-text {
      display: block;
      font-size: var(--label-text-size);
    }
  }
}
</style>
