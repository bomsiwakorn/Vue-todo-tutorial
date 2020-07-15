<template>
  <div id="app">
    <ul>
      <li v-for="item in sortedItem" :key="item.time">
        <button @click="done(item.time)">Done</button>
        {{item.text | capitalized}}
      </li>
    </ul>
    <form action="" @submit.enter.prevent="save()">
      <input type="text" v-model="inputText">
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      inputText: '',
      items: [],
    }
  },
  filters: {
    capitalized (val) {
      return val.toUpperCase()
    }
  },
  mounted () {
    this.items = JSON.parse(localStorage['todoItems'])
  },
  computed: {
    sortedItem () {
      return this.items.sort((a,b) => {
        return b.time - a.time
      }).filter(ele => {
        return ele.completed === false
      })
    }
  },
  methods: {
    done (id) {
      this.items = this.items.map(ele => {
        if (id === ele.time) {
          ele.completed = true
        }
        return ele
      })
      localStorage['todoItems'] = JSON.stringify(this.items)
    },
    save () {
      this.items.push({
        text: this.inputText,
        time: Date.now(),
        completed: false
      })
      localStorage['todoItems'] = JSON.stringify(this.items)
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
