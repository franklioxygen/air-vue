<template>
  <div
    :class="[`modal-overlay-shade`, modalOpened.status ? 'opened' : '']"
    @click="toggleModal()"
  ></div>
  <div
    :class="[`modal-overlay-wrapper`, modalOpened.status ? 'opened' : '']"
    :style="modalStyle"
  >
    <div class="control-bar">
      <div class="icon-back" v-show="backable" @click="backScreen()"></div>
      <div class="icon-close" @click="toggleModal()"></div>
    </div>
    <div class="modal-body-container">
      <h4>
        <slot name="title"></slot>
      </h4>
      <div>
        <slot name="content"></slot>
      </div>
      <div>
        <slot name="customComponent"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed, watch } from "vue";
export default {
  name: "ModalOverlay",
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
    backable: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
      default: "300",
    },
    width: {
      type: String,
      default: "300",
    },
  },
  emits: ["back-screen"],
  setup(props, { emit }) {
    let modalOpened = reactive({
      status: props.opened,
    });
    let modalStyle = computed(() => {
      return `height: ${props.height}px; 
      width: ${props.width}px; 
      top: calc(50% - ${props.height / 2}px); 
      left: calc(50% - ${props.width / 2}px);`;
    });
    const toggleModal = () => {
      new Promise((resolve) => {
        resolve();
      }).then(() => {
        new Promise((resolve) => {
          setTimeout(() => {
            modalOpened.status = !modalOpened.status;
            resolve();
          }, 10);
        });
      });
    };
    const backScreen = () => {
      emit("back-screen");
    };
    watch(
      () => props.opened,
      () => {
        toggleModal();
      }
    );
    return {
      modalOpened,
      modalStyle,
      toggleModal,
      backScreen,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal-overlay-shade {
  display: none;
  &.opened {
    display: block;
    background: var(--color-background);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 30;
    opacity: 0.8;
  }
}
.modal-overlay-wrapper {
  padding: 30px;
  width: 500px;
  height: 300px;
  border: var(--color-background-soft) solid 2px;
  background: var(--color-background-mute);
  position: fixed;
  margin: 0;
  z-index: 0;
  opacity: 1;
  transition: 0.5s;
  max-width: 100%;
  max-height: 100%;
  opacity: 0;
  .control-bar {
    margin-bottom: 10px;
    .icon-back {
      left: 0;
    }
    .icon-close {
      right: 0;
    }
  }
  &.opened {
    opacity: 1;
    z-index: 30;
  }
  .control-bar {
    width: 100%;
    height: 30px;

    > * {
      cursor: pointer;
      width: 30px;
      height: 30px;
      filter: var(--invert-background-icon);
      position: absolute;
    }
    .icon-back {
      background: url("../assets/icons/LinearIconsSVG/chevron-left.svg");
      background-size: 30px;
    }
    .icon-close {
      background: url("../assets/icons/LinearIconsSVG/cross.svg");
      background-size: 30px;
    }
  }
  .modal-body-container {
    overflow: auto;
    height: calc(100% - 30px);
  }
  @media only screen and (max-width: 640px) {
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
  }
}
</style>
