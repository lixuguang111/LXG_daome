<template>
    <div class="login">
        <div class="top" @click="tolog">
            <img src="../assets/img/user.png" alt="">
            <i class="iconfont icon-user" style="font-size:45px;color:#999;border:3px solid #999;border-radius:50%;background-color:white;"></i>
            <p>登录/注册</p>
        </div>
        <div class="cla">
            <p>
                <span style="color:blue">0</span>
                <br>
                <span>我的学习</span>
            </p>
            <p>
                <span style="color:#FF0000">0</span>
                <br>
                <span>本周课时</span>
            </p>
            <p>
                <span style="color:#FF0000">0</span>
                <br>
                <span>我的积分</span>
            </p>
        </div>
        <div class="mine">
            <div class="work">
                <p>
                    <i class="iconfont icon-document"></i>
                    <span>我的作业</span>
                </p>
                <p class="squ"></p>
            </div>
            <div class="community">
                <p>
                    <i class="iconfont icon-app"></i>
                    <span>我的社区</span>
                </p>
                <p></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        tolog(){
            this.$router.push('/log')
        }
    }
}
</script>
<style>
html,body,.login{
    margin: 0;
    padding: 0;
    background-color: rgb(236, 236, 236);
}
.top{
    width: 100%;
    height: 230px;
    background-color: white;
}
.top img{
    width: 100%;
    position: relative;
}
.top i{
    position: absolute;
    top: 50px;
    left: 150px;
}
.top p{
    font-size: 16px;
    color: white;
    position: absolute;
    top: 120px;
    left: 140px;
}
.cla{
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: white;
}
.cla p{
    text-align: center;
    font-size: 16px;
}
.mine{
    background-color: white;
    margin-top: 15px;
    border-bottom: 1px solid #ddd;
}
.mine .work p i{
    font-size: 15px;
}
.mine .work p span{
    margin-left: 5px;
    color: #999;
    font-size: 15px;
}
.mine .community p i{
    font-size: 15px;
}
.mine .community p span{
    margin-left: 5px;
    color: #999;
    font-size: 15px;
}
.mine .work{
    display: flex;
    justify-content: space-between;
}
.mine .work .squ{
    border-left: 0;
    border-right: 1px solid #ddd;
    border-top: 1px solid #ddd;
    border-bottom: 0;
    transform:rotate(45deg) 
}
</style>
