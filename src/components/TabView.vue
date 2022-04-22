<template>
  <div class="tab-view-wrapper" :id="id">
    <ul class="av-tabs">
      <li
        :class="['av-tab-title', { active: index === currentActiveTab.index }]"
        v-for="(tab, index) in tabsProps.tabs"
        :key="index"
        :style="tabTitleStyle"
        @click="changeTab(index, id)"
      >
        {{ tab.title }}
      </li>
    </ul>
    <div class="av-tab-content">
      <div class="av-tab-plain-content"></div>
      <div>
        <slot name="customComponent"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
export default {
  name: "TabView",
  props: {
    id: {
      type: String,
      required: true,
    },
    isDynamic: {
      type: Boolean,
      default: false,
    },
    tabsProps: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ["change-tab"],
  setup(props, { emit }) {
    let tabTitleStyle = computed(() => {
      return `width: ${100 / props.tabsProps.tabs.length}%;`;
    });
    let currentActiveTab = reactive({
      index: props.tabsProps.activeTab,
    });
    let changeTab = (index, id) => {
      emit("change-tab", { id: props.id, index: index });
      currentActiveTab.index = index;
      props.isDynamic
        ? null
        : (document.querySelector(
            `#${id} .av-tab-content .av-tab-plain-content`
          ).innerHTML = props.tabsProps.tabs[index].content);
    };
    onMounted(() => {
      changeTab(currentActiveTab.index, props.id);
    });
    return {
      tabTitleStyle,
      currentActiveTab,
      changeTab,
    };
  },
};
</script>

<style lang="scss" scoped>
.tab-view-wrapper {
  width: 100%;
  margin: 20px 0 20px 0;
  .av-tabs {
    top: 0;
    margin: 0;
    .av-tab-title {
      list-style: none;
      display: inline-block;
      text-align: center;
      background: var(--color-background-soft);
      cursor: pointer;
      height: 30px;
      font-weight: 300;
      border-top-left-radius: var(--input-radius);
      border-top-right-radius: var(--input-radius);
      border-top: var(--color-border) 1px solid;
      border-left: var(--color-border) 1px solid;
      border-right: var(--color-border) 1px solid;
      transition: 0.3s;
      &.active {
        color: var(--color-text-strong);
        font-weight: 500;
        border-bottom: var(--green) 2px solid;
        background: var(--color-background-mute);
        transition: 0.5s;
      }
    }
  }
  .av-tab-content {
    background: var(--color-background-mute);
    border: var(--color-border) 1px solid;
    padding: 20px;
  }
}
</style>
