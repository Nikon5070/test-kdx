<template>
  <div class="home">
    <Table
      :header="header"
      :main="main"
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
  }
};
</script>
