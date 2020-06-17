<template>
  <div class="home">
    <Table
      :header="header"
      :main="main"
      @clickColumn="handleClickCol"
    />
  </div>
</template>

<script>
import Table from "@/components/Table";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Table
  },

  computed: {
    ...mapState({
      header: "columns",
      main: "data",
    })
  },

  methods: {
    handleClickCol(col) {
      this.$store.commit('SORT_DATA', {col})
    }
  }
};
</script>
