<template>
  <h3>Search Bar</h3>
  <p>Search Bar is used to search.</p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <SearchBar
      width="200px"
      :search-props="searchProps"
      @submit-search="submitSearchEvent"
    />
    <div>
      This is the value return from Search:
      {{ searchEventReturnValue.returnValue }}
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
import { computed, reactive } from "vue";
import SearchBar from "../components/SearchBar.vue";
export default {
  name: "SearchBarDemo",
  components: { SearchBar },
  setup() {
    let searchEventReturnValue = reactive({
      returnValue: "keyword",
    });
    const insertCode = computed(() => {
      return `
<SearchBar
  width="200px"
  :search-props="searchProps"
  @submit-search="submitSearchEvent"
/>
      `;
    });
    const importCode = computed(() => {
      return `
import SearchBar from "../components/SearchBar.vue";
      `;
    });
    const templateCode = computed(() => {
      return `
const searchProps = computed(() => {
    return {
        placeholder: "Search Something", // optional
    };
});
const submitSearch = (event) => {
    // Do something with the event
    searchEventReturnValue.returnValue = event;
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
      searchEventReturnValue.returnValue = event;
    };
    return {
      searchEventReturnValue,
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
