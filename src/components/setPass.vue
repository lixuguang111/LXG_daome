<template>
    <div>
         <div>
            <div class="home-con-phone">
                <input type="text" placeholder="请输入手机号" v-model="value">
                <span @click="huoqu" v-html="txt" :disabled="flag"></span>
            </div>
            <div class="home-con-duan">
                <input type="text" placeholder="请输入短信验证码" v-model="smsCode">
            </div>
            <div class="home-con-duan">
                <input type="text" placeholder="请输入密码" v-model="password">
            </div>
          </div>
            
            <div class="home-con-login">
                <p class="home-con-login-p" @click="login">确定</p>
            </div>
    </div>
</template>
<script>
import { smsCode, login, password } from "@/http/api";
export default {
  data() {
    return {
      txt: "获取验证码",
      value: "",
      password: "",
      smsCode: "",
      flag: true
    };
  },
  methods: {
    async login() {
      var obj = {
        mobile:this.value,
        password:this.password,
        sms_code:this.smsCode
      }
      let res = await password(obj)
      console.log(res);
      if (res.data.code == 200) {
        this.$router.go(-1)
      } else {
        
      }
    },
    async huoqu() {
      var phoneReg = /^[1]([3-9])[0-9]{9}$/;
      if (!phoneReg.test(this.value)) {
        return this.$toast({
          message: "手机号格式不正确"
        });
      } else {
        var time = 60;
        let timer = setInterval(() => {
          this.flag = true;
          this.txt = `${time}后再次获取验证码`;
          time--;
          if (time <= 0) {
            this.flag = false;
            clearInterval(timer);
            this.txt = "获取验证码";
          }
        }, 1000);
        var obj = { mobile: this.value, sms_type: "login" };
        let res = await smsCode(obj);
        console.log(res);
      }
    }
  }
};
</script>
<style>
.home-con {
  width: 375px;
  height: 130px;
}
.home-con-phone {
  width: 300px;
  line-height: 50px;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  margin-left: 30px;
  margin-top: 50px;
}
.home-con-phone input {
  border: 0;
  font-size: 15px;
}
.home-con-phone span {
  display: inline-block;
  margin-right: 0;
  margin-left: 40px;
  color: #f00;
}
.home-con-duan {
  width: 300px;
  line-height: 50px;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  margin-left: 30px;
}
.home-con-duan input {
  border: 0;
  font-size: 15px;
}
.home-con-wei {
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  margin-top: 10px;
  color: #b7b7b7;
}
.home-con-login {
  width: 375px;
  height: 187px;
  background-image: url("/img/03.png");
  background-size: 100%;
}
.home-con-login-p {
  padding-left: 165px;
  padding-top: 70px;
  font-size: 14px;
  color: #fff;
}
.home-con-login-xieyi {
  width: 300px;
  line-height: 20px;
  margin-left: 40px;
  margin-top: 30px;
}
.home-con-login-xieyi img {
  width: 15px;
  height: 15px;
}
.home-con-login-xieyi span {
  color: #f00;
}
</style>
