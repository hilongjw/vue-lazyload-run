<template>
  <div class="img-list">
    <transition-group name="flip-list" tag="ul">
      <li v-for="img in list" @click="delMe(img)" :key="img.id">
        <div v-lazy:background-image="img.src" class="bg-box"></div>
        <span class="box-title"> {{img.src}} </span>
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
    delMe (img) {
      this.$emit('delete', img)
    }
  }
}
</script>
