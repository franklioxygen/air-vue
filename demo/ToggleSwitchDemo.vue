<template>
  <h3>Toggle Switch</h3>
  <p>Toggle Switch is used to toggle.</p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <ToggleSwitch
      id="demo-toggle-switch"
      :checked="checked.value"
      :toggle-props="toggleProps"
      @toggle-switch="toggleSwitchEvent"
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
import { ToggleSwitch } from "../src";

export default {
  name: "ToggleSwitchDemo",
  components: { ToggleSwitch },
  setup() {
    const insertCode = computed(() => {
      return `
<ToggleSwitch
  id="demo-toggle-switch"
  :checked="checked.value"
  :toggle-props="toggleProps"
  @toggle-switch="toggleButtonEvent"
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
const checked = reactive({
    value: false,
});
const toggleProps = computed(() => {
    return {
        label: "Toggle Switch",
    };
});
const toggleSwitchEvent = (event) => {
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
        label: "Toggle Switch",
      };
    });
    const toggleSwitchEvent = (event) => {
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
