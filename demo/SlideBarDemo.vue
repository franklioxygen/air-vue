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
import { SlideBar } from "../src";
export default {
  name: "SlideBarDemo",
  components: { SlideBar },
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

    const slideChangeEvent = (event) => {
      // Do something with the event
      document.querySelector("#" + event.id + "-value").innerHTML =
        event.number;
    };
    return {
      insertCode,
      importCode,
      templateCode,
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
