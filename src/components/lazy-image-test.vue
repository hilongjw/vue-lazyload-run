<template>
  <div class="img-list lazy-image-test">
    <ul>
    <!-- <transition-group name="flip-list" tag="ul"> -->
      <li v-for="(img, i) in list" @click.native="delMe(img)" :key="img">
        <lazy-image :src="img.src" :type="!!(i % 2)"  :data-current="img.src" class="lazy-img-fadein lazy-image"></lazy-image>
      </li>
    </ul>
    <!-- </transition-group> -->
  </div>
</template>

<script>
export default {
  name: 'ListImage',
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
