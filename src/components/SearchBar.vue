<template>
  <div class="search-wrapper" :style="searchStyle">
    <div class="icon-search icons" @click="submitSearch(keyword)"></div>
    <input
      type="text"
      v-model="keyword"
      class="search-input"
      :placeholder="searchProps.placeholder"
      @keyup.enter="submitSearch(keyword)"
    />
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "SearchBar",
  props: {
    width: {
      type: String,
      default: "",
    },
    searchProps: {
      type: Object,
      required: true,
    },
  },
  emits: ["submit-search"],
  setup(props, { emit }) {
    let keyword = "";
    const searchStyle = computed(() => {
      return props.width !== null ? `width: ${props.width}` : "";
    });
    const submitSearch = (keyword) => {
      emit("submit-search", keyword);
    };
    return { keyword, searchStyle, submitSearch };
  },
};
</script>

<style lang="scss" scoped>
.search-wrapper {
  position: relative;
  .icon-search {
    background: url("../assets/icons/LinearIconsSVG/magnifier.svg");
    position: absolute;
    right: 7px;
    top: 20%;
  }
  .search-input {
    text-overflow: ellipsis;
    padding-right: 30px;
  }
}
</style>
