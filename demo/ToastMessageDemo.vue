<template>
  <h3>Toast Message</h3>
  <p>Toast Message is to display message to user.</p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <span>Multiple lines message:</span><br />
    <CustomizedButton
      id="demo-toast-success-message"
      button-text="Success Message"
      width="200px"
      level="av-btn-primary"
      @click-button="popSuccessMessage()"
    />
    <br />
    <span>Message with html code:</span><br />
    <CustomizedButton
      id="demo-toast-warning-message"
      button-text="Warning Message"
      width="200px"
      level="av-btn-primary"
      @click-button="popWarningMessage()"
    />
    <br />
    <span>Delay close message:</span><br />
    <CustomizedButton
      id="demo-toast-failed-message"
      button-text="Failed Message"
      width="200px"
      level="av-btn-primary"
      @click-button="popFailedMessage()"
    />
    <br />
    <span>Normal Message:</span><br />
    <CustomizedButton
      id="demo-toast-info-message"
      button-text="Info Message"
      width="200px"
      level="av-btn-primary"
      @click-button="popInfoMessage()"
    />
    <br />
    <ToastMessage
      :messagesWrapper="toastMessages"
      ref="exampleToastMessage"
      @remove-msg-from-array="removeMsgFromArray"
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
import { ToastMessage, CustomizedButton } from "../src";

export default {
  name: "ToastMessageDemo",
  components: { ToastMessage, CustomizedButton },
  setup() {
    let toastMessages = reactive({
      messages: [],
    });
    const exampleToastMessage = ref();
    const popSuccessMessage = () => {
      const id = "msg-" + Date.now();
      exampleToastMessage.value.openMsg(id, 0);
      toastMessages.messages.push({
        id: id,
        type: "success",
        content: `
        This is a Success Message. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Vestibulum eu pharetra turpis, 
        ut congue ipsum. Nunc tincidunt ipsum ullamcorper ornare 
        fringilla. Mauris et accumsan elit, at lacinia erat. 
        Phasellus id interdum tortor. Morbi ac nunc dolor. 
        Vivamus consequat eleifend nulla in aliquam. Proin 
        facilisis faucibus sem sit amet placerat.`,
      });
    };
    const popWarningMessage = () => {
      const id = "msg-" + Date.now();
      exampleToastMessage.value.openMsg(id, 0); // 0 duration is infinite
      toastMessages.messages.push({
        id: id,
        type: "warning",
        content:
          "This is a Warning Message. For more information, please visit <a>read more</a>.",
      });
    };
    const popFailedMessage = () => {
      const id = "msg-" + Date.now();
      exampleToastMessage.value.openMsg(id, 10000); // duration in milliseconds
      toastMessages.messages.push({
        id: id,
        type: "failed",
        content: "This is a Failed Message.",
      });
    };
    const popInfoMessage = () => {
      const id = "msg-" + Date.now();
      exampleToastMessage.value.openMsg(id, 0);
      toastMessages.messages.push({
        id: id,
        type: "info",
        content: "This is a Info Message.",
      });
    };
    const removeMsgFromArray = (id) => {
      toastMessages.messages = toastMessages.messages.filter(
        (message) => message.id !== id
      );
    };
    const insertCode = computed(() => {
      return `
<ToastMessage
    :messagesWrapper="toastMessages"
    ref="exampleToastMessage"
    @remove-msg-from-array="removeMsgFromArray"
/>
      `;
    });
    const importCode = computed(() => {
      return `
import { ToastMessage } from "air-vue";
      `;
    });
    const templateCode = computed(() => {
      return `
let toastMessages = reactive({
  messages: [],
});
const exampleToastMessage = ref();
const popSuccessMessage = () => {
  const id = "msg-" + Date.now();
  exampleToastMessage.value.openMsg(id, 0);
  toastMessages.messages.push({
    id: id,
    type: "success",
    content: 'This is a Success Message.',
  });
};
const popWarningMessage = () => {
  const id = "msg-" + Date.now();
  exampleToastMessage.value.openMsg(id, 0); // 0 duration is infinite
  toastMessages.messages.push({
    id: id,
    type: "warning",
    content:
      "This is a Warning Message. For more information, please visit <a>read more</a>.",
  });
};
const popFailedMessage = () => {
  const id = "msg-" + Date.now();
  exampleToastMessage.value.openMsg(id, 10000); // duration in milliseconds
  toastMessages.messages.push({
    id: id,
    type: "failed",
    content: "This is a Failed Message.",
  });
};
const removeMsgFromArray = (id) => {
  toastMessages.messages = toastMessages.messages.filter(
    (message) => message.id !== id
  );
};
      `;
    });
    return {
      toastMessages,
      insertCode,
      importCode,
      templateCode,
      exampleToastMessage,
      popSuccessMessage,
      popWarningMessage,
      popFailedMessage,
      popInfoMessage,
      removeMsgFromArray,
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
