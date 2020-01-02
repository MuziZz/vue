<template>
  <div>
      <h1>我是组件二</h1>
      <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'secondPage',
  data () {
    return {
      title: this.$route.params.msg
    }
  }
}
</script>
