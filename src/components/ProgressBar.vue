<template>
  <div class="progress-wrapper">
    <div class="tube"></div>
    <div class="liquid" :style="liquidStyle"></div>
    <div class="section-indicator">
      <div
        v-for="(section, index) in sections"
        :key="index"
        :style="sectionDotStyle(index)"
        :class="[
          'section-dot',
          index === sections.length - 1 ? 'last' : '',
          index === 0 ? 'first' : '',
          currentProgress / 100 > index / sections.length ? 'passed' : '',
        ]"
      ></div>
    </div>
    <ul class="section-names" v-if="sections.length !== 0">
      <li
        v-for="(section, index) in sections"
        :key="index"
        :style="sectionStyle(index)"
        :class="[
          index === sections.length - 1 ? 'last' : '',
          index === 0 ? 'first' : '',
        ]"
      >
        {{ section }}
      </li>
    </ul>
    <div class="ball" :style="ballStyle">
      <div
        v-if="textPosition === 'float-text' && sections.length === 0"
        :class="['text-percentage', textPosition]"
      >
        {{ currentProgress }}%
      </div>
    </div>
    <div
      v-if="textPosition === 'fixed-text' && sections.length === 0"
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
    },
    textPosition: {
      type: String,
      default: "fixed-text",
    },
    sections: {
      type: Array,
      default: () => [],
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
    const sectionDotStyle = (index) => {
      if (index !== 0 && index !== props.sections.length - 1)
        return `left: ${100 * (index / (props.sections.length - 1))}%;`;
    };
    const sectionStyle = (index) => {
      if (index !== 0 && index !== props.sections.length - 1)
        return `left: ${100 * (index / (props.sections.length - 1))}%;`;
    };
    return { liquidStyle, ballStyle, sectionDotStyle, sectionStyle };
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
    background: var(--green);
    height: 10px;
    border-radius: var(--input-radius);
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.3s;
    box-shadow: inset -40px 0px 10px -10px var(--green-light);
    &.fixed-text {
      left: 0;
    }
  }
  .section-dot {
    width: 11px;
    height: 11px;
    background: var(--color-background-highlight);
    // border: 1px var(--color-border-hover) solid;
    border-radius: 50%;
    position: absolute;
    top: -10.5px;
    transition: 0.3s;
    transform: translateX(-50%);
    &.passed {
      background: var(--green-light);
    }
    &.first {
      left: 0;
      transform: translate(0);
    }
    &.last {
      left: 100%;
      transform: translateX(-100%);
    }
  }
  .section-names {
    position: relative;
    top: 0;
    margin: 0;
    li {
      list-style: none;
      display: inline-block;
      position: absolute;
      transform: translateX(-50%);
      font-size: var(--label-text-size);
      &.first {
        left: 0;
        transform: translate(0);
      }
      &.last {
        left: 100%;
        transform: translateX(-100%);
      }
    }
  }
  .ball {
    width: 15px;
    height: 15px;
    background: var(--green-light);
    border: 1px var(--color-border-hover) solid;
    box-shadow: 0 0 10px var(--color-background-highlight);
    border-radius: 50%;
    position: absolute;
    margin-left: -7.5px;
    top: -2.5px;
    transition: 0.3s;
    cursor: pointer;
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
