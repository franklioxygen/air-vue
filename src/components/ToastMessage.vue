<template>
  <div class="toast-msgs-wrapper">
    <div v-for="message in messagesWrapper.messages" :key="message">
      <div :class="['toast-msg', 'collapsed', message.status]" :id="message.id">
        <div :class="['icons-msg', 'icons', message.type]"></div>
        <div class="count-down"></div>
        <div :class="['toast-msg-content', message.status]">
          <div :class="['msg-type-name', message.type]">{{ message.type }}</div>
          <div v-html="message.content"></div>
        </div>
        <div
          :class="['icon-close icons', message.status]"
          @click="closeMsg(message.id)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToastMessage",
  props: {
    messagesWrapper: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ["remove-msg-from-array"],
  setup(props, { emit }) {
    const rafAsync = () => {
      return new Promise((resolve) => {
        requestAnimationFrame(resolve);
      });
    };
    const checkElement = (selector) => {
      if (document.querySelector(selector) === null) {
        return rafAsync().then(() => checkElement(selector));
      } else {
        return Promise.resolve(true);
      }
    };

    const openMsg = (id, duration) => {
      checkElement(`#${id}`).then(() => {
        const element = document.getElementById(id);
        const countdownDOM = element.querySelector(".count-down");
        element.classList.remove("collapsed");
        element.classList.add("expanded");
        if (duration !== 0) {
          updateCountdownMsg(countdownDOM, duration);
          setTimeout(() => {
            countdownDOM.textContent = "";
            closeMsg(id);
          }, duration + 1000);
        }
      });
    };
    const closeMsg = (id) => {
      const element = document.getElementById(id);
      new Promise((resolve) => {
        element.classList.remove("expanded");
        element.classList.add("collapsed");
        resolve();
      }).then(() => {
        setTimeout(() => {
          emit("remove-msg-from-array", id);
        }, 300);
      });
    };
    const updateCountdownMsg = (countdownDOM, duration) => {
      let seconds = duration / 1000 + 1;
      const timeInterval = setInterval(() => {
        seconds--;
        countdownDOM.textContent = `Closing in ${seconds}s.`;
        seconds <= 0 ? clearInterval(timeInterval) : null;
      }, 1000);
    };
    return {
      openMsg,
      closeMsg,
    };
  },
};
</script>

<style lang="scss" scoped>
.toast-msgs-wrapper {
  position: fixed;
  top: 10px;
  left: calc(50% - 200px);
  z-index: 30;
  @media only screen and (max-width: 640px) {
    width: calc(100vw - 20px);
    left: 0;
    top: 0;
  }
  div {
    .toast-msg {
      position: relative;
      top: 10px;
      background-color: var(--color-background-soft);
      border: 1px solid var(--color-border);
      width: 400px;
      border-radius: var(--input-radius);
      padding: 10px;
      color: var(--color-text);
      margin-bottom: 10px;
      box-shadow: 0 0 10px var(--color-background-highlight);
      display: none;
      .count-down {
        font-size: var(--label-text-size);
        margin-top: 5px;
        display: inline-block;
        position: absolute;
        right: 50px;
      }
      @media only screen and (max-width: 640px) {
        width: 100vw;
        left: 0;
        top: 0;
      }
      &.expanded {
        transition: max-height 0.3s ease-in-out;
        overflow: hidden;
        max-height: 1000px;
        display: block;
      }
      &.collapsed {
        display: block;
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
        background-size: 30px;
        width: 30px;
        height: 30px;
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
      .toast-msg-content {
        display: inline-block;
        width: calc(100% - 50px);
        &.collapsed {
          display: none;
        }
      }
    }
  }
}
</style>
