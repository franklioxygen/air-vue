<template>
  <h3>Skeleton Loader</h3>
  <p>Skeleton Loader is used as placeholder on data loading.</p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <SkeletonLoader />
    <SkeletonLoader height="4rem" />
    <SkeletonLoader width="200px" height="2rem" />
    <SkeletonLoader width="50px" height="50px" borderRadius="50%" />
    <SkeletonLoader
      v-for="(n, index) of 4"
      v-bind:key="index"
      width="60px"
      height="2rem"
    />
  </div>
  <h5>Usage:</h5>
  <h6>Insert component:</h6>
  <highlightjs language="html" :code="insertCode" />
  <h6>Import:</h6>
  <highlightjs language="js" :code="importCode" />
</template>

<script>
import { computed, reactive } from "vue";
import { SkeletonLoader } from "../src";
export default {
  name: "DropdownSelectDemo",
  components: { SkeletonLoader },
  setup() {
    let searchEventReturnValue = reactive({
      returnValue: "keyword",
    });
    const insertCode = computed(() => {
      return `
<SkeletonLoader width="50px" height="50px" borderRadius="50%" />
      `;
    });
    const importCode = computed(() => {
      return `
import SkeletonLoader from "../src/components/SkeletonLoader.vue";
      `;
    });

    return {
      searchEventReturnValue,
      insertCode,
      importCode,
    };
  },
};
</script>

<style lang="scss">
.demo-wrapper {
  > * {
    display: inline-block;
    margin-right: 50px;
  }
}
</style>
