<template>
  <div class="home">
    <router-view class="home-view"></router-view>
    <Tabbar></Tabbar>
  </div>
</template>


<script>
import Tabbar from "@/components/Tabbar"
export default {
  components:{Tabbar}
}
</script>


<style>
.home{
  width: 100%;
  height: 100%;
}
.home-view{
  overflow: auto;
}
</style>
