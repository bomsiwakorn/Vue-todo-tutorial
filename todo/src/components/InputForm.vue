<template>
  <form action="" @submit.prevent="save()">
      <input type="text" v-model="inputText">
      <button type="submit">Save</button>
</form>
</template>

<script>
export default {
    name: 'InputForm',
    data() {
        return {
            inputText: ''
        }
    },
    methods: {
        save() {
            this.$emit('onSave', this.inputText)
        }
    }
}
</script>

<style>

</style>