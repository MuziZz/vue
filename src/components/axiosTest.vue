<template>
  <div>
    <button @click="requestClick()" style="width:100px;height:50px;font-size:20px">开始请求</button>
    <h1>我是axios请求，下面是通过请求获取学生的信息：</h1>
    <div>
      name:
      <span>{{name}}</span>
    </div>
    <div>address:{{address}}</div>
    <div>age:{{age}}</div>
  </div>
</template>
<script>
export default {
  name: "axiosTest",
  data() {
    return {
      msg: "",
      name: "",
      address: "",
      age: ""
    };
  },
  methods: {
    requestClick: function() {
      Vue.axios
        .get("http://test.local.org/person.json", {})
        .then(response => {
          console.log("response:" + response);
          this.msg = response;
          this.name = this.msg.name;
          this.address = this.msg.address;
          this.age = this.msg.age;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
