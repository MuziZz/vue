<template>
  <div>
    <h3>{{post.title}}</h3>
  </div>
</template>
<script>
export default {
  name: "slotComp",
  props: ["post"],
  data() {
    return {};
  }
};
</script>
