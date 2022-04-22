<template>
  <h4>Quisque commodo ante</h4>
  <p>
    Quisque commodo ante et odio tempus, nec bibendum arcu tempus. In hac
    habitasse platea dictumst. Sed justo dolor, mollis vel ex eu, dignissim
    dignissim leo. Sed consequat non velit id placerat. Morbi sem mauris, porta
    id mauris quis, molestie luctus tellus.
  </p>
</template>

<script>
export default {
  emits: ["add-screen"],
  setup(props, { emit }) {
    const addScreen = () => {
      emit("add-screen");
    };
    return {
      addScreen,
    };
  },
};
</script>

<style></style>
