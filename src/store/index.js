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
    },
    filter: {}
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
    },
    SET_FILTER(state, { value, key }) {
      if(!value) {
        state.filter = Object.keys(state.filter)
          .filter(item => item !== key)
          .reduce((acc, cur) => ({
            ...acc,
            [cur]: state.filter[cur]
          }), {})
      } else {
        state.filter = {
          ...state.filter,
          [key]: value
        }
      }
    }
  },
  actions: {},
  getters: {
    getList(state) {
      const  { filter, data } = state;
      const filterKeys = Object.keys(filter);

      if(!filterKeys.length) {
        return data;
      }

      return filterKeys.reduce((acc, cur) => (
        [...acc, ...data.filter(item => item[cur] === filter[cur] && !acc.find(accItem => accItem[cur] === filter[cur]))]
      ), [])
    }
  },
  modules: {}
});
