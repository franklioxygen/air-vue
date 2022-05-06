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
  <DataTable :table-props="tableProps"></DataTable>
  <h5>Usage:</h5>
  <h6>Insert component:</h6>
  <highlightjs language="html" :code="insertCode" />
  <h6>Import:</h6>
  <highlightjs language="js" :code="importCode" />
  <FooterMessage />
</template>

<script>
import { computed } from "vue";
import { SkeletonLoader, DataTable } from "../src";
import FooterMessage from "./common/FooterMessage.vue";
export default {
  name: "DropdownSelectDemo",
  components: { SkeletonLoader, DataTable, FooterMessage },
  setup() {
    const insertCode = computed(() => {
      return `
<SkeletonLoader width="50px" height="50px" borderRadius="50%" />
      `;
    });
    const importCode = computed(() => {
      return `
import { SkeletonLoader } from "air-vue";
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
            name: "width",
            type: "String",
            required: "false",
            default: "100%",
            description: "width the loader",
          },
          {
            name: "height",
            type: "String",
            required: "false",
            default: "1rem",
            description: "height the loader",
          },
          {
            name: "borderRadius",
            type: "String",
            required: "false",
            default: "0.25rem",
            description: "border radius the loader",
          },
        ],
      };
    });
    return {
      insertCode,
      importCode,
      tableProps,
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
