<template>
  <select
    v-model="selected"
  >
    <option
      v-if="placeholder"
      :hidden="hiddenDefault"
      value=""
    > {{ placeholder }}</option>
    <option
      v-for="(item, key) in list"
      :value="key"
      :key="key"
    >
      <slot v-bind="{ value: item, key: key}"></slot>
    </option>
  </select>
</template>

<script>
  export default {
    name: "SelectWrapper",
    model: {
      prop: 'value',
      event: 'change'
    },

    props: {
      list: {
        type: Object,
        default: () => ({})
      },
      value: {
        type: [String, Number],
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      hiddenDefault: {
        type: Boolean,
        default: false,
      }
    },

    data () {
      return {
        selected: this.value
      }
    },

    watch: {
      selected(value) {
        this.$emit('change', value);
      }
    }
  };
</script>

<style scoped lang="scss">

</style>
