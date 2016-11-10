<template>
  <div class="img-list">
    <transition-group name="flip-list" tag="ul">
      <li v-for="img in list" @click="delMe(img)" :key="img.id">
        <img v-lazy="img.src" :data="img.src" width="100%" height="400">
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  methods: {
    removeTop (e) {
      this.$emit('delete', this.list[0])
    },
    delMe (img) {
      console.log(this.$options)
      this.$emit('delete', img)
    }
  }
}
</script>
