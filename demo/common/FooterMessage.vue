<template>
  <span class="footer-message" v-html="rawHtml"></span>
</template>

<script>
import { computed } from "vue";
import packageJson from "../../package.json";
export default {
  name: "FooterMessage",
  setup() {
    const rawHtml = computed(() => {
      return `AirVue ${packageJson.version} on Vue.js 3 by <a target="_blank" href="https://franklioxygen.com">franklioxygen</a> - <a target="_blank" href="https://github.com/franklioxygen/air-vue/issues">Issue Report</a>`;
    });
    return {
      rawHtml,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer-message {
  padding: 20px;
  text-align: center;
  font-size: small;
  position: absolute;
  bottom: 0;
  padding: 0 0 20px 0;
  a {
    color: #999;
  }
}
</style>
