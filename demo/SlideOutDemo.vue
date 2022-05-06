<template>
  <h3>Slide Out</h3>
  <p>
    Slide Out is to open a slideout from right or left side. It can load
    asynchronous and with multi screens.
  </p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <SlideOut
      :expanded="slideoutProps.expanded"
      :backable="dynamicComponent.components.length > 2"
      :side="slideoutProps.side"
      @back-screen="backScreen"
    >
      <!-- normal named slideout slots (optional)-->
      <template #title>
        {{ slideoutProps.title }}
      </template>
      <template #content>
        {{ slideoutProps.content }}
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
    </SlideOut>

    <CustomizedButton
      id="default-slideout-button"
      button-text="Default Slide Out"
      width="300px"
      level="av-btn-primary"
      @click-button="loadDefaultSlideout()"
    />
    <CustomizedButton
      id="dynamic-component-slideout-button"
      button-text="Dynamic Component Slide Out"
      width="300px"
      level="av-btn-primary"
      @click-button="loadMultiScreenSlideout()"
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
import { SlideOut, CustomizedButton, DataTable } from "../src";
import FooterMessage from "./common/FooterMessage.vue";
export default {
  name: "SlideOutDemo",
  components: { SlideOut, CustomizedButton, DataTable, FooterMessage },
  setup() {
    // define named slots slideout example
    let slideoutProps = reactive({
      title: "Default Slideout Title",
      content: "Default Slideout Content",
    });
    // define dynamic component slideout example
    let dynamicComponent = reactive({
      components: [{}],
    });
    // toggle slideout and initial it
    const toggleSlideout = () => {
      dynamicComponent.components = [{}];
      slideoutProps.title = null;
      slideoutProps.content = null;
      slideoutProps.side = undefined;
      slideoutProps.expanded = !slideoutProps.expanded;
    };
    // this is how to apply a normal named slots slideout
    // open from right is default
    const loadDefaultSlideout = () => {
      toggleSlideout();
      slideoutProps.title = "Slideout Title";
      slideoutProps.content = "Slideout Content";
    };
    // this is how to load dynamic component slideout
    const loadMultiScreenSlideout = () => {
      toggleSlideout();
      // open from left side (optional)
      slideoutProps.side = "left";
      dynamicComponent.components.unshift({
        key: "dummy-component-2",
        component: markRaw(
          defineAsyncComponent(() => import("./dummy/DynamicLoadDummy-2.vue"))
        ),
      });
    };
    // this is how to add screen in a existing slideout
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
<SlideOut
  :expanded="slideoutProps.expanded"
  :backable="dynamicComponent.components.length > 2"
  :side="slideoutProps.side"
  @back-screen="backScreen"
>
  <!-- normal named slideout slots (optional)-->
  <template #title>
    {{ slideoutProps.title }}
  </template>
  <template #content>
    {{ slideoutProps.content }}
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
</SlideOut>
      `;
    });
    const importCode = computed(() => {
      return `
import { SlideOut } from "air-vue";
      `;
    });
    const templateCode = computed(() => {
      return `
// define named slots slideout example
let slideoutProps = reactive({
  title: "Default Slideout Title",
  content: "Default Slideout Content",
});

// define dynamic component slideout example
let dynamicComponent = reactive({
  components: [{}],
});

// toggle slideout and initial it
const toggleSlideout = () => {
  dynamicComponent.components = [{}];
  slideoutProps.title = null;
  slideoutProps.content = null;
  slideoutProps.side = undefined;
  slideoutProps.expanded = !slideoutProps.expanded;
};

// this is how to apply a normal named slots slideout
// open from right is default
const loadDefaultSlideout = () => {
  toggleSlideout();
  slideoutProps.title = "Slideout Title";
  slideoutProps.content = "Slideout Content";
};

// this is how to load dynamic component slideout
const loadMultiScreenSlideout = () => {
  toggleSlideout();
  // open from left side (optional)
  slideoutProps.side = "left";
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

// this is how to add screen in a existing slideout
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
            name: "expanded",
            type: "Boolean",
            required: "false",
            default: "false",
            description: "slideout is expanded or not",
          },
          {
            name: "backable",
            type: "Boolean",
            required: "false",
            default: "false",
            description: "is backable or not",
          },
          {
            name: "slide",
            type: "String",
            required: "false",
            default: "right",
            description: "slide direction",
          },
          {
            name: "back-screen",
            type: "<Event>",
            required: "true if backable",
            default: "-",
            description: "emit change content if back screen",
          },
          {
            name: "slideoutProps",
            type: "Object",
            required: "false",
            default: "-",
            description: "slideout content in template",
          },
          {
            name: "dynamicComponent",
            type: "Object",
            required: "false",
            default: "-",
            description: "slideout content in template",
          },
        ],
      };
    });
    return {
      slideoutProps,
      dynamicComponent,
      toggleSlideout,
      loadDefaultSlideout,
      loadMultiScreenSlideout,
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
