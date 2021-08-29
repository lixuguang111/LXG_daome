<template>
    <div class="my" @click="login">
        <div class="my-top">
            <p class="my-top-img"><img src="/img/02.png" alt=""></p>
            <p class="my-top-p">登录/注册</p>
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
        <div class="my-fen"></div>
        <div class="my-con">

        </div>
    </div>
</template>
<script>
export default {
    methods: {
        login(){
            this.$router.push('/login')
        }
    },
}
</script>
<style>
.my{
    width: 100%;
    height: auto;
}
.my-top{
    width: 375px;
    height: 300px;
    background-image: url('/img/01.png') !important;
    background-repeat: no-repeat;
    background-size: 100%;
    text-align: center;
}
.my-top-img{
    width: 60px;
    height: 60px;
    margin-left: 155px;
    padding-top: 50px;
}
.my-top-img img{
    width: 100%;
    height: 100%;
}
.my-top-p{
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: #fff;
    margin-top: 10px;
}
.my-top-two{
    width: 375px;
    height: 74px;
    margin-top: 90px;
}
.my-top-two ul{
    list-style: none;
    display: flex;
}
.my-top-two ul li{
    width: 33%;
}
.my-top-two ul li p{
    font-size: 15px;
    margin-top: 5px;
}
.my-top-ul-li-p{
    color: #5bb8f5;
}
.my-top-ul-li-p1{
    color: #e60012;
}
.my-fen{
    
}
</style>
