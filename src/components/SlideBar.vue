<template>
  <div class="slide-wrapper">
    <div class="tube" :id="id">
      <span class="ball" :style="ballStyle">
        <div
          v-if="textPosition === 'float-text'"
          :class="['text-percentage', textPosition]"
        >
          {{ currentValue.number }}
        </div>
      </span>
      <div class="liquid" :style="liquidStyle"></div>
    </div>
    <div
      v-if="textPosition === 'fixed-text'"
      :class="['text-percentage', textPosition]"
    >
      {{ currentValue.number }}
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import { isMobile } from "../";
export default {
  name: "SlideBar",
  props: {
    id: {
      type: String,
      required: true,
    },
    defaultSlideValue: {
      type: Number,
      default: 0,
      required: true,
    },
    maxSlideValue: {
      type: Number,
      default: 100,
      required: false,
    },
    rangeType: {
      type: String,
      default: "percentage",
      required: false,
    },
    textPosition: {
      type: String,
      default: "float-text",
    },
  },
  emits: ["slide-change"],
  setup(props, { emit }) {
    const liquidStyle = computed(() => {
      return props.defaultSlideValue !== null
        ? `width: ${props.defaultSlideValue}%;`
        : "";
    });
    const ballStyle = computed(() => {
      return props.defaultSlideValue !== null
        ? `left:${props.defaultSlideValue}% `
        : "";
    });
    let currentValue = reactive({
      number:
        props.rangeType === "percentage"
          ? props.defaultSlideValue + "%"
          : props.defaultSlideValue + "/" + props.maxSlideValue,
    });
    const targetSlider = computed(() => {
      return document.querySelector("#" + props.id);
    });
    let mouseDown = reactive({
      value: false,
    });
    let rangeWidth = reactive({
      value: 0,
    });
    let updateBall = (e) => {
      let coordinateX = isMobile ? e.touches[0].pageX - 40 : e.offsetX;
      if (
        mouseDown.value &&
        coordinateX >= 0 &&
        coordinateX <= rangeWidth.value
      ) {
        targetSlider.value.children[0].style.left = coordinateX + "px";
        targetSlider.value.children[1].style.width = coordinateX + "px";
        let numerator = Math.round(
          (coordinateX / rangeWidth.value) * props.maxSlideValue
        );
        currentValue.number =
          props.rangeType === "percentage"
            ? numerator + "%"
            : numerator + "/" + props.maxSlideValue;
        emit("slide-change", { id: props.id, number: Math.round(numerator) });
      }
    };
    const start = (e) => {
      rangeWidth.value = targetSlider.value.offsetWidth;
      mouseDown.value = true;
      document.querySelector("#app").classList.add("disable-select");
      updateBall(e);
      return false;
    };
    const move = (e) => {
      e.preventDefault();
      updateBall(e);
    };
    const end = () => {
      document.querySelector("#app").classList.remove("disable-select");
      mouseDown.value = false;
    };
    onMounted(() => {
      targetSlider.value.addEventListener("mousedown", start);
      targetSlider.value.addEventListener("touchstart", start);
      targetSlider.value.parentElement.parentElement.addEventListener(
        "mousemove",
        move
      );
      targetSlider.value.parentElement.parentElement.addEventListener(
        "touchmove",
        move
      );
      document.addEventListener("mouseleave", end);
      document.addEventListener("mouseup", end);
      document.addEventListener("touchend", end);
    });
    return { currentValue, liquidStyle, ballStyle };
  },
};
</script>

<style lang="scss" scoped>
.slide-wrapper {
  position: relative;
  width: 100%;
  margin: 20px 0 20px 0;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  user-select: none; /* Non-prefixed version, currently */
  .tube {
    @media only screen and (max-width: 640px) {
      width: calc(100% - 40px);
      margin-left: 20px;
    }
    border: 1px var(--color-border-hover) solid;
    background: var(--color-background-highlight);
    height: 10px;
    border-radius: var(--input-radius);
    :before {
      display: block;
      position: absolute;
      top: 9px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: black;
    }
    .liquid {
      background: var(--green);
      height: 10px;
      border-radius: var(--input-radius);
      position: absolute;
      top: 0;
      left: 0;
      box-shadow: inset -40px 0px 10px -10px var(--green-light);
      &.fixed-text {
        left: 0;
      }
    }
    .ball {
      width: 15px;
      height: 25px;
      background: var(--green-light);
      border: 1px var(--color-border-hover) solid;
      box-shadow: 0 0 10px var(--color-background-highlight);
      border-radius: 20%;
      position: absolute;
      margin-left: -7.5px;
      top: -7.5px;
      pointer-events: none;
      cursor: pointer;
      z-index: 2;
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
  }
  .text-percentage {
    &.fixed-text {
      top: 10px;
      display: block;
      font-size: var(--label-text-size);
    }
  }
}
</style>
