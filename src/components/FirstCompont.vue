  <template>
  <!-- 数据更新检测 -->
  <div>
    <p v-for="item in items" v-bind:key="item">{{item}}</p>
  </div>
</template>

<script>
export default {
  name: "firstCompont",
  data() {
    return {
      items: ["a", "b", "c"]
    };
  },
  beforeCreate: function() {
    // 组件实例创建完成，属性已绑定，如data属性等
  },
  created: function() {
    // 组件实例创建完成，属性已绑定，如data属性等
  },
  beforeMount: function() {
    // 模版编译/挂载之前
  },
  mounted: function() {
    // 模版编译/挂载之后
    this.items.push("d");
  },
  beforeUpdate: function() {
    //组件更新之前
  },
  updated: function() {
    //组件更新之后
  },
  beforeDestroy: function() {},
  destroyed: function() {}
};
</script>
