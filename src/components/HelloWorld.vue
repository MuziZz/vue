<template>
  <div class="hello">
    <h3>{{$store.state.count}}</h3>
    <div>
      <button @click="handleAddClick(10)">增加</button>
      <button @click="handleReduceClick(10)">减少</button>
    </div>
    <div>异步操作</div>
    <div>
      <button @click="handleActionsAdd(10)">异步增加</button>
      <button @click="handleActionsReduce(10)">异步减少</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleAddClick (n) {
      this.$store.commit('mutationsAddCount', n)
    },
    handleReduceClick (n) {
      this.$store.commit('mutationsReduceCount', n)
    },
    handleActionsAdd (n) {
      this.$store.dispatch('actionsAddCount', n)
    },
    handleActionsReduce (n) {
      this.$store.dispatch('actionsReduceCount', n)
    }
  }
}
</script>
