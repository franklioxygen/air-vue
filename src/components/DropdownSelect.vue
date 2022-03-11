<template>
  <div class="dropdown-wrapper" :style="dropdownStyle">
    <span class="dropdown-title">{{ dropdownProps.title }}</span>
    <select class="dropdown" @change="applyDropdown">
      <option
        v-show="dropdownProps.default === false"
        value="invalid"
        disabled=""
        selected="true"
      >
        {{ dropdownProps.placeholder }}
      </option>
      <option
        v-for="(option, index) in dropdownProps.options"
        :key="index"
        :value="option.value"
        :selected="dropdownProps.default === index"
      >
        {{ option.label }}
      </option>
    </select>
    <span class="icons icon-dropdown"></span>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "DropdownSelect",
  props: {
    width: {
      type: String,
      default: "",
    },
    dropdownProps: {
      type: Object,
      required: true,
    },
  },
  emits: ["apply-dropdown"],
  setup(props, { emit }) {
    const dropdownStyle = computed(() => {
      return props.width !== null ? `width: ${props.width}` : "";
    });
    const applyDropdown = (event) => {
      emit("apply-dropdown", event.target.value);
    };
    return {
      dropdownStyle,
      applyDropdown,
    };
  },
};
</script>

<style lang="scss" scoped>
.dropdown-wrapper {
  position: relative;
  .icon-dropdown {
    background: url("../assets/icons/LinearIconsSVG/chevron-down.svg");
    position: absolute;
    right: 7px;
    top: 55%;
    pointer-events: none;
  }
}
</style>
