<template>
    <div>
        <div class="my-fen">
            <div @click="setPass"><span>设置密码</span></div>
            <div><span>注销账号</span></div>
        </div>
        <button class="btn">退出登录</button>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
      setPass(){
          this.$router.push('/setPass')
      }
  }
};
</script>
<style>
.my-fen {
  width: 100%;
  background-color: white;
}
.my-fen div {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgb(238, 238, 238);
}
.my-fen div span {
  width: 100%;
  height: 60px;
  font-size: 14px;
  padding-top: 10px;
  color: rgb(100, 100, 100);
  padding-left: 30px;
  line-height: 60px;
}
.btn{
    width: 80%;
    background-color: rgb(240, 0, 0);
    margin-left: 30px;
    text-align: center;
    color: white;
    font-size: 14px;
    border: none;
    height: 40px;
    margin-top: 60px;
}
</style>
