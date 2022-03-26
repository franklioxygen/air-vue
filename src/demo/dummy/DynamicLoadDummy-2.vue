<template>
  <h5>In sit amet metus nulla</h5>
  <a @click="addScreen()">Click to add second screen</a>
  <p>
    In sit amet metus nulla. Nunc dictum nisi massa, eu ultrices nibh dictum
    sed. Aliquam ut mauris ipsum. Quisque at urna eu metus aliquet iaculis et
    nec odio. Donec id ante ut velit efficitur ultricies sit amet nec est. Nulla
    arcu massa, semper sed posuere eu, aliquet vel magna. Mauris condimentum
    mattis volutpat.
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
