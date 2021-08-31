<template>
    <div class="deng">
        <div class="che">
            <img src="../assets/img/3.jpg" alt="">
        </div>
        <div class="hui"></div>
        <div class="shou">
            <div class="shu">
                <p><input type="text" placeholder="请输入手机号"> <span class="yan">获取验证码</span></p>
                <p><input type="text" placeholder="请输入短信验证码"></p>
                <p v-show="show"><input type="text" placeholder="请输入密码"></p>
                <p><span class="ji">未注册的手机号将自动注册</span><span class="ji">使用密码登录</span></p>
                <button class="btn">登录</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>

<style>
.deng {
  width: 100%;
  height: 100%;
}
.che {
  width: 100%;
  height: 414px;
}
.che img {
  width: 100%;
  height: 414px;
}
.hui {
  width: 100%;
  height: 0.3rem;
  background: #999999;
}
.shou {
  width: 100%;
  height: 400px;
  text-align: center;
}
.show .shu {
  margin-top: 1rem;
  position: relative;
}
.show .shu input {
  width: 7rem;
  height: 1rem;
  font-size: 18px;
  border: 1px solid white;
}
p {
  margin-top: 0.3rem;
}
p .ji {
  margin-right: 1rem;
  color: #999999;
  font-size: 10px;
}
.yan {
  position: absolute;
  top: 10px;
  left: 290px;
  color: red;
  font-size: 10px;
}

.btn {
  width: 7rem;
  height: 1.3rem;
  color: white;
  background: red;
  margin-top: 1rem;
  border: 1px solid red;
  border-radius: 1%;
  font-size: 20px;
}
</style>

