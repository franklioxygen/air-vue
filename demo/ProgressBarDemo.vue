<template>
  <h3>Progress Bar</h3>
  <p>Progress Bar is used to display progress.</p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <!-- normal progress bar -->
    <p>This is a normal Progress Bar:</p>
    <ProgressBar :current-progress="80" />
    <!-- float text progress bar -->
    <p>This is a float text Progress Bar:</p>
    <ProgressBar :current-progress="60" text-position="float-text" />
    <!-- fixed text progress bar -->
    <p>This is a fixed text Progress Bar:</p>
    <ProgressBar
      :current-progress="dynamicProgress.value"
      text-position="fixed-text"
    />
    <!-- sectional progress bar -->
    <p>This is a sectional Progress Bar:</p>
    <ProgressBar :current-progress="40" :sections="progressSections" />
  </div>
  <DataTable :table-props="tableProps"></DataTable>

  <h5>Usage:</h5>
  <h6>Insert component:</h6>
  <highlightjs language="html" :code="insertCode" />
  <h6>Import:</h6>
  <highlightjs language="js" :code="importCode" />
  <h6>Apply in template：</h6>
  <highlightjs language="js" :code="templateCode" />
  <FooterMessage />
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import { ProgressBar, DataTable } from "../src";
import FooterMessage from "./common/FooterMessage.vue";
export default {
  name: "ProgressBarDemo",
  components: { ProgressBar, DataTable, FooterMessage },
  setup() {
    const insertCode = computed(() => {
      return `
<!-- normal progress bar -->
<ProgressBar :current-progress="80" />
<!-- float text progress bar -->
<ProgressBar :current-progress="60" text-position="float-text" />
<!-- fixed text progress bar -->
<ProgressBar
    :current-progress="dynamicProgress.value"
    text-position="fixed-text"
/>
<!-- sectional progress bar -->
<ProgressBar :current-progress="40" :sections="progressSections" />
      `;
    });
    const importCode = computed(() => {
      return `
import { ProgressBar } from "air-vue"";
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
    const tableProps = computed(() => {
      return {
        title: "Props/Events Guide", //optional
        tableHead: [
          {
            label: "Name",
            field: "name",
          },
          {
            label: "Type",
            field: "type",
          },
          {
            label: "Required",
            field: "required",
          },
          {
            label: "Default",
            field: "default",
          },
          {
            label: "Description",
            field: "description",
          },
        ],
        tableBody: [
          {
            name: "current-progress",
            type: "Number",
            required: "false",
            default: "0",
            description: "current progress of bar",
          },
          {
            name: "text-position",
            type: "String",
            required: "false",
            default: "fixed-text",
            description: "text position of bar",
          },
          {
            name: "sections",
            type: "Array",
            required: "false",
            default: "-",
            description: "sections of progress",
          },
        ],
      };
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
      tableProps,
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
