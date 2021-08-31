<template>
    <div class="my">
        <div class="my-top">
            <p @click="login" class="my-top-img"><img src="/img/02.png" alt=""></p>
            <p class="my-top-p" v-html="$store.state.text"></p>
            <div class="my-top-two">
                <ul>
                    <li>
                        <p class="my-top-ul-li-p">0</p>
                        <p>我的学习</p>
                    </li>
                    <li>
                        <p class="my-top-ul-li-p1">0</p>
                        <p>本周课时</p>
                    </li>
                    <li>
                        <p class="my-top-ul-li-p1">0</p>
                        <p>我的积分</p>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 分 -->
        <div class="my-fen">
            <div><span>我的作业</span></div>
            <div><span>我的社区</span></div>
        </div>
        <div class="my-con">
            <div><span>课程订单</span></div>
            <div><span>图书订单</span></div>
        </div>
        <div class="my-quan">
            <div><span>优惠券</span></div>
            <div><span>学习卡</span></div>
            <div><span>分销中心</span></div>
        </div>
        <div class="my-mess">
            <div @click="toset"><span>设置</span></div>
            <div><span>消息中心</span></div>
            
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    toset(){
        this.$router.push('/set')
    }
  },
  created() {
  }
};
</script>
<style>
.my {
  width: 100%;
  height: auto;
  background-color: #ddd;
}
.my-top {
  width: 375px;
  height: 300px;
  background-image: url("/img/01.png") !important;
  background-repeat: no-repeat;
  background-size: 100%;
  text-align: center;
}
.my-top-img {
  width: 60px;
  height: 60px;
  margin-left: 155px;
  padding-top: 50px;
}
.my-top-img img {
  width: 100%;
  height: 100%;
}
.my-top-p {
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: #fff;
  margin-top: 10px;
}
.my-top-two {
  width: 375px;
  height: 74px;
  margin-top: 90px;
  background-color: white;
}
.my-top-two ul {
  list-style: none;
  display: flex;
}
.my-top-two ul li {
  width: 33%;
}
.my-top-two ul li p {
  font-size: 15px;
  margin-top: 5px;
}
.my-top-ul-li-p {
  color: #5bb8f5;
}
.my-top-ul-li-p1 {
  color: #e60012;
}
.my-fen {
  width: 100%;
  background-color: white;
}
.my-fen div {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ddd;
}
.my-fen div span {
  width: 100%;
  height: 40px;
  font-size: 14px;
  padding-top: 10px;
  color: rgb(100, 100, 100);
  padding-left: 30px;
  line-height: 40px;
}
.my-con {
  width: 100%;
  background-color: white;
}
.my-con div {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ddd;
  margin-top: 20px;
}
.my-con div span {
  width: 100%;
  height: 40px;
  font-size: 14px;
  padding-top: 10px;
  color: rgb(100, 100, 100);
  padding-left: 30px;
  line-height: 40px;
}
.my-quan {
  width: 100%;
  background-color: white;
}
.my-quan div {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ddd;
  margin-top: 20px;
}
.my-quan div span {
  width: 100%;
  height: 40px;
  font-size: 14px;
  padding-top: 10px;
  color: rgb(100, 100, 100);
  padding-left: 30px;
  line-height: 40px;
}
.my-mess {
  width: 100%;
  background-color: white;
}
.my-mess div {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ddd;
  margin-top: 20px;
}
.my-mess div span {
  width: 100%;
  height: 40px;
  font-size: 14px;
  padding-top: 10px;
  color: rgb(100, 100, 100);
  padding-left: 30px;
  line-height: 40px;
}
</style>
