<style>
html, body {
  padding: 0;
  margin: 0;
}
.img-list ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}

.img-list ul li {
  position: relative;
  width: 32.333333%;
  background: #fff;
  padding: .5rem;
  box-shadow: 0 0 1rem #ccc;
  margin: .5%;
  box-sizing: border-box;
  text-align: center;
}

.box-title {
  line-height: 2;
}

.img-list ul li img {
  width: 100%;
  min-height: 10rem;
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

img[lazy=loaded] {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

img[lazy=loading] {
  width: 40px!important;
  margin: auto;
}

img[lazy=error] {
  border-radius: 2px;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.cov-imageviewer {
  display: none;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  position: fixed;
}

.cov-imageviewer-mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.67);
}

.cov-imageviewer-header img {
  position: fixed;
  margin: 0 auto;
  top: 0;
  width: 100%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
}
.bg-box {
  height: 30em;
  background-size: cover;
}
.bg-box[lazy=loading] {
  background-size: 10%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-color: #f1f1f1;
}
.bg-box[lazy=loaded] {
  background-size: cover;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.switch-header {
  position: fixed;
  background: #03A9F4;
  box-shadow: 0 0 1rem #c7c7c7;
  width: 100%;
  z-index: 2;
  top: 0;
  left: 0;
  text-align: center;
  height: 3rem;
  line-height: 3rem;
  color: #fff;
}

.switch-btn {
  border: none;
  color: #fff;
  font-size: 1rem;
  background: #8BC34A;
  width: 6rem;
  border-radius: 2px;
  position: absolute;
  top: .5rem;
  height: 2rem;
  right: .5rem;
  transition: background .2s;
}
.switch-btn:hover {
  background: #a5e856;
}
.content {
  padding-top: 3rem;
}
#container {
  height: 400px;
  overflow: scroll;
}
@media all and (max-width: 768px) {
  .img-list ul li {
    width: 49%;
    margin: .5%;
  }
}
</style>

<template>
  <div id="app">
    <div class="switch-header">
      <span>{{ show ? 'Using img tag' : 'Using style background-image'}}</span>
      <button 
        class="switch-btn" 
        @click="show = !show"
      >Switch</button>
    </div>
    <div class="content">
      <list-a :list="list" v-if="show" @delete="deleteAction"></list-a>
      <list-b :list="list" v-if="!show" @delete="deleteAction"></list-b>
    </div>
  </div>
</template>

<script>
import ListA from './components/list-a.vue'
import ListB from './components/list-B.vue'
export default {
  data () {
    return {
      show: true,
      list: [
        "dist/test1.jpg",
        "dist/test2.jpg",
        "dist/test3.jpg",
        "dist/test4.jpg",
        "dist/test0.jpg",
        "dist/test5.jpg",
        "dist/test6.jpg",
        "dist/test7.jpg",
        "dist/test8.jpg",
        "dist/test9.jpg",
        "dist/test10.jpg",
        "dist/test11.jpg",
        "dist/test12.jpg",
        "http://covteam.u.qiniudn.com/test16.jpg",
        "http://covteam.u.qiniudn.com/test14.jpg",
        "http://covteam.u.qiniudn.com/test15.jpg",
        "http://covteam.u.qiniudn.com/test16.jpg",
        "http://covteam.u.qiniudn.com/test17.jpg",
        "http://covteam.u.qiniudn.com/test18.jpg",
        "http://covteam.u.qiniudn.com/test19.jpg",
        "http://covteam.u.qiniudn.com/test20.jpg",
        "http://covteam.u.qiniudn.com/test21.jpg"
      ]
    }
  },
  components: {
    ListA,
    ListB
  },
  methods: {
    deleteAction (img) {
      let index = this.list.indexOf(img)
      this.list.splice(index, 1)
    }
  }
}
</script>
