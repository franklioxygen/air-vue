<template>
  <h3>Modal Overlay</h3>
  <p>
    Modal Overlay is to open a modal on center of screen. It can load
    asynchronous and with multi screens.
  </p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <ModalOverlay
      :opened="modalProps.opened"
      :backable="dynamicComponent.components.length > 2"
      :height="modalProps.height"
      :width="modalProps.width"
      @back-screen="backScreen"
    >
      <!-- normal named Modal slots (optional)-->
      <template #title>
        {{ modalProps.title }}
      </template>
      <template #content>
        {{ modalProps.content }}
      </template>
      <!-- load dynamic component slot (optional)-->
      <template #customComponent>
        <component
          v-if="dynamicComponent.components.length > 1"
          :is="dynamicComponent.components[0].component"
          :key="dynamicComponent.components[0].key"
          @add-screen="addScreen"
        />
      </template>
    </ModalOverlay>

    <CustomizedButton
      id="default-modal-button"
      button-text="Default Modal"
      width="300px"
      level="av-btn-primary"
      @click-button="loadDefaultModal()"
    />
    <CustomizedButton
      id="dynamic-component-modal-button"
      button-text="Dynamic component Modal"
      width="300px"
      level="av-btn-primary"
      @click-button="loadMultiScreenModal()"
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
import { computed, reactive, defineAsyncComponent, markRaw } from "vue";
import { ModalOverlay, CustomizedButton, DataTable } from "../src";
import FooterMessage from "./common/FooterMessage.vue";
export default {
  name: "ModalOverlayDemo",
  components: { ModalOverlay, CustomizedButton, DataTable, FooterMessage },
  setup() {
    // define named slots modal example
    let modalProps = reactive({
      title: "Default modal Title",
      content: "Default modal Content",
    });
    // define dynamic component modal example
    let dynamicComponent = reactive({
      components: [{}],
    });
    // toggle modal and initial it
    const toggleModal = () => {
      dynamicComponent.components = [{}];
      modalProps.title = null;
      modalProps.content = null;
      modalProps.height = undefined;
      modalProps.width = undefined;
      modalProps.opened = !modalProps.opened;
    };
    // this is how to apply a normal named slots modal
    // open from right is default
    const loadDefaultModal = () => {
      toggleModal();
      modalProps.title = "Modal Title";
      modalProps.content = "Modal Content";
    };
    // this is how to load dynamic component Modal
    const loadMultiScreenModal = () => {
      toggleModal();
      modalProps.height = "400";
      modalProps.width = "600";
      dynamicComponent.components.unshift({
        key: "dummy-component-2",
        component: markRaw(
          defineAsyncComponent(() => import("./dummy/DynamicLoadDummy-2.vue"))
        ),
      });
    };
    // this is how to add screen in a existing Modal
    const addScreen = () => {
      dynamicComponent.components.unshift({
        key: "dummy-component-1",
        component: markRaw(
          defineAsyncComponent(() => import("./dummy/DynamicLoadDummy-1.vue"))
        ),
      });
    };
    const backScreen = () => {
      dynamicComponent.components.shift();
    };
    const insertCode = computed(() => {
      return `
<ModalOverlay
  :opened="modalProps.opened"
  :backable="dynamicComponent.components.length > 2"
  :height="modalProps.height"
  :width="modalProps.width"
  @back-screen="backScreen"
>
  <!-- normal named Modal slots (optional)-->
  <template #title>
    {{ modalProps.title }}
  </template>
  <template #content>
    {{ modalProps.content }}
  </template>
  <!-- load dynamic component slot (optional)-->
  <template #customComponent>
    <component
      v-if="dynamicComponent.components.length > 1"
      :is="dynamicComponent.components[0].component"
      :key="dynamicComponent.components[0].key"
      @add-screen="addScreen"
    />
  </template>
</ModalOverlay>
      `;
    });
    const importCode = computed(() => {
      return `
import { ModalTemplate } from "air-vue";
      `;
    });
    const templateCode = computed(() => {
      return `
// define named slots modal example
let modalProps = reactive({
  title: "Default modal Title",
  content: "Default modal Content",
});
// define dynamic component modal example
let dynamicComponent = reactive({
  components: [{}],
});
// toggle modal and initial it
const toggleModal = () => {
  dynamicComponent.components = [{}];
  modalProps.title = null;
  modalProps.content = null;
  modalProps.height = undefined;
  modalProps.width = undefined;
  modalProps.opened = !modalProps.opened;
};
// this is how to apply a normal named slots modal
// open from right is default
const loadDefaultModal = () => {
  toggleModal();
  modalProps.title = "Modal Title";
  modalProps.content = "Modal Content";
};
// this is how to load dynamic component Modal
const loadMultiScreenModal = () => {
  toggleModal();
  modalProps.height = "400";
  modalProps.width = "600";
  dynamicComponent.components.unshift({
    key: "dummy-component-2",
    component: markRaw(
      defineAsyncComponent(() =>
        import(
          "./dummy/DynamicLoadDummy-2.vue"
        )
      )
    ),
  });
};
// this is how to add screen in a existing Modal
const addScreen = () => {
  dynamicComponent.components.unshift({
    key: "dummy-component-1",
    component: markRaw(
      defineAsyncComponent(() =>
        import(
          "./dummy/DynamicLoadDummy-1.vue"
        )
      )
    ),
  });
};
const backScreen = () => {
  dynamicComponent.components.shift();
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
            name: "opened",
            type: "Boolean",
            required: "false",
            default: "false",
            description: "modal is opened or not",
          },
          {
            name: "backable",
            type: "Boolean",
            required: "false",
            default: "false",
            description: "is backable or not",
          },
          {
            name: "height",
            type: "String",
            required: "false",
            default: "400",
            description: "modal height",
          },
          {
            name: "width",
            type: "String",
            required: "false",
            default: "400",
            description: "modal width",
          },
          {
            name: "back-screen",
            type: "<Event>",
            required: "true if backable",
            default: "-",
            description: "emit change content if back screen",
          },
          {
            name: "modalProps",
            type: "Object",
            required: "false",
            default: "-",
            description: "modal content in template",
          },
          {
            name: "dynamicComponent",
            type: "Object",
            required: "false",
            default: "-",
            description: "modal content in template",
          },
        ],
      };
    });
    return {
      modalProps,
      dynamicComponent,
      toggleModal,
      loadDefaultModal,
      loadMultiScreenModal,
      addScreen,
      backScreen,
      insertCode,
      importCode,
      templateCode,
      tableProps,
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
