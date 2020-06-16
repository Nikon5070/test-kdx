<template>
  <TableWrapper
    class="table"
    :header="header"
    :main="main"
  >
    <span> hello </span>
    <template #header="{ item }">
      {{ item }}
    </template>
    <template
      #main="{ item }"
    >
      {{ item }}
    </template>
  </TableWrapper>
</template>

<script>
import TableWrapper from "@/components/TableWrapper";

export default {
  name: "Table",

  components: {
    TableWrapper
  },
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
