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
  background: #2196F3;
}

#box {
  height: calc(100vh - 3rem);
  overflow: auto;
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

.lazy-img-fadein[lazy=loaded] {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.lazy-img-fadein[lazy=loading] {
  width: 40px!important;
  margin: auto;
}

.lazy-img-fadein[lazy-progressive=true] {
  width: 100%!important;
  margin: auto;
}

.lazy-img-fadein[lazy=error] {
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
  height: 0;
  background-size: cover;
  padding-bottom: 100%;
}
.bg-box[lazy=loading] {
  background-size: 10%;
  background-repeat: no-repeat;
  background-position: 50%;
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

.bg-box[lazy-progressive=true] {
  background-size: cover;
  padding-bottom: 100%;
}

.switch-header {
  display: flex;
  justify-content: space-between;
  position: fixed;
  background: #03A9F4;
  box-shadow: 0 0 1rem #c7c7c7;
  width: 100%;
  z-index: 2;
  padding: 0 1rem;
  top: 0;
  left: 0;
  text-align: center;
  height: 3rem;
  line-height: 3rem;
  color: #fff;
  box-sizing: border-box;
}

.switch-btn {
  border: none;
  color: #fff;
  font-size: 12px;
  background: #8BC34A;
  border-radius: 2px;
  top: .5rem;
  height: 2rem;
  right: .5rem;
  transition: background .2s;
  min-width: 4rem;
}
.switch-btn:hover {
  background: #a5e856;
}
.content {
  padding-top: 3rem;
}
.github-icon::before {
  content: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIzcHgiIGhlaWdodD0iMjNweCIgdmlld0JveD0iMCAwIDIzIDIzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMSAoMjgyMTUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkZpbGwgNTA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR2l0SHViLU1hcmsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDEuMDAwMDAwLCAtMzM2LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTUyLjYwODQ3MSwzMzYuNDQzODA3IEMxNDYuNDM4Njc0LDMzNi40NDM4MDcgMTQxLjQzNTA2LDM0MS40NDY3MzUgMTQxLjQzNTA2LDM0Ny42MTg1OSBDMTQxLjQzNTA2LDM1Mi41NTU2NjMgMTQ0LjYzNjU3NywzNTYuNzQzNjM0IDE0OS4wNzY5OTMsMzU4LjIyMTI1OCBDMTQ5LjYzNjA3NSwzNTguMzI0MTU2IDE0OS44Mzk4MTQsMzU3Ljk3OTEwMyAxNDkuODM5ODE0LDM1Ny42ODI3NTUgQzE0OS44Mzk4MTQsMzU3LjQxNzI3NyAxNDkuODMwMjEsMzU2LjcxNDgyMyAxNDkuODI0NzIyLDM1NS43ODI1NjIgQzE0Ni43MTY1LDM1Ni40NTc1NzYgMTQ2LjA2MDY5MywzNTQuMjg0MzU5IDE0Ni4wNjA2OTMsMzU0LjI4NDM1OSBDMTQ1LjU1MjM3NCwzNTIuOTkzMzI1IDE0NC44MTk3MzYsMzUyLjY0OTY0NCAxNDQuODE5NzM2LDM1Mi42NDk2NDQgQzE0My44MDUxNTYsMzUxLjk1Njc5MyAxNDQuODk2NTY3LDM1MS45NzA1MTMgMTQ0Ljg5NjU2NywzNTEuOTcwNTEzIEMxNDYuMDE4MTYxLDM1Mi4wNDk0MDIgMTQ2LjYwODExMywzNTMuMTIyMjkxIDE0Ni42MDgxMTMsMzUzLjEyMjI5MSBDMTQ3LjYwNDg1NywzNTQuODI5NzIxIDE0OS4yMjM3OTQsMzU0LjMzNjQ5NCAxNDkuODYwMzk0LDM1NC4wNTA0MzYgQzE0OS45NjE5MiwzNTMuMzI4Nzc0IDE1MC4yNTA3MjIsMzUyLjgzNjIzMyAxNTAuNTY5NzA4LDM1Mi41NTcwMzUgQzE0OC4wODg0OCwzNTIuMjc1MDkzIDE0NS40Nzk2NTksMzUxLjMxNjA3OCAxNDUuNDc5NjU5LDM0Ny4wMzQxMjYgQzE0NS40Nzk2NTksMzQ1LjgxNDQzNiAxNDUuOTE1MjYzLDM0NC44MTYzMiAxNDYuNjMwMDY1LDM0NC4wMzU2NjIgQzE0Ni41MTQ4MTgsMzQzLjc1MzAzNCAxNDYuMTMxMzUsMzQyLjYxNjM0OCAxNDYuNzM5ODIzLDM0MS4wNzgzNTggQzE0Ni43Mzk4MjMsMzQxLjA3ODM1OCAxNDcuNjc3NTcyLDM0MC43Nzc4OTQgMTQ5LjgxMjM3NCwzNDIuMjIzOTYyIEMxNTAuNzAzNDc2LDM0MS45NzU2MzMgMTUxLjY1OTc0NiwzNDEuODUyMTU1IDE1Mi42MDk4NDMsMzQxLjg0NzM1MyBDMTUzLjU1OTI1NCwzNDEuODUyMTU1IDE1NC41MTQ4MzgsMzQxLjk3NTYzMyAxNTUuNDA3MzEyLDM0Mi4yMjM5NjIgQzE1Ny41NDA3NDIsMzQwLjc3Nzg5NCAxNTguNDc3MTE5LDM0MS4wNzgzNTggMTU4LjQ3NzExOSwzNDEuMDc4MzU4IEMxNTkuMDg2OTY0LDM0Mi42MTYzNDggMTU4LjcwMzQ5NiwzNDMuNzUzMDM0IDE1OC41ODg5MzUsMzQ0LjAzNTY2MiBDMTU5LjMwNTEwOSwzNDQuODE2MzIgMTU5LjczNzI4MywzNDUuODE0NDM2IDE1OS43MzcyODMsMzQ3LjAzNDEyNiBDMTU5LjczNzI4MywzNTEuMzI3MDU0IDE1Ny4xMjQzNDYsMzUyLjI3MTY2MyAxNTQuNjM1NTczLDM1Mi41NDgxMTcgQzE1NS4wMzYxOTEsMzUyLjg5MzE3IDE1NS4zOTM1OTIsMzUzLjU3NTA0NSAxNTUuMzkzNTkyLDM1NC42MTcwNjQgQzE1NS4zOTM1OTIsMzU2LjExMTE1MSAxNTUuMzc5ODcyLDM1Ny4zMTY0MzYgMTU1LjM3OTg3MiwzNTcuNjgyNzU1IEMxNTUuMzc5ODcyLDM1Ny45ODE4NDcgMTU1LjU4MTU1MywzNTguMzI5NjQ0IDE1Ni4xNDgxODEsMzU4LjIyMDU3MiBDMTYwLjU4NTE2NywzNTYuNzM5NTE4IDE2My43ODM5NCwzNTIuNTU0MjkxIDE2My43ODM5NCwzNDcuNjE4NTkgQzE2My43ODM5NCwzNDEuNDQ2NzM1IDE1OC43ODAzMjYsMzM2LjQ0MzgwNyAxNTIuNjA4NDcxLDMzNi40NDM4MDciIGlkPSJGaWxsLTUwIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=)
}
.github-btn {
  position: absolute;
  left: .5rem;
  top: .5rem;
  border: none;
  border-radius: .2rem;
  background: none;
  color: #fff;
  height: 2rem;
  font-size: 1rem;
  line-height: 2rem;
}
.github-text {
  font-size: .8rem;
  vertical-align: super;
}
#container {
  height: 400px;
  overflow: scroll;
}
@media all and (max-width: 768px) {
  .github-text {
    display: none;
  }
  .header-center {
    display: none;
  }
  .switch-header {
    text-align: left;
    padding-left: 3rem;
    font-size: .8rem;
    box-sizing: border-box;
  }
  .img-list ul li {
    width: 100%;
    margin: 1% 2.5%;
  }
  .box-title {
    display: none;
  }
}
.flip-list-move {
  transition: transform 1s;
}
.content {
  position: relative;
  height: 18px;
}
.content .img-list {
  position: absolute;
  width: 100%;
}
.in-out-translate-fade-enter-active, .in-out-translate-fade-leave-active {
  transition: all .5s;
}
.in-out-translate-fade-enter, .in-out-translate-fade-leave-active {
  opacity: 0;
}
.in-out-translate-fade-enter {
  transform: translate3d(100%, 0, 0);
}
.in-out-translate-fade-leave-active {
  transform: translate3d(-100%, 0, 0);
}
.cov {
  min-height: 10rem;
}
</style>

