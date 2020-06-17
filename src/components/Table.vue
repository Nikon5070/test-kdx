<template>
  <TableWrapper
    class="table"
    :header="header"
    :main="main"
  >
    <template
      #header="{ item, key }"
    >
      <span
        @click="handleClickCol(key)"
      >
        {{ item }}
      </span>
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
  },

  methods: {
    handleClickCol(col) {
      this.$emit('clickColumn', col)
    },
  }
};
</script>

<style scoped lang="scss"></style>
