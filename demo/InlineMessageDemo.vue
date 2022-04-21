<template>
  <h3>Inline Message</h3>
  <p>Inline Message is to display message to user.</p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <CustomizedButton
      id="demo-inline-success-message"
      button-text="Success Message"
      width="200px"
      level="av-btn-primary"
      @click-button="popSuccessMessage()"
    />
    <CustomizedButton
      id="demo-inline-warning-message"
      button-text="Warning Message"
      width="200px"
      level="av-btn-primary"
      @click-button="popWarningMessage()"
    />
    <CustomizedButton
      id="demo-inline-failed-message"
      button-text="Failed Message"
      width="200px"
      level="av-btn-primary"
      @click-button="popFailedMessage()"
    />
    <CustomizedButton
      id="demo-inline-info-message"
      button-text="Info Message"
      width="200px"
      level="av-btn-primary"
      @click-button="popInfoMessage()"
    />
    <InlineMessage
      :type="messageProps.type"
      :content="messageProps.content"
      :expanded="messageProps.expanded"
      ref="exampleInlineMessage"
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
import { computed, reactive, ref } from "vue";
import { InlineMessage, CustomizedButton } from "../src";
export default {
  name: "InlineMessageDemo",
  components: { InlineMessage, CustomizedButton },
  setup() {
    let messageProps = reactive({
      type: "",
      content: "",
      expanded: false,
    });
    const exampleInlineMessage = ref();
    const popSuccessMessage = () => {
      exampleInlineMessage.value.openMsg();
      messageProps.type = "success";
      messageProps.content = `
        This is a Success Message. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Vestibulum eu pharetra turpis, 
        ut congue ipsum. Nunc tincidunt ipsum ullamcorper ornare 
        fringilla. Mauris et accumsan elit, at lacinia erat. 
        Phasellus id interdum tortor. Morbi ac nunc dolor. 
        Vivamus consequat eleifend nulla in aliquam. Proin 
        facilisis faucibus sem sit amet placerat.`;
    };
    const popWarningMessage = () => {
      exampleInlineMessage.value.openMsg();
      messageProps.type = "warning";
      messageProps.content = "This is a Warning Message.";
    };
    const popFailedMessage = () => {
      exampleInlineMessage.value.openMsg();
      messageProps.type = "failed";
      messageProps.content = "This is a Failed Message.";
    };
    const popInfoMessage = () => {
      exampleInlineMessage.value.openMsg();
      messageProps.type = "info";
      messageProps.content = "This is a Info Message.";
    };
    const insertCode = computed(() => {
      return `
<InlineMessage
    :type="messageProps.type"
    :content="messageProps.content"
    :expanded="messageProps.expanded"
    ref="exampleInlineMessage"
/>
      `;
    });
    const importCode = computed(() => {
      return `
import { InlineMessage } from "air-vue";
      `;
    });
    const templateCode = computed(() => {
      return `
let messageProps = reactive({
    type: "",
    content: "",
    expanded: false,
});
const exampleInlineMessage = ref();
const popSuccessMessage = () => {
    exampleInlineMessage.value.openMsg();
    messageProps.type = "success";
    messageProps.content = "This is a Success Message.";
};
      `;
    });
    return {
      messageProps,
      insertCode,
      importCode,
      templateCode,
      exampleInlineMessage,
      popSuccessMessage,
      popWarningMessage,
      popFailedMessage,
      popInfoMessage,
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
