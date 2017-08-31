<template>
  <div class="img-list">
    <ul>
    <!-- <transition-group name="flip-list" tag="ul"> -->
      <li v-for="img in list" @click="delMe(img)">
        <img  :data="img.src" @error="errorHandler" class="lazy-img-fadein" v-lazy="img.src" width="100%" height="400">
      </li>
    </ul>
    <!-- </transition-group> -->
  </div>
</template>

<script>
export default {
  name: 'ListA',
  props: {
    list: Array
  },
  filters: {
    size (src) {
      console.log('src', src)
      return src
    }
  },
  methods: {
    errorHandler (e) {
      console.log('error', e)
    },
    removeTop (e) {
      this.$emit('delete', this.list[0])
    },
    delMe (img) {
      this.$emit('delete', img)
    }
  }
}
</script>
