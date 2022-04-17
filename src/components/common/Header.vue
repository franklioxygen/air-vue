<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>Vue Component Library</h3>
    <a href="https://github.com/franklioxygen/air-vue" target="_blank">
      <img
        class="invert-mode"
        src="../../assets/GitHub-Mark.png"
        alt="Vue Logo"
    /></a>
  </div>
</template>

<style lang="scss" scoped>
.greetings {
  width: 100%;
  border-bottom: 1px solid hsla(0, 0%, 80%, 0.2);
  margin-bottom: 0px;
  padding: 20px;
  background: --color-background;
  > * {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    margin-bottom: 0;
  }
  h1 {
    font-weight: 500;
    font-size: 2rem;
    border: 0.3rem solid hsla(160, 100%, 37%, 1);
    padding: 0.2rem 0.1rem 0.1rem 0.1rem;
    line-height: 1.7rem;
    transition: 0.4s;
    background: hsla(160, 100%, 37%, 0.2);
  }

  h3 {
    font-size: 0.8rem;
    font-weight: 500;
  }
  a {
    position: absolute;
    right: 20px;
    @media only screen and (max-width: 640px) {
      right: 70px;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      transition: 0.4s;
      &.invert-mode {
        -webkit-filter: var(--invert-completely);
        filter: var(--invert-completely);
      }
    }
  }
}
</style>
