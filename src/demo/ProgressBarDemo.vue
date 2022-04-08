<template>
  <h3>Progress Bar</h3>
  <p>Progress Bar is used to display progress.</p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <!-- normal progress bar -->
    <p>This is a normal Progress Bar:</p>
    <ProgressBar :currentProgress="80" />
    <!-- float text progress bar -->
    <p>This is a float text Progress Bar:</p>
    <ProgressBar :currentProgress="60" textPosition="float-text" />
    <!-- fixed text progress bar -->
    <p>This is a fixed text Progress Bar:</p>
    <ProgressBar
      :currentProgress="dynamicProgress.value"
      :displayText="true"
      textPosition="fixed-text"
    />
    <!-- sectional progress bar -->
    <p>This is a sectional Progress Bar:</p>
    <ProgressBar :currentProgress="40" :sections="progressSections" />
  </div>
  <h5>Usage:</h5>
  <h6>Insert component:</h6>
  <highlightjs language="html" :code="insertCode" />
  <h6>Import:</h6>
  <highlightjs language="js" :code="importCode" />
  <h6>Apply in template：</h6>
  <highlightjs language="js" :code="templateCode" />
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import ProgressBar from "../components/ProgressBar.vue";
export default {
  name: "ProgressBarDemo",
  components: { ProgressBar },
  setup() {
    const insertCode = computed(() => {
      return `
<!-- normal progress bar -->
<ProgressBar :currentProgress="80" />
<!-- float text progress bar -->
<ProgressBar :currentProgress="60" textPosition="float-text" />
<!-- fixed text progress bar -->
<ProgressBar
    :currentProgress="dynamicProgress.value"
    :displayText="true"
    textPosition="fixed-text"
/>
<!-- sectional progress bar -->
<p>This is a sectional Progress Bar:</p>
<ProgressBar :currentProgress="40" :sections="progressSections" />
      `;
    });
    const importCode = computed(() => {
      return `
import ProgressBar from "../components/ProgressBar.vue";
      `;
    });
    const templateCode = computed(() => {
      return `
// this is for dynamic progress
let dynamicProgress = reactive({
    value: 0,
});
onMounted(() => {
    setInterval(function () {
    dynamicProgress.value += 10;
    dynamicProgress.value > 100 ? (dynamicProgress.value = 0) : null;
    }, 1000);
});
// this is for sectional progress
let progressSections = computed(() => {
    return ["Preparing", "Chopped", "Cooked", "On Table", "Eat"];
});
      `;
    });
    // this is for dynamic progress
    let dynamicProgress = reactive({
      value: 0,
    });
    onMounted(() => {
      setInterval(function () {
        dynamicProgress.value += 10;
        dynamicProgress.value > 100 ? (dynamicProgress.value = 0) : null;
      }, 1000);
    });
    // this is for sectional progress
    let progressSections = computed(() => {
      return ["Preparing", "Chopped", "Cooked", "On Table", "Eat"];
    });

    return {
      insertCode,
      importCode,
      templateCode,
      progressSections,
      dynamicProgress,
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
