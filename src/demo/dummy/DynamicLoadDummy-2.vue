<template>
  <h4>In sit amet metus nulla</h4>
  <a @click="addScreen()">Click to add second screen</a>
  <p>
    In sit amet metus nulla. Nunc dictum nisi massa, eu ultrices nibh dictum
    sed. Aliquam ut mauris ipsum. Quisque at urna eu metus aliquet iaculis et
    nec odio. Donec id ante ut velit efficitur ultricies sit amet nec est. Nulla
    arcu massa, semper sed posuere eu, aliquet vel magna. Mauris condimentum
    mattis volutpat.
  </p>
  <p>
    Quisque vitae rhoncus dolor. Integer sed justo nisi. Vivamus efficitur
    egestas neque, in porta dolor sollicitudin vel. In eleifend cursus urna,
    quis sodales odio lobortis id. Etiam congue sapien ut ultrices porta.
    Suspendisse suscipit eget ex sit amet aliquam. Maecenas porta elementum
    elit, ac sodales nibh lacinia ut. Morbi pulvinar, nulla id commodo aliquam,
    neque enim placerat mauris, in mollis neque ipsum vehicula massa.
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

<style scoped>
p {
  overflow: auto;
}
</style>
