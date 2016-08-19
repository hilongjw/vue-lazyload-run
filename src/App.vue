<template>
  <div id="app">
    <button @click="show = !show">toggle</button>
    <list-a :list="list" v-if="show" @delete="deleteAction"></list-a>
    <list-b :list="list" v-if="!show" @delete="deleteAction"></list-b>
  </div>
</template>

<script>
import ListA from './components/list-a.vue'
import ListB from './components/list-B.vue'
export default {
  data () {
    return {
      show: true,
      list: [
        "dist/test1.jpg",
        "dist/test2.jpg",
        "dist/test3.jpg",
        "dist/test4.jpg",
        "dist/test0.jpg",
        "dist/test5.jpg",
        "dist/test6.jpg",
        "dist/test7.jpg",
        "dist/test8.jpg",
        "dist/test9.jpg",
        "dist/test10.jpg",
        "dist/test11.jpg",
        "dist/test12.jpg",
        "dist/test13.jpg",
        "dist/test14.jpg",
        "dist/test15.jpg",
        "dist/test16.jpg",
        "dist/test17.jpg",
        "dist/test18.jpg",
        "dist/test19.jpg",
        "dist/test20.jpg",
        "dist/test21.jpg"
      ]
    }
  },
  components: {
    ListA,
    ListB
  },
  methods: {
    deleteAction (img) {
      let index = this.list.indexOf(img)
      this.list.splice(index, 1)
    }
  }
}
</script>
