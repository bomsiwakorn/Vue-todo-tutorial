<template>
    <ul>
        <li v-for="item in items" :key="item.time">
            <button @click="itemDone(item.time)">Done</button>
            {{item.text | capitalized}}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'TodoList',
    props: {
        items: {
            type: Array
        }
    },
    methods: {
        itemDone(id) {
            this.$emit('onItemDone', id)
        }
    },
    filters: {
    capitalized (val) {
      return val.toUpperCase()
    }
  },
}
</script>

<style>

</style>