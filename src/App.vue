<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <!-- <axiosTest></axiosTest> -->
    <!-- <slotComp></slotComp> -->
    <!-- <secondPage></secondPage> -->
    <!-- <firstCompont></firstCompont> -->
    <!-- <slotComp v-for="post in posts" v-bind="post"></slotComp> -->

    <!-- 父组件向子组件传值 -->
    <slotComp v-for="post in posts" v-bind:post="post" v-bind:key="post.id"></slotComp>
    <baseCheckbox v-model="loveValue"></baseCheckbox>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import secondPage from "@/components/secondPage";
import axiosTest from "@/components/axiosTest";
import firstCompont from "@/components/firstCompont";
import slotComp from "@/components/slotComp";
import baseCheckbox from "@/components/baseCheckbox";

export default {
  name: "App",
  components: {
    secondPage,
    axiosTest,
    firstCompont,
    slotComp,
    baseCheckbox
  },
  data() {
    return {
      title: "sss",
      posts: [
        {
          id: 1,
          title: "aaa"
        },
        {
          id: 2,
          title: "bbb"
        }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
