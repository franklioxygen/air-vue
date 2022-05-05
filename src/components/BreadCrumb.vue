<template>
  <div class="bread-crumb-wrapper">
    <ul>
      <li v-for="(page, index) in breadCrumbProps" :key="index">
        <a :href="page.url" :target="page.target ? page.target : '_parent'">{{
          page.name
        }}</a>
        <span
          :style="`display:${
            index === breadCrumbProps.length - 1 ? `none` : `inline-block`
          }`"
          >/</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  props: {
    breadCrumbProps: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.bread-crumb-wrapper {
  ul {
    display: flex;
    margin-left: 0;
    li {
      list-style: none;
      font-size: small;
    }
    span {
      margin: 0 10px;
    }
  }
}
</style>
