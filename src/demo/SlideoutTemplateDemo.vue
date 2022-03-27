<template>
  <h3>Slideout Template</h3>
  <p>
    Slideout Template is to open a slideout from right or left side. It can load
    asynchronous and with multi screens.
  </p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <SlideoutTemplate
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
    </SlideoutTemplate>

    <span @click="loadDefaultSlideout()">Click to load default slideout</span
    ><br />
    <span @click="loadMultiScreenSlideout()">
      Click to load dynamic component slideout with multi screen</span
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
import SlideoutTemplate from "../components/SlideoutTemplate.vue";

export default {
  name: "SlideoutTemplateDemo",
  components: { SlideoutTemplate },
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
          defineAsyncComponent(() =>
            import(
              /* webpackChunkName: "DynamicLoadDummy" */
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
<SlideoutTemplate
  :expanded="slideoutProps.expanded"
  :backable="dynamicComponent.components.length > 2"
  :side="slideoutProps.side"
  @back-screen="backScreen"
>
  <!-- normal title content slideout slots (optional)-->
  <template #title>
    {{ slideoutProps.title }}
  </template>
  <template #content>
    {{ slideoutProps.content }}
  </template>
  <!-- dynamic load component slot (optional)-->
  <template #customComponent>
    <component
      v-if="dynamicComponent.components.length > 1"
      :is="dynamicComponent.components[0].component"
      :key="dynamicComponent.components[0].key"
      @add-screen="addScreen"
    />
  </template>
</SlideoutTemplate>
      `;
    });
    const importCode = computed(() => {
      return `
import SlideoutTemplate from "../components/SlideoutTemplate.vue";
      `;
    });
    const templateCode = computed(() => {
      return `
// define named slots slideout example
let slideoutProps = reactive({
  expanded: false,
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
          /* webpackChunkName: "DynamicLoadDummy" */
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
