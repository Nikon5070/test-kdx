<template>
  <SelectWrapper
    class="select"
    v-bind="$props"
    v-model="selected"
  >
    <template
      #default="{ value }"
    >
      {{ value }}
    </template>
  </SelectWrapper>
</template>

<script>
  import SelectWrapper from "@/components/SelectWrapper";

  export default {
    name: "Select",
    components: {
      SelectWrapper
    },

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
      }
    },

    data() {
      return {
        selected: this.value
      };
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
