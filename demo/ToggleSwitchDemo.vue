<template>
  <h3>Toggle Switch</h3>
  <p>Toggle Switch is used to toggle.</p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <ToggleSwitch
      id="demo-toggle-switch"
      :checked="true"
      :toggle-props="toggleProps"
      @toggle-switch="toggleSwitchEvent"
    />
    <div>
      This is the value return from Toggle:
      <span id="demo-toggle-switch-value"></span>
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
import { ToggleSwitch, DataTable } from "../src";

export default {
  name: "ToggleSwitchDemo",
  components: { ToggleSwitch, DataTable },
  setup() {
    const insertCode = computed(() => {
      return `
<ToggleSwitch
  id="demo-toggle-switch"
  :checked="false"
  :toggle-props="toggleProps"
  @toggle-switch="toggleSwitchEvent"
/>
      `;
    });
    const importCode = computed(() => {
      return `
import { ToggleSwitch } from "air-vue";
      `;
    });
    const templateCode = computed(() => {
      return `
const toggleProps = computed(() => {
  return {
    label: "Toggle Switch",
  };
});
const toggleSwitchEvent = (event) => {
  // Do something with the event
  document.querySelector("#" + event.id + "-value").innerHTML = event.state;
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
            name: "checked",
            type: "Boolean",
            required: "true",
            default: "false",
            description: "default checked state",
          },
          {
            name: "toggle-props",
            type: "Object",
            required: "false",
            default: "-",
            description: "label for the switch",
          },
          {
            name: "toggle-switch",
            type: "<Event>",
            required: "true",
            default: "-",
            description: "received state when event is triggered",
          },
        ],
      };
    });
    const toggleProps = computed(() => {
      return {
        label: "Toggle Switch",
      };
    });
    const toggleSwitchEvent = (event) => {
      // Do something with the event
      document.querySelector("#" + event.id + "-value").innerHTML = event.state;
    };
    return {
      insertCode,
      importCode,
      templateCode,
      tableProps,
      toggleProps,
      toggleSwitchEvent,
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
