<template>
  <h4>Donec faucibus rhoncus</h4>
  <p>
    Donec faucibus rhoncus turpis eu commodo. Integer id leo metus. Etiam
    malesuada tellus risus, non auctor mi suscipit a. Nullam egestas, eros at
    mollis tristique, dolor diam pulvinar massa, eu porttitor odio tortor
    placerat nisi. Sed malesuada gravida ex, nec tincidunt nunc tempor quis.
    Nunc sapien orci, accumsan non mollis congue, scelerisque at metus. Donec
    porta euismod convallis. Ut suscipit dolor risus, sed ultricies tellus
    pellentesque et.
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
