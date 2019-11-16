<template>
  <div id="app">
    <img src="./assets/logo.png">
    <child-component>
      <template slot="girl">
        漂亮，美丽，购物，逛街
      </template>
    </child-component>
    <button @click="click1()">button1</button>
    <button @click="click2()">button2</button>
    <axiosTest></axiosTest>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'App',
  methods: {
    click1 () {
      this.$route.push('/page1')
    },
    click2 () {
      this.$route.push('/page2')
    },
    log () {
      console.log(' XXXX ')
    },
    timer () {
      // setInterval(this.log, 100)
    }
  },
  mounted () {
    this.timer()
  }
}
// Vue.component('child-component', {
//   template: '<div>hello world!<slot></slot></div>'
// })
Vue.component('child-component', {
  template: '<div><h4>这个世界上不仅有男人和女人，还有动物</h4><slot name="girl"></slot></div>'
})
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
