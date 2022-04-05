<template>
  <h3>Customized Button</h3>
  <p>
    Customized Button is used to be clicked. It will emit and event once button
    clicked.
  </p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <CustomizedButton
      buttonText="Primary Button"
      width="180px"
      :buttonProps="primaryButtonProps"
      @click-button="clickButtonEvent"
    />
    <div>
      Button clicked:
      {{ buttonEventReturnValue.clickCounter }} times.
    </div>
    <br />
    <br />
    <CustomizedButton
      buttonText="Secondary Button"
      width="180px"
      :buttonProps="secondaryButtonProps"
    />
    <br />
    <br />
    <CustomizedButton
      buttonText="Disabled Button"
      :buttonProps="disabledButtonProps"
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
import CustomizedButton from "../components/CustomizedButton.vue";
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
    buttonText="Primary Button"
    width="180px"
    :buttonProps="primaryButtonProps"
    @click-button="clickButtonEvent"
/>
<div>
    Button clicked:
    {{ buttonEventReturnValue.clickCounter }} times.
</div>

<CustomizedButton
    buttonText="Secondary Button"
    width="180px"
    :buttonProps="secondaryButtonProps"
/>

<CustomizedButton
    buttonText="Disabled Button"
    :buttonProps="disabledButtonProps"
    @click-button="clickButtonEvent"
/>
      `;
    });
    const importCode = computed(() => {
      return `
import CustomizedButton from "../components/CustomizedButton.vue";
      `;
    });
    const templateCode = computed(() => {
      return `
const primaryButtonProps = computed(() => {
    return {
    level: "vu-btn-primary",
    };
});
const secondaryButtonProps = computed(() => {
    return {
    level: "vu-btn-secondary",
    };
});
const disabledButtonProps = computed(() => {
    return {
    disabled: true, // required false or index
    };
});
const clickButtonEvent = () => {
    buttonEventReturnValue.clickCounter += 1;
};
      `;
    });
    const primaryButtonProps = computed(() => {
      return {
        level: "vu-btn-primary",
      };
    });
    const secondaryButtonProps = computed(() => {
      return {
        level: "vu-btn-secondary",
      };
    });
    const disabledButtonProps = computed(() => {
      return {
        disabled: true, // required false or index
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
      primaryButtonProps,
      secondaryButtonProps,
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
