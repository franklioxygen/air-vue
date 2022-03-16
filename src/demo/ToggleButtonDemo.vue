<template>
  <h3>Toggle Button</h3>
  <p>Toggle Button is used to toggle.</p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <ToggleButton
      id="demo-toggle-button"
      :checked="checked.value"
      :toggle-props="toggleProps"
      @toggle-button="toggleButtonEvent"
    />
    <div>
      This is the value return from Toggle:
      {{ toggleEventReturnValue.returnValue }}
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
import ToggleButton from "../components/ToggleButton.vue";

export default {
  name: "ToggleButtonDemo",
  components: { ToggleButton },
  setup() {
    const insertCode = computed(() => {
      return `
<ToggleButton
  id="demo-toggle-button"
  :checked="checked.value"
  :toggle-props="toggleProps"
  @toggle-button="toggleButtonEvent"
/>
      `;
    });
    const importCode = computed(() => {
      return `
import ToggleButton from "../components/ToggleButton.vue";
      `;
    });
    const templateCode = computed(() => {
      return `
const checked = reactive({
    value: false,
});
const toggleProps = computed(() => {
    return {
        label: "Toggle Button",
    };
});
const toggleButtonEvent = (event) => {
    // Do something with the event
    toggleEventReturnValue.returnValue = event;
};
      `;
    });
    const checked = reactive({
      value: false,
    });
    let toggleEventReturnValue = reactive({
      returnValue: checked.value,
    });
    const toggleProps = computed(() => {
      return {
        label: "Toggle Button",
      };
    });
    const toggleButtonEvent = (event) => {
      // Do something with the event
      toggleEventReturnValue.returnValue = event;
    };
    return {
      toggleEventReturnValue,
      checked,
      toggleProps,
      insertCode,
      importCode,
      templateCode,
      toggleButtonEvent,
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
