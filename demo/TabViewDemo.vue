<template>
  <h3>Tab View</h3>
  <p>
    Tab View display tabs of content. It can load asynchronous and with multi
    screens.
  </p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <!-- normal tab view-->
    <p>This is a normal Tab View:</p>
    <TabView
      id="demo-tab-view-1"
      :tabs-props="demo1TabsProps"
      @change-tab="tab1Change"
    >
    </TabView>
    <!-- dynamic tab view-->
    <p>This is a dynamic component Tab View:</p>
    <TabView
      id="demo-tab-view-2"
      :isDynamic="true"
      :tabs-props="demo2TabsProps"
      @change-tab="tab2Change"
    >
      <template #customComponent>
        <component
          :is="demo2TabsProps.tabs[demo2TabsProps.activeTab].content"
          :key="demo2TabsProps.tabs[demo2TabsProps.activeTab].key"
        />
      </template>
    </TabView>
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
import { TabView } from "../src";

export default {
  name: "TabViewDemo",
  components: { TabView },
  setup() {
    const insertCode = computed(() => {
      return `
<!-- normal tab view-->
<p>This is a normal Tab View:</p>
<TabView
  id="demo-tab-view-1"
  :tabs-props="demo1TabsProps"
  @change-tab="tab1Change"
>
</TabView>
<!-- dynamic tab view-->
<p>This is a dynamic component Tab View:</p>
<TabView
  id="demo-tab-view-2"
  :isDynamic="true"
  :tabs-props="demo2TabsProps"
  @change-tab="tab2Change"
>
  <template #customComponent>
    <component
      :is="demo2TabsProps.tabs[demo2TabsProps.activeTab].content"
      :key="demo2TabsProps.tabs[demo2TabsProps.activeTab].key"
    />
  </template>
</TabView>
      `;
    });
    const importCode = computed(() => {
      return `
import { TabView } from "air-vue";
      `;
    });
    const templateCode = computed(() => {
      return `
let demo1TabsProps = reactive({
  activeTab: 0, // default active tab
  tabs: [
    {
      title: "Tab 1",
      content: 'Sed malesuada gravida ex, nec tincidunt nunc tempor quis. 
        Nunc sapien orci, accumsan non mollis congue, scelerisque 
        at metus. Donec porta euismod convallis. Ut suscipit dolor 
        risus, sed ultricies tellus pellentesque et.',
      key: "tab-1",
    },
    {
      title: "Tab 2",
      content: "Tab-2-content",
      key: "tab-2",
    },
    {
      title: "Tab 3",
      content: "Tab-3-content",
      key: "tab-3",
    },
  ],
});
let demo2TabsProps = reactive({
  activeTab: 1,  // default active tab
  tabs: [
    {
      title: "Tab 1",
      content: markRaw(
        defineAsyncComponent(() => import("./dummy/DynamicLoadDummy-0.vue"))
      ),
      key: "tab-1",
    },
    {
      title: "Tab 2",
      content: markRaw(
        defineAsyncComponent(() => import("./dummy/DynamicLoadDummy-1.vue"))
      ),
      key: "tab-2",
    },
  ],
});
const tab1Change = (event) => {
  demo1TabsProps.activeTab = event.index;
};
const tab2Change = (event) => {
  demo2TabsProps.activeTab = event.index;
};
      `;
    });
    let demo1TabsProps = reactive({
      activeTab: 0, // default active tab
      tabs: [
        {
          title: "Tab 1",
          content: `Sed malesuada gravida ex, nec tincidunt nunc tempor quis. 
            Nunc sapien orci, accumsan non mollis congue, scelerisque 
            at metus. Donec porta euismod convallis. Ut suscipit dolor 
            risus, sed ultricies tellus pellentesque et.`,
          key: "tab-1",
        },
        {
          title: "Tab 2",
          content: "Tab-2-content",
          key: "tab-2",
        },
        {
          title: "Tab 3",
          content: "Tab-3-content",
          key: "tab-3",
        },
      ],
    });
    let demo2TabsProps = reactive({
      activeTab: 1, // default active tab
      tabs: [
        {
          title: "Tab 1",
          content: markRaw(
            defineAsyncComponent(() => import("./dummy/DynamicLoadDummy-0.vue"))
          ),
          key: "tab-1",
        },
        {
          title: "Tab 2",
          content: markRaw(
            defineAsyncComponent(() => import("./dummy/DynamicLoadDummy-1.vue"))
          ),
          key: "tab-2",
        },
      ],
    });
    const tab1Change = (event) => {
      demo1TabsProps.activeTab = event.index;
    };
    const tab2Change = (event) => {
      demo2TabsProps.activeTab = event.index;
    };
    return {
      insertCode,
      importCode,
      templateCode,
      demo1TabsProps,
      demo2TabsProps,
      tab1Change,
      tab2Change,
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
