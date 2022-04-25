<template>
  <div class="accordion-view-wrapper" :id="id">
    <div class="av-accordions">
      <div
        :id="id + '-accordion-' + index"
        class="av-accordion"
        v-for="(accordion, index) in accordionsProps.accordions"
        :key="index"
      >
        <div class="av-accordion-title" @click="toggleActive(index, id)">
          {{ accordion.title }}
        </div>
        <div :id="id + '-accordion-' + index" class="av-accordion-content">
          {{ accordion.content }}
          <slot :name="accordion.key"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
export default {
  name: "AccordionView",
  props: {
    id: {
      type: String,
      required: true,
    },
    expands: {
      type: Array,
      default: () => [],
    },
    accordionsProps: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    let accordionId = (key, id) => {
      return `${id}-${key}`;
    };
    let toggleActive = (index, id) => {
      document
        .querySelector(`#${id + "-accordion-" + index}`)
        .classList.toggle("active");
    };
    onMounted(() => {
      Array.from(
        document.querySelectorAll(`#${props.id} .av-accordions`)[0].children
      ).forEach((accordion, index) => {
        if (props.expands.includes(index)) {
          accordion.classList.add("active");
        }
      });
    });
    return {
      accordionId,
      toggleActive,
    };
  },
};
</script>

<style lang="scss" scoped>
.accordion-view-wrapper {
  width: 100%;
  margin: 20px 0 20px 0;
  .av-accordions {
    top: 0;
    margin: 0;
    div {
      &.active {
        .av-accordion-title {
          color: var(--color-text-strong);
          font-weight: 500;
          border-bottom: var(--green) 1px solid;
          background: var(--color-background-mute);
          transition: 0.5s;
        }
        .av-accordion-content {
          padding: 10px 20px 30px 20px;
          height: auto;
          margin-bottom: 3px;
        }
      }
    }
    .av-accordion-title {
      list-style: none;
      display: inline-block;
      text-align: center;
      background: var(--color-background-soft);
      width: 100%;
      cursor: pointer;
      height: 35px;
      line-height: 35px;
      font-weight: 300;
      border-top-left-radius: var(--input-radius);
      border-top-right-radius: var(--input-radius);
      border-top: var(--color-border) 1px solid;
      border-left: var(--color-border) 1px solid;
      border-right: var(--color-border) 1px solid;
      transition: 0.3s;
      @media only screen and (max-width: 640px) {
        height: 40px;
        font-size: var(--label-text-size-mobile);
        line-height: 40px;
      }
    }
  }
  .av-accordion-content {
    background: var(--color-background-mute);
    border: var(--color-border) 1px solid;
    padding: 0 20px 0 20px;
    height: 0;
    transition: 0.3s;
    overflow: hidden;
  }
}
</style>
