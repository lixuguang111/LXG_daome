<template>
    <div id="password">
        <input type="text" placeholder="请输入手机号" v-model="mobile" class="mobile">
        <input type="password" placeholder="请输入密码" v-model="password" class="password">
        <p class="choice"><span class="findWord">找回密码</span><span class="back" @click="sms">注册/验证码登录</span></p>
        <div class="home-con-login">
                <p class="home-con-login-p" @click="login">登 录</p>
                <p class="home-con-login-xieyi">
                    <img src="/img/05.png" alt="">
                    我同意<span>用户注册协议</span>和<span>隐私保护协议</span>
                </p>
        </div>
    </div>
</template>
<script>
import login from "@/http/api";
export default {
  data() {
    return {
      mobile: "",
      password: ""
    };
  },
  methods: {
    async login() {
      var obj = {
        mobile: this.mobile,
        type: 1,
        client: 1
      };
      console.log(obj);
      let res = await login(obj);
      console.log(res);
      var ob = JSON.parse(res.config.data);
      var mobile = ob.mobile;
      this.$store.commit("log", mobile);
      this.$router.go(-1);
    },
    sms() {
      this.$emit("sms");
    }
  }
};
</script>
<style>
html,
body,
#password {
  width: 100%;
  /* background-color: #eee; */
  margin: 0;
  padding: 0;
}
#password .mobile {
  width: 80%;
  height: 60px;
  border: none;
  border-bottom: 1px solid #ddd;
  border-radius: 5px;
  margin-left: 8%;
  margin-top: 20px;
  line-height: 60px;
  font-size: 14px;
}
#password .password {
  width: 80%;
  height: 60px;
  border: none;
  border-bottom: 1px solid #ddd;
  border-radius: 5px;
  margin-left: 8%;
  margin-top: 20px;
  line-height: 60px;
  font-size: 14px;
}
#password .choice {
  width: 80%;
  display: flex;
  justify-content: space-between;
  color: #ddd;
  margin-left: 8%;
}
#password .choice span {
  display: inline-block;
}
</style>
