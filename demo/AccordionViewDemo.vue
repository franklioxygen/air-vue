<template>
  <h3>Accordion</h3>
  <p>Accordion display accordions of content.</p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <!-- normal accordion view-->
    <p>This is a Accordion View:</p>
    <AccordionView
      id="demo-accordions-view-1"
      :accordions-props="demo1AccordionsProps"
    >
    </AccordionView>
    <!-- slot accordion view-->
    <p>This is a slot Accordion View with default expanded items:</p>
    <AccordionView
      :expands="[1, 2]"
      id="demo-accordions-view-2"
      :accordions-props="demo2AccordionsProps"
    >
      <!-- template name should match accordion key in props -->
      <template #accordion-1>
        <div>
          <h4>I'm Accordion 1</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            facilisis, erat eget consectetur aliquet, nisl nunc consectetur
            nisi, sed tincidunt nisl nunc eget nisl.
          </p>
        </div>
      </template>
      <template #accordion-2>
        <div>
          <h4>I'm Accordion 2</h4>
          <p>
            Donec facilisis, erat eget consectetur aliquet, nisl nunc
            consectetur nisi, sed tincidunt nisl nunc eget nisl.
          </p>
        </div>
      </template>
      <template #accordion-3>
        <div>
          <h4>I'm Accordion 3</h4>
          <p>Nisl nunc consectetur nisi, sed tincidunt nisl nunc eget nisl.</p>
        </div>
      </template>
    </AccordionView>
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
import { AccordionView } from "../src";

export default {
  name: "AccordionViewDemo",
  components: { AccordionView },
  setup() {
    const insertCode = computed(() => {
      return `
<!-- normal accordion view-->
<p>This is a Accordion View:</p>
<AccordionView
  id="demo-accordions-view-1"
  :accordions-props="demo1AccordionsProps"
>
</AccordionView>
<!-- slot accordion view-->
<p>This is a slot Accordion View with default expanded items:</p>
<AccordionView
  :expands="[1, 2]"
  id="demo-accordions-view-2"
  :accordions-props="demo2AccordionsProps"
>
  <!-- template name should match accordion key in props -->
  <template #accordion-1>
    <div>
      <h4>I'm Accordion 1</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        facilisis, erat eget consectetur aliquet, nisl nunc consectetur
        nisi, sed tincidunt nisl nunc eget nisl.
      </p>
    </div>
  </template>
  ...
</AccordionView>
      `;
    });
    const importCode = computed(() => {
      return `
import { AccordionView } from "air-vue";
      `;
    });
    const templateCode = computed(() => {
      return `
let demo1AccordionsProps = reactive({
  accordions: [
    {
      title: "Accordion 1",
      content: 'Sed malesuada gravida ex, nec tincidunt nunc tempor quis. 
        Nunc sapien orci, accumsan non mollis congue, scelerisque 
        at metus. Donec porta euismod convallis. Ut suscipit dolor 
        risus, sed ultricies tellus pellentesque et.',
      key: "accordion-1",
    },
    ...
  ],
});
let demo2AccordionsProps = reactive({
  accordions: [
    {
      title: "Accordion 1",
      content: null,
      key: "accordion-1",
    },
    ...
  ],
});
      `;
    });
    let demo1AccordionsProps = reactive({
      accordions: [
        {
          title: "Accordion 1",
          content: `Sed malesuada gravida ex, nec tincidunt nunc tempor quis. 
            Nunc sapien orci, accumsan non mollis congue, scelerisque 
            at metus. Donec porta euismod convallis. Ut suscipit dolor 
            risus, sed ultricies tellus pellentesque et.`,
          key: "accordion-1",
        },
        {
          title: "Accordion 2",
          content: "Accordion-2-content",
          key: "accordion-2",
        },
        {
          title: "Accordion 3",
          content: "Accordion-3-content",
          key: "accordion-3",
        },
      ],
    });
    let demo2AccordionsProps = reactive({
      accordions: [
        {
          title: "Accordion 1",
          content: null,
          key: "accordion-1",
        },
        {
          title: "Accordion 2",
          content: null,
          key: "accordion-2",
        },
        {
          title: "Accordion 3",
          content: null,
          key: "accordion-3",
        },
      ],
    });
    return {
      insertCode,
      importCode,
      templateCode,
      demo1AccordionsProps,
      demo2AccordionsProps,
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
