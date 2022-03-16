<template>
  <div class="skeleton-wrapper" :style="skeletonStyle" />
</template>

<script>
import { computed } from "vue";
export default {
  name: "SearchBar",
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "1rem",
    },
    borderRadius: {
      type: String,
      default: "0.25rem",
    },
  },
  setup(props) {
    const skeletonStyle = computed(() => {
      return {
        width: props.width,
        height: props.height,
        borderRadius: props.borderRadius,
      };
    });
    return { skeletonStyle };
  },
};
</script>

<style lang="scss" scoped>
@keyframes fade {
  60% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
.skeleton-wrapper {
  animation: fade 1.5s alternate infinite;
  background-color: var(--color-skeleton-loader);
}
</style>
