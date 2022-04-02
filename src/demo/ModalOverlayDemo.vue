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

    <span @click="loadDefaultModal()">Click to load default modal</span><br />
    <span @click="loadMultiScreenModal()">
      Click to load dynamic component modal with multi screen in default
      size</span
    ><br />
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
import { computed, reactive, defineAsyncComponent, markRaw } from "vue";
import ModalOverlay from "../components/ModalOverlay.vue";

export default {
  name: "ModalOverlayDemo",
  components: { ModalOverlay },
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
          defineAsyncComponent(() =>
            import(
              /* webpackChunkName: "DynamicLoadDummy" */
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
              /* webpackChunkName: "DynamicLoadDummy" */
              "./dummy/DynamicLoadDummy-1.vue"
            )
          )
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
import ModalTemplate from "../components/ModalTemplate.vue";
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
          /* webpackChunkName: "DynamicLoadDummy" */
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
          /* webpackChunkName: "DynamicLoadDummy" */
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
