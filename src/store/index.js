import Vue from "vue";
import Vuex from "vuex";

import initTable from '@/mock/table.json';
import initColumns from '@/mock/columns.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    columns: initColumns || [],
    data: initTable || [],
  },
  mutations: {},
  actions: {},
  modules: {}
});
