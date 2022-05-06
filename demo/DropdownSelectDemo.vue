<template>
  <h3>Dropdown Select</h3>
  <p>
    Dropdown Select is used to pick an option from list. It will emit and event
    once option picked.
  </p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <DropdownSelect
      id="demo-dropdown-select"
      width="200px"
      :dropdown-props="dropdownProps"
      @apply-dropdown="applyDropdownEvent"
    />
    <div>
      This is the value return from Dropdown:
      <span id="demo-dropdown-select-value"></span>
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
  <FooterMessage />
</template>

<script>
import { computed } from "vue";
import { DropdownSelect, DataTable } from "../src";
import FooterMessage from "./common/FooterMessage.vue";
export default {
  name: "DropdownSelectDemo",
  components: { DropdownSelect, DataTable, FooterMessage },
  setup() {
    const insertCode = computed(() => {
      return `
<DropdownSelect
  id="demo-dropdown-select"
  width="200px"
  :dropdown-props="dropdownProps"
  @apply-dropdown="applyDropdownEvent"
/>
      `;
    });
    const importCode = computed(() => {
      return `
import { DropdownSelect } from "air-vue";
      `;
    });
    const templateCode = computed(() => {
      return `
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
  document.querySelector("#" + event.id + "-value").innerHTML = event.value;
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
            name: "dropdown-props",
            type: "Object",
            required: "true",
            default: "-",
            description: "options for the dropdown",
          },
          {
            name: "apply-dropdown",
            type: "<Event>",
            required: "true",
            default: "-",
            description: "received data when event is triggered",
          },
        ],
      };
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
      document.querySelector("#" + event.id + "-value").innerHTML = event.value;
    };
    return {
      insertCode,
      importCode,
      templateCode,
      tableProps,
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
