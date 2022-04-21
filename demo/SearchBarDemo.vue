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
import { SearchBar } from "../src";
export default {
  name: "SearchBarDemo",
  components: { SearchBar },
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