<template>
  <div id="app">
    <div class="switch-header">
      <div class="header-right">
        <a href="https://github.com/hilongjw/vue-lazyload">
          <button class="github-btn">
            <span class="github-icon"></span>
            <span class="github-text">View on Github</span>
          </button>
        </a>
      </div>
      <div class="header-center">
        <span>{{ (state === 'a') ? 'Using img tag' : 'Using style background-image'}}</span>
      </div>
      <div class="header-left">
        <button 
          class="switch-btn" 
          @click="changeMode"
        >{{ mode }}</button>
        <button 
          class="switch-btn" 
          @click="update"
        >Update</button>
        <button 
          class="switch-btn" 
          @click="addOne"
        >Add</button>
        <button 
          class="switch-btn" 
          @click="toggle"
        >Switch</button>
        <button 
          class="switch-btn" 
          @click="sortAction"
        >Shuffle</button>
      </div>
    </div>
    <div class="content">
      <transition name="in-out-translate-fade" mode="out-in">
        <list-a :list="list" v-if="state === 'a'" @delete="deleteAction"></list-a>
        <list-b :list="list" v-else  @delete="deleteAction"></list-b>
        <!-- <list-c :list="list" v-else></list-c> -->
      </transition>
    </div>
  </div>
</template>

<script>
import ListA from './components/list-a.vue'
import ListB from './components/list-B.vue'
import ListC from './components/list-c.vue'

