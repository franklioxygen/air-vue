<template>
  <h3>Introduction</h3>
  <p>Air Vue is a set of open source components library for Vue3.</p>
  <p>It's light weight and implemented with Composition API</p>
  <p>
    The vision of this project is to build a easy-to-use, responsive, accessible
    and performant UI library.
  </p>
  <p>Contributions are welcomed.</p>

  <h5>Setup:</h5>
  <highlightjs language="cmd" :code="installGuide" />
  <h5>Usage:</h5>
  <highlightjs language="js" :code="usageGuide" />
  <FooterMessage />
</template>
<script>
import { computed } from "vue";
import FooterMessage from "./common/FooterMessage.vue";
export default {
  name: "CustomizedButtonDemo",
  components: {
    FooterMessage,
  },
  setup() {
    const installGuide = computed(() => {
      return `npm install air-vue --save`;
    });
    const usageGuide = computed(() => {
      return `//main.js
import "air-vue/dist/style.css";
// App.vue 
// Import a Component
import { ComponentNameHere } from "air-vue";
`;
    });
    return {
      installGuide,
      usageGuide,
    };
  },
};
</script>

<style></style>
