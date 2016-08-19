<template>
  <div class="img-list">
    <ul id="test">
      <li v-for="img in list" @click="delMe(img)" :key="img">
        <img v-lazy.test="img" width="100%" height="400">
        <span class="box-title"> {{img}} </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  methods: {
    delMe (img) {
      console.log(img)
      this.$emit('delete', img)
    }
  }
}
</script>
