<template>
  <div class="home">
    <Select
      v-model="shop"
      :list="shops"
      placeholder="Все магазины"
    />
    <Table
      :header="header"
      :main="main"
      @clickColumn="handleClickCol"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import Table from "@/components/Table";
import Select from "@/components/Select";

import shops from "@/mock/shops.json";

export default {
  name: "Home",
  components: {
    Select,
    Table
  },

  data: () => ({
    shop: '',
    shops,
  }),

  computed: {
    ...mapState({
      header: "columns",
    }),
    ...mapGetters({
      main:'getList'
    })
  },

  watch: {
    shop(value) {
      this.$store.commit('SET_FILTER', { value, key: 'location' });
    }
  },

  methods: {
    handleClickCol(col) {
      this.$store.commit('SORT_DATA', {col})
    }
  }
};
</script>
