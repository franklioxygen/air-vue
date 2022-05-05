<template>
  <h3>Search Bar</h3>
  <p>Search Bar is used to search.</p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <SearchBar
      id="demo-search-bar"
      width="200px"
      :search-props="searchProps"
      @submit-search="submitSearchEvent"
    />
    <div>
      This is the value return from Search:
      <span id="demo-search-bar-value"></span>
    </div>
  </div>
  <DataTable :table-props="tableProps"></DataTable>
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
import { SearchBar, DataTable } from "../src";
export default {
  name: "SearchBarDemo",
  components: { SearchBar, DataTable },
  setup() {
    const insertCode = computed(() => {
      return `
<SearchBar
  id="demo-search-bar"
  width="200px"
  :search-props="searchProps"
  @submit-search="submitSearchEvent"
/>
      `;
    });
    const importCode = computed(() => {
      return `
import { SearchBar } from "air-vue";
      `;
    });
    const templateCode = computed(() => {
      return `
const searchProps = computed(() => {
  return {
    placeholder: "Search Something", // optional
  };
});
const submitSearchEvent = (event) => {
  // Do something with the event
  document.querySelector("#" + event.id + "-value").innerHTML =
    event.keyword;
};
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
            name: "id",
            type: "String",
            required: "true",
            default: "-",
            description: "identify the component",
          },
          {
            name: "width",
            type: "String",
            required: "false",
            default: "100%",
            description: "width of the component",
          },
          {
            name: "search-props",
            type: "Array",
            required: "true",
            default: "-",
            description: "placeholder for the search",
          },
          {
            name: "submit-search",
            type: "<Event>",
            required: "true",
            default: "-",
            description: "received data when event is triggered",
          },
        ],
      };
    });
    const searchProps = computed(() => {
      return {
        placeholder: "Search Something", // optional
      };
    });
    const submitSearchEvent = (event) => {
      // Do something with the event
      document.querySelector("#" + event.id + "-value").innerHTML =
        event.keyword;
    };
    return {
      insertCode,
      importCode,
      templateCode,
      tableProps,
      searchProps,
      submitSearchEvent,
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
