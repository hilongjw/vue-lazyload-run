<template>
  <div class="img-list">
    <ul id="test">
      <li v-for="img in list" @click="delMe(img)" :key="img.id">
        <img v-lazy.test="img.src" :data="img.src" width="100%" height="400">
        <span class="box-title"> ID: {{img.id}} src: {{img.src}} </span>
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
