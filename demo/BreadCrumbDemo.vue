<template>
  <h3>Bread Crumb</h3>
  <p>Bread Crumb is used to display page hierarchy</p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <BreadCrumb :bread-crumb-props="breadCrumbProps" />
    <DataTable :table-props="tableProps"></DataTable>
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
import { computed } from "vue";
import { BreadCrumb, DataTable } from "../src";
export default {
  name: "BreadCrumbDemo",
  components: { BreadCrumb, DataTable },
  setup() {
    const insertCode = computed(() => {
      return `
<BreadCrumb :bread-crumb-props="breadCrumbProps" />
      `;
    });
    const importCode = computed(() => {
      return `
import { BreadCrumb } from "air-vue";
      `;
    });
    const templateCode = computed(() => {
      return `
  const breadCrumbProps = computed(() => {
    return [
      {
        name: "Home",
        url: "#",
        target: "_blank", //target default is parent
      },
      {
        name: "Components",
        url: "#",
      },
      {
        name: "Bread Crumb",
        url: "#",
      },
    ];
  });
      `;
    });
    const breadCrumbProps = computed(() => {
      return [
        {
          name: "Home",
          url: "#",
          target: "_blank",
        },
        {
          name: "Components",
          url: "#",
        },
        {
          name: "Bread Crumb",
          url: "#",
        },
      ];
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
            name: "bread-crumb-props",
            type: "Array",
            required: "true",
            default: "-",
            description: "page hierarchy",
          },
        ],
      };
    });

    return {
      insertCode,
      importCode,
      templateCode,
      breadCrumbProps,
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
