<template>
  <table class="table-wrapper">
    <tr>
      <td
        v-for="(col, iCol) in header"
        :key="iCol"
      >
        <slot name="header" v-bind="{ item: col }"></slot>
      </td>
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

<style scoped lang="scss"></style>
