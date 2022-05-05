<template>
  <h3>Customized Button</h3>
  <p>
    Customized Button is used to be clicked. It will emit and event once button
    clicked.
  </p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <CustomizedButton
      id="demo-customized-button-1"
      button-text="Primary Button"
      width="180px"
      level="av-btn-primary"
      @click-button="clickButtonEvent"
    />
    <div>
      Button clicked:
      <span id="demo-customized-button-1-value">0</span> times.
    </div>
    <br />
    <CustomizedButton
      id="demo-customized-button-2"
      button-text="Secondary Button"
      width="180px"
      level="av-btn-secondary"
      @click-button="clickButtonEvent"
    />
    <div>
      Button clicked:
      <span id="demo-customized-button-2-value">0</span> times.
    </div>
    <br />
    <CustomizedButton
      id="demo-customized-button-3"
      button-text="Disabled Button"
      :disabled="disabledButtonProps"
      @click-button="clickButtonEvent"
    />
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
import { CustomizedButton, DataTable } from "../src";
export default {
  name: "CustomizedButtonDemo",
  components: { CustomizedButton, DataTable },
  setup() {
    const insertCode = computed(() => {
      return `
<!-- Primary Button -->
<CustomizedButton
  id="demo-customized-button-1"
  button-text="Primary Button"
  width="180px"
  level="av-btn-primary"
  @click-button="clickButtonEvent"
/>
<!-- Secondary Button -->
<CustomizedButton
  id="demo-customized-button-2"
  button-text="Secondary Button"
  width="180px"
  level="av-btn-secondary"
  @click-button="clickButtonEvent"
/>
<!-- Disabled Button -->
<CustomizedButton
  id="demo-customized-button-3"
  button-text="Disabled Button"
  :disabled="disabledButtonProps"
  @click-button="clickButtonEvent"
/>
      `;
    });
    const importCode = computed(() => {
      return `
import { CustomizedButton } from "air-vue";
      `;
    });
    const templateCode = computed(() => {
      return `
const disabledButtonProps = computed(() => {
  return {
    disabled: true, // optional
  };
});
const clickButtonEvent = (event) => {
  // Do something with the event
  document.querySelector("#" + event.id + "-value").innerHTML =
    parseInt(document.querySelector("#" + event.id + "-value").innerHTML) + 1;
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
            description: "identifier of the button",
          },
          {
            name: "button-text",
            type: "String",
            required: "true",
            default: "-",
            description: "text on button",
          },
          {
            name: "width",
            type: "string",
            required: "false",
            default: "200px",
            description: "width of the button",
          },
          {
            name: "level",
            type: "String",
            required: "false",
            default: "",
            description: "button level",
          },
          {
            name: "disabled",
            type: "Boolean",
            required: "false",
            default: "false",
            description: "button disabled",
          },
          {
            name: "click-button",
            type: "<Event>",
            required: "true",
            default: "-",
            description: "event when button clicked",
          },
        ],
      };
    });
    const disabledButtonProps = computed(() => {
      return {
        disabled: true, // optional
      };
    });
    const clickButtonEvent = (event) => {
      // Do something with the event
      document.querySelector("#" + event.id + "-value").innerHTML =
        parseInt(document.querySelector("#" + event.id + "-value").innerHTML) +
        1;
    };
    return {
      insertCode,
      importCode,
      templateCode,
      tableProps,
      disabledButtonProps,
      clickButtonEvent,
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
