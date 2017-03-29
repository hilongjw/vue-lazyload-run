<template>
  <div class="img-list">
    <ul>
    <!-- <transition-group name="flip-list" tag="ul"> -->
      <li v-for="img in list" @click="delMe(img)">
        <img class="lazy-img-fadein" v-lazy="img.src" width="100%" height="400">
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
  methods: {
    removeTop (e) {
      this.$emit('delete', this.list[0])
    },
    delMe (img) {
      this.$emit('delete', img)
    }
  }
}
</script>
