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
}
</style>
