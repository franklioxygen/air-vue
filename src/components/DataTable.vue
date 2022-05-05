<template>
  <div class="table-wrapper" :style="tableStyle">
    <div class="table-title">{{ tableProps.title }}</div>
    <table class="table">
      <thead>
        <tr>
          <th v-for="(th, index) in tableProps.tableHead" :key="index">
            {{ th.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tr, index) in tableProps.tableBody" :key="index">
          <td v-for="(td, index) in tableProps.tableHead" :key="index">
            {{ tr[td.field] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "DataTable",
  props: {
    width: {
      type: String,
      default: "100%",
    },
    tableProps: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const tableStyle = computed(() => {
      return props.width !== null ? `width: ${props.width}` : "";
    });
    return {
      tableStyle,
    };
  },
};
</script>

<style lang="scss" scoped>
.table-wrapper {
  .table-title {
    font-size: 1.2rem;
    padding: 1.5rem 0 0.5rem 0;
  }
  .table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    th {
      font-size: 1rem;
      text-align: center;
      font-weight: 200;
      padding: 0.5rem 0;
      color: var(--color-heading);
      background-color: var(--color-background-mute);
    }
    td {
      font-size: 0.8rem;
      text-align: center;
      padding: 0.5rem 0;
      color: var(--color-text);
      background-color: var(--color-background-soft);
    }
  }
}
</style>
