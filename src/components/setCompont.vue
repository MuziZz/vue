<template>
    <div>
        <div v-for='d in list' >{{d}}</div>
        <button @click="addFruit()">添加水果</button>
    </div>
</template>
<script>
//通过set改变对象中的值，实现双向绑定
import Vue from 'vue'
export default {
    data(){
        return {
            list:['apple','orange']
        }
    },
    methods:{
        addFruit(){
            this.$set(this.list,0,'banana')
            console.log(this)
        }
    }
}
</script>