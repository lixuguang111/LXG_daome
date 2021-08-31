<template>
    <div>
        <router-view></router-view>
        <footer>
            <ul>
                <li><router-link to="/home">首页</router-link></li>
                <li><router-link to="/class">课程</router-link></li>
                <li><router-link to="/ask">咨询</router-link></li>
                <li><router-link to="/imgs">图片</router-link></li>
                <li><router-link to="/login">我的</router-link></li>
            </ul>
        </footer>
        
    </div>
</template>
<style>
footer ul{
    width: 100%;
    float: left;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0px;

}
li a{
    font-size: 20px;
    text-decoration: none;
    color: #999;
}
</style>