import avatars from '../dist/avatar/avatar'

const IMGS = [
  "http://covteam.u.qiniudn.com/test16.jpg",
  "http://covteam.u.qiniudn.com/test14.jpg",
  "http://covteam.u.qiniudn.com/test15.jpg",
  "http://covteam.u.qiniudn.com/test16.jpg",
  "http://covteam.u.qiniudn.com/test17.jpg",
  "http://covteam.u.qiniudn.com/test18.jpg",
  "http://covteam.u.qiniudn.com/test19.jpg",
  "http://covteam.u.qiniudn.com/test20.jpg",
  "http://covteam.u.qiniudn.com/test21.jpg",
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
]

const SEEM_IMGS = [
  "dist/test1.jpg",
  "dist/test1.jpg",
  "dist/test1.jpg",
  "dist/test1.jpg",
  "dist/test1.jpg",
  "dist/test1.jpg",
  "dist/test1.jpg",
  "dist/test1.jpg",
  "dist/test1.jpg",
  "dist/test1.jpg",
  "dist/test1.jpg",
  "dist/test1.jpg",
  "dist/test1.jpg",
  "dist/test1.jpg",
  "dist/test1.jpg",
  "dist/test1.jpg",
  "dist/test1.jpg",
  "dist/test1.jpg",
  "dist/test1.jpg",
  "dist/test1.jpg"
]

const getList = (imgs) => {
  let list = []
  imgs.forEach((img, index) => {
    list.push({
      src: img,
      id: index,
      // error: 'dist/404.png',
      // loading: 'dist/loading-spin.svg'
    })
  })
  return list
}

function getAvatarList () {
  let list = []

  avatars.forEach((user, index) => {
    list.push({
      src: 'dist/avatar/large/' + user.avatar,
      id: user.avatar,
      // error: 'dist/404.png',
      // loading: 'dist/loading-spin.svg'
    })
  })

  return list
}

export default {
  name: 'List',
  data () {
    return {
      mode: 'event',
      loadedEl: [],
      index: 1,
      state: 'a',
      list: [] // getList(IMGS)
    }
  },
  created () {
    this.$Lazyload.config({
      // loading: 'http://covteam.u.qiniudn.com/test19.jpg'
    })
    this.$Lazyload.$on('loaded', this.handler)
    this.$Lazyload.$once('error', ({ el }) => {
      console.log('once error')
      // console.log('from emit error')
    })
    setTimeout(() => {
      this.list = getList(IMGS) // getAvatarList()
    }, 1000)
    console.log(this.$Lazyload)
  },
  components: {
    ListA,
    ListB,
    ListC
  },
  mounted () {
    window.aa = this.$Lazyload
  },
  methods: {
    toggle () {
      let result
      switch (this.state) {
        case 'a':
          result = 'b'
          break
        case 'b':
          result = 'a'
          break
        case 'c':
          result = 'a'
          break
      }
      this.state = result
    },
    changeMode () {
      this.$Lazyload.setMode(this.$Lazyload.mode === 'event' ? 'observer' : 'event')
      this.mode = this.$Lazyload.mode
    },
    handler (listener, fromCache) {
      // if (!fromCache) console.log(listener)
    },
    sortAction () {
      this.list = this.list.sort((a, b) => {
        return Math.random() - 0.5
      })
    },
    update () {
      this.list.forEach(item => {
        item.id = Date.now() + Math.floor(Math.random() * 10000)
        item.src = 'dist/test' + 1 + Math.floor(Math.random() * 9) + '.jpg'
      })
    },
    addOne () {
      this.list.push({
        src: 'dist/test' + 1 + Math.floor(Math.random() * 12) + '.jpg',
        id: Date.now(),
        error: 'dist/404.png',
        loading: 'dist/loading-spin.svg'
      })
    },
    deleteAction (img) {
      let index = this.list.indexOf(img)
      this.list.splice(index, 1)
    }
  }
}
</script>
