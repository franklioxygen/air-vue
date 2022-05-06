<template>
  <h3>Slide Bar</h3>
  <p>Slide Bar is used to slide value.</p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <!-- normal slide bar -->
    <p>This is a normal Slide Bar with default percentage:</p>
    <span id="range-slider-1-value"></span>
    <SlideBar
      id="range-slider-1"
      :default-slide-value="80"
      text-position="float-text"
      @slide-change="slideChangeEvent"
    />
    <!-- fixed text slide bar  with custom number-->
    <p>This is a fixed text Slide Bar with custom number:</p>
    <span id="range-slider-2-value"></span>
    <SlideBar
      id="range-slider-2"
      :default-slide-value="0"
      :max-slide-value="256"
      range-type="number"
      text-position="fixed-text"
      @slide-change="slideChangeEvent"
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
  <FooterMessage />
</template>

<script>
import { computed } from "vue";
import { SlideBar, DataTable } from "../src";
import FooterMessage from "./common/FooterMessage.vue";
export default {
  name: "SlideBarDemo",
  components: { SlideBar, DataTable, FooterMessage },
  setup() {
    const insertCode = computed(() => {
      return `
<!-- normal slide bar -->
<SlideBar
  id="range-slider-1"
  :default-slide-value="80"
  text-position="float-text"
  @slide-change="slideChangeEvent"
/>
<!-- fixed text slide bar  with custom number-->
<SlideBar
  id="range-slider-2"
  :default-slide-value="0"
  :max-slide-value="256"
  range-type="number"
  text-position="fixed-text"
  @slide-change="slideChangeEvent"
/>
      `;
    });
    const importCode = computed(() => {
      return `
import { SlideBar } from "air-vue"";
      `;
    });
    const templateCode = computed(() => {
      return `
const slideChangeEvent = (event) => {
  // Do something with the event
  document.querySelector("#" + event.id + "-value").innerHTML =
    event.number;
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
            description: "identifier of component",
          },
          {
            name: "default-slide-value",
            type: "Number",
            required: "false",
            default: "0",
            description: "default slide value",
          },
          {
            name: "text-position",
            type: "String",
            required: "false",
            default: "fixed-text",
            description: "text position of bar",
          },
          {
            name: "max-slide-value",
            type: "Number",
            required: "false",
            default: "100",
            description: "max value of bar",
          },
          {
            name: "range-type",
            type: "String",
            required: "false",
            default: "percentage",
            description: "number or percentage",
          },
          {
            name: "slide-change",
            type: "<Event>",
            required: "true",
            default: "-",
            description: "event when slide bar value changed",
          },
        ],
      };
    });
    const slideChangeEvent = (event) => {
      // Do something with the event
      document.querySelector("#" + event.id + "-value").innerHTML =
        event.number;
    };
    return {
      insertCode,
      importCode,
      templateCode,
      tableProps,
      slideChangeEvent,
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
