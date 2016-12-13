<template>
  <div class="img-list" id="box">
    <!-- <transition-group name="flip-list" tag="ul"> -->
      <ul>
        <li v-for="img in list" @click="delMe(img)" >
          <div v-lazy:background-image.box="img"  :data="img.src" :key="img.id" class="bg-box"></div>
        </li>
      </ul>
    <!-- </transition-group> -->
  </div>
</template>

<script>
export default {
  name: 'ListB',
  props: {
    list: Array
  },
  methods: {
    delMe (img) {
      this.$emit('delete', img)
    }
  }
}
</script>
