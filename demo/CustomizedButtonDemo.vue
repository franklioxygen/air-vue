<template>
  <h3>Customized Button</h3>
  <p>
    Customized Button is used to be clicked. It will emit and event once button
    clicked.
  </p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <CustomizedButton
      button-text="Primary Button"
      width="180px"
      level="av-btn-primary"
      @click-button="clickButtonEvent"
    />
    <div>
      Button clicked:
      {{ buttonEventReturnValue.clickCounter }} times.
    </div>
    <br />
    <CustomizedButton
      button-text="Secondary Button"
      width="180px"
      level="av-btn-secondary"
    />
    <br />
    <CustomizedButton
      button-text="Disabled Button"
      :button-props="disabledButtonProps"
      @click-button="clickButtonEvent"
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
import { computed, reactive } from "vue";
import CustomizedButton from "../src/components/CustomizedButton.vue";
export default {
  name: "CustomizedButtonDemo",
  components: { CustomizedButton },
  setup() {
    let buttonEventReturnValue = reactive({
      clickCounter: 0,
    });
    const insertCode = computed(() => {
      return `
<CustomizedButton
  button-text="Primary Button"
  width="180px"
  level="av-btn-primary"
  @click-button="clickButtonEvent"
/>
<div>
  Button clicked:
  {{ buttonEventReturnValue.clickCounter }} times.
</div>
<CustomizedButton
  button-text="Secondary Button"
  width="180px"
  level="av-btn-secondary"
/>
<CustomizedButton
  button-text="Disabled Button"
  :button-props="disabledButtonProps"
  @click-button="clickButtonEvent"
/>
      `;
    });
    const importCode = computed(() => {
      return `
import CustomizedButton from "../src/components/CustomizedButton.vue";
      `;
    });
    const templateCode = computed(() => {
      return `
const disabledButtonProps = computed(() => {
    return {
    disabled: true, // optional
    };
});
const clickButtonEvent = () => {
    buttonEventReturnValue.clickCounter += 1;
};
      `;
    });
    const disabledButtonProps = computed(() => {
      return {
        disabled: true, // optional
      };
    });
    const clickButtonEvent = () => {
      buttonEventReturnValue.clickCounter += 1;
    };
    return {
      buttonEventReturnValue,
      insertCode,
      importCode,
      templateCode,
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
