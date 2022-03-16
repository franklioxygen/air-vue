<template>
  <h3>Dropdown Select</h3>
  <p>
    Dropdown Select is used to pick an option from list. It will emit and event
    once option picked.
  </p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <DropdownSelect
      width="200px"
      :dropdown-props="dropdownProps"
      @apply-dropdown="applyDropdownEvent"
    />
    <div>
      This is the value return from Dropdown:
      {{ dropdownEventReturnValue.returnValue }}
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
import DropdownSelect from "../components/DropdownSelect.vue";
export default {
  name: "DropdownSelectDemo",
  components: { DropdownSelect },
  setup() {
    let dropdownEventReturnValue = reactive({
      returnValue: " select one",
    });
    const insertCode = computed(() => {
      return `
<DropdownSelect
  width="200px"
  :dropdown-props="dropdownProps"
  @apply-dropdown="applyDropdownEvent"
/>
      `;
    });
    const importCode = computed(() => {
      return `
import DropdownSelect from "../components/DropdownSelect.vue";
      `;
    });
    const templateCode = computed(() => {
      return `
<DropdownSelect
  width="200px"
  :dropdown-props="dropdownProps"
  @apply-dropdown="applyDropdownEvent"
/>

const dropdownProps = computed(() => {
  return {
    title: "Demo Dropdown Title", //optional
    default: false, // required false or index
    placeholder: "Select an option", // optional
    options: [
      {
        label: "Option 1",
        value: 1,
      },
      {
        label: "Option 2",
        value: 2,
      },
      {
        label: "Option 3",
        value: 3,
      },
    ],
  };
});
const applyDropdown = (event) => {
  // Do something with the event
  dropdownEventReturnValue.returnValue = event;
};
      `;
    });
    const dropdownProps = computed(() => {
      return {
        title: "Demo Dropdown Title", //optional
        default: false, // required false or index
        placeholder: "Select an option", // optional
        options: [
          {
            label: "Option 1",
            value: 1,
          },
          {
            label: "Option 2",
            value: 2,
          },
          {
            label: "Option 3",
            value: 3,
          },
        ],
      };
    });
    const applyDropdownEvent = (event) => {
      // Do something with the event
      dropdownEventReturnValue.returnValue = event;
    };
    return {
      dropdownEventReturnValue,
      insertCode,
      importCode,
      templateCode,
      dropdownProps,
      applyDropdownEvent,
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
