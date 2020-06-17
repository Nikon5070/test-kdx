import Vue from "vue";
import Vuex from "vuex";

import initTable from '@/mock/table.json';
import initColumns from '@/mock/columns.json';

Vue.use(Vuex);


const ASC = 'ASC';
const DESC = 'DESC';

const sortFn = ({a, b, handleFn, dir = ASC}) => dir === ASC ? handleFn(a, b) : handleFn(b, a)
const sortDate = (a, b) => new Date(a) - new Date(b);

export default new Vuex.Store({
  state: {
    columns: initColumns || [],
    data: initTable || [],
    sort: {
      name: 'id',
      dir: ASC,
    }
  },

  mutations: {
    SORT_DATA(state, {col}) {
      const { name, dir } = state.sort
      const isColSort = name === col;
      const newDir = (isColSort && dir === ASC) ? DESC : ASC;
      const mapFn = {
        payment_date: sortDate
      }
      const handleFn = mapFn[col];
      if(!handleFn) return;

      state.data = [...state.data]
        .sort((a, b) => sortFn({
          a: a[col],
          b: b[col],
          handleFn,
          dir: newDir
        }))

      state.sort = {
        name: col,
        dir: newDir
      }
    }
  },
  actions: {},
  modules: {}
});
