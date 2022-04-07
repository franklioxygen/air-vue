<template>
  <div :class="['inline-msg-wrapper', messageProps.status]">
    <div :class="['icons-msg', 'icons', type]"></div>
    <div :class="['inline-msg-content', messageProps.status]">
      <div :class="['msg-type-name', type]">{{ type }}</div>
      {{ messageProps.content }}
    </div>
    <div
      :class="['icon-close icons', messageProps.status]"
      @click="closeMsg()"
    ></div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "InlineMessage",
  props: {
    expanded: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "info",
    },
    content: {
      type: String,
      default: "",
    },
  },
  emits: ["close-msg"],
  setup(props) {
    const messageProps = reactive({
      status: props.expanded ? "expanded" : "collapsed",
      content: props.content,
    });
    const openMsg = () => {
      new Promise((resolve) => {
        closeMsg();
        resolve();
      }).then(() => {
        setTimeout(() => {
          messageProps.status = "expanded";
          messageProps.content = props.content;
        }, 300);
      });
    };
    const closeMsg = () => {
      messageProps.content = "";
      messageProps.status = "collapsed";
    };
    return {
      messageProps,
      openMsg,
      closeMsg,
    };
  },
};
</script>

<style lang="scss" scoped>
.inline-msg-wrapper {
  position: relative;
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  width: 100%;
  border-radius: var(--input-radius);
  padding: 10px;
  color: var(--color-text);
  margin-bottom: 10px;
  &.expanded {
    transition: max-height 0.3s ease-in-out;
    overflow: hidden;
    max-height: 1000px;
  }
  &.collapsed {
    transition: 0.3s;
    max-height: 0;
    padding: 0;
    margin: 0;
    border: 0;
    opacity: 0;
  }

  .icons-msg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 7px;
    cursor: auto;
    top: 2px;
    vertical-align: top;
    &.success {
      background: url("../assets/icons/LinearIconsSVG/checkmark-circle.svg");
    }
    &.warning {
      background: url("../assets/icons/LinearIconsSVG/warning.svg");
    }
    &.failed {
      background: url("../assets/icons/LinearIconsSVG/cross-circle.svg");
    }
    &.info {
      background: url("../assets/icons/LinearIconsSVG/bullhorn.svg");
    }
  }
  .icon-close {
    display: inline-block;
    background: url("../assets/icons/LinearIconsSVG/cross.svg");
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    &.collapsed {
      display: none;
    }
  }
  .msg-type-name {
    display: inline-block;
    margin-right: 5px;
    font-weight: 700;

    &.success {
      color: rgb(0, 114, 0);
    }
    &.warning {
      color: rgb(196, 196, 19);
    }
    &.failed {
      color: rgb(191, 0, 0);
    }
    &.info {
      color: rgb(21, 109, 197);
    }
  }
  .msg-type-name::first-letter {
    text-transform: capitalize;
  }
  .inline-msg-content {
    display: inline-block;
    width: calc(100% - 50px);
    &.collapsed {
      display: none;
    }
  }
}
</style>
