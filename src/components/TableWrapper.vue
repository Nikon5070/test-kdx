<template>
  <table class="table-wrapper">
    <tr>
      <th
        v-for="(col, key) in header"
        :key="key"
      >
        <slot name="header" v-bind="{ item: col, key: key }"></slot>
      </th>
    </tr>
    <tr
      v-for="(row, iRow) in main"
      :key="iRow"
    >
      <td
        v-for="(col, key) in header"
        :key="key"
      >
        <slot
          name="main"
          v-bind="{ item: row[key]  }"
        ></slot>
      </td>
    </tr>
  </table>
</template>

<script>
  export default {
    name: "TableWrapper",
    props: {
      header: {
        type: Object,
        default: () => ({})
      },
      main: {
        type: Array,
        default: () => []
      }
    }
  };
</script>

<style scoped lang="scss">
  .table-wrapper {
    border-collapse: collapse;
    tr {
      border: 1px solid gray;
      border-bottom: none;

      &:last-child {
        border-bottom: 1px solid gray;
      }
    }

    td, th {
      padding: 8px;
    }

    th {
      cursor: pointer;
      padding-top: 12px;
      padding-bottom: 12px;
    }
  }

</style>
