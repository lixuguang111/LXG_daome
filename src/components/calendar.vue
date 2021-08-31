<template>
    <div id="calendar">
        <div class="top">
            <div class="img">
                <div class="icon">
                    <img class="img_icon" :src="/img/+'17.jpg'" alt="">
                </div>
                <div class="phone">
                    <p>{{$store.state.text}}</p>
                    <p>积分：0</p>
                </div>
            </div>
            <div class="rule">
                <button>签到规则</button>
            </div>
        </div>
        <div class="calendar">
            <van-calendar
                :poppable="false"
                :show-confirm="false"
                :style="{ height: '430px' }"
            />
        </div>
        <div class="recommend">
          <div>
            <p><span>|</span><span>好课推荐</span></p>
            <p>更多<i></i></p>
          </div>
          <div class="dec">
            <div class="img"></div>
            <div class="des">
              <p>论渣男的自我修养</p>
              <p><span>1积分</span><span><button>去兑换</button></span></p>
            </div>
          </div>
        </div>

    </div>
</template>
<script>
export default {};
</script>
<style>
#calendar {
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  position: relative;
}
#calendar .top {
  width: 100%;
  height: 300px;
  background-color: rgb(255, 77, 77);
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
}
#calendar .top .img {
  display: flex;
  justify-content: flex-start;
}
#calendar .top .img .icon img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
}
#calendar .top .phone {
  margin-left: 15px;
  color: white;
}
#calendar .top .rule button {
  border: 1px solid #ddd;
  background-color: transparent;
  color: white;
  width: 80px;
  height: 23px;
  border-radius: 20px;
  margin-right: 30px;
}
.calendar {
  height: 100px;
  width: 90%;
  position: absolute;
  top: 120px;
  border-radius: 10px;
}
.calendar .van-calendar {
  width: 90%;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 10px;
}
.recommend{
  margin-top: 250px;
}
</style>
