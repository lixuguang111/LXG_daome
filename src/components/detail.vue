<template>
    <div></div>
</template>
<script>
import teacher_des from "@/http/api";
export default {
  data() {
    return {
      id: 0
    };
  },
  methods: {
      async getDetail(){
          let res = teacher_des(this.id)
          console.log(res);
      }
  },
  created() {
    this.id = this.$store.state.id
  },
  mounted(){
      this.getDetail()
  }
};
</script>
<style>
</style>
