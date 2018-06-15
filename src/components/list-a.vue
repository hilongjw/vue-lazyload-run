<template>
  <div class="img-list list-a">
    <transition-group name="flip-list" tag="ul">
      <li v-for="img in list" @click="delMe(img)" :key="img.id">
        <img :data-current="img.src" class="lazy-img-fadein" v-lazy="img.src" width="100%" height="400">
      </li>
    </transition-group>
    <div class="img-list-2" v-lazy-container="{ selector: '.img-list-2 .lazy-img-fadein',  }" v-html="content"></div>
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
  computed: {
    content () {
      return this.list.map(img => {
        return `<img data-src="${img.src}" data-error="dist/404.jpg?6666" width="100%" height="400" class="lazy-img-fadein">`
      }).join('\n')
    }
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
