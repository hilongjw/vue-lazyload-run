<template>
  <div class="img-list">
    <transition-group name="flip-list" tag="ul">
        <li v-for="img in list" @click="delMe(img)" :key="img.id">
          <div v-lazy:background-image="img" :data="img.src" class="bg-box"></div>
        </li>
    </transition-group>
    <lazy-component tag="li" v-for="img in list">
      <img :src="img.src"  :data="img.src" />
    </lazy-component>
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
