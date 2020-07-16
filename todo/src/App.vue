<template>
  <div id="app">
    <TodoList :items="sortedItem" @onItemDone="done"></TodoList>
    <InputForm @onSave="save"></InputForm>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import InputForm from '@/components/InputForm'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'App',
  components: {
    TodoList,
    InputForm
  },
  // filters: {
  //   capitalized (val) {
  //     return val.toUpperCase()
  //   }
  // },
  // mounted () {
  //   this.initItem(JSON.parse(localStorage['todoItems']))
  // },
  computed: {
    ...mapState(['items']),
    sortedItem () {
      return this.items.sort((a,b) => {
        return b.time - a.time
      }).filter(ele => {
        return ele.completed === false
      })
    }
  },
  methods: {
    ...mapMutations(['addItem', 'initItem']),
    done (id) {
      this.items = this.items.map(ele => {
        if (id === ele.time) {
          ele.completed = true
        }
        return ele
      })
      // this.initItem(JSON.parse(localStorage['todoItems']))
      this.initItem(localStorage['todoItems'])
    },
    save (text) {
      this.addItem({
        text: text,
        time: Date.now(),
        completed: false
      })
      // localStorage['todoItems'] = JSON.stringify(this.items.text)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
