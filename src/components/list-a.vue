<template>
  <div class="img-list">
    <transition-group name="flip-list" tag="ul" id="boxx">
      <li v-for="img in list" @click="delMe(img)" :key="img.id">
        <img v-lazy.boxx="img.src" :data-lz-rt="img.src + '?imageMogr2/thumbnail/600x400'" width="100%" height="400">
      </li>
    </transition-group>
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
