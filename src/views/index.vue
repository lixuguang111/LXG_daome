<template>
    <div class="index">
        <!-- 搜索框 -->
        <div class="index-top">
            <p class="index-top-p"><img src="/img/06.png" alt=""></p>
            <input type="text" placeholder="   搜索">
            <p class="index-top-img"><img src="/img/07.png" alt=""></p>
            <span><img src="/img/08.png" alt=""></span>
        </div>
        <div class="index-con">
            <!-- 轮播图 -->
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item,key) in imglist" :key="key">
                    <img :src="'/img/'+item" alt="">
                </van-swipe-item>
            </van-swipe>
            <div class="index-con-list">
                <ul>
                    <li>
                        <p><img src="/img/09.png" alt=""></p>
                        <span>大威天龙</span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 资深讲师 -->
        <div class="index-zishen">
            <div class="index-zishen-top">
                <div class="index-zishen-top-left">
                    <span></span>
                    <p>资深讲师</p>
                </div>
                <div class="index-zishen-top-right">
                    <span>更多</span>
                    <img src="/img/14.png" alt="">
                </div>
            </div>
            <div class="index-zishen-con">
                <div class="index-zishen-con-box" v-for="(item,key) in recommendlist[0].list" :key="key">
                    <div class="index-zishen-con-box-img"><img :src="'/img/'+item.teacher_avatar" alt=""></div>
                    <div class="index-zishen-con-box-p">
                        <p class="index-zishen-con-box-p-one">{{item.teacher_name}}</p>
                        <p class="index-zishen-con-box-p-two">{{item.introduction}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="index-zishen">
            <div class="index-zishen-top">
                <div class="index-zishen-top-left">
                    <span></span>
                    <p>推荐课程</p>
                </div>
                <div class="index-zishen-top-right">
                    <span>更多</span>
                    <img src="/img/14.png" alt="">
                </div>
            </div>
            <div class="index-zishen-con">
                <div class="index-zishen-con-box" v-for="(item,key) in recommendlist[1].list" :key="key">
                    <div class="index-zishen-con-box-img"><img :src="'/img/'+item.cover_img" alt=""></div>
                    <div class="index-zishen-con-box-p">
                        <p class="index-zishen-con-box-p-one">{{item.title}}</p>
                        <p class="index-zishen-con-box-p-two">{{item.sales_num}}人已报名</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="index-zishen">
            <div class="index-zishen-top">
                <div class="index-zishen-top-left">
                    <span></span>
                    <p>名师</p>
                </div>
                <div class="index-zishen-top-right">
                    <span>更多</span>
                    <img src="/img/14.png" alt="">
                </div>
            </div>
            <div class="index-zishen-con">
                <div class="index-zishen-con-box" v-for="(item,key) in recommendlist[2].list" :key="key">
                    <div class="index-zishen-con-box-img"><img :src="'/img/'+item.teacher_avatar" alt=""></div>
                    <div class="index-zishen-con-box-p">
                        <p class="index-zishen-con-box-p-one">{{item.teacher_name}}</p>
                        <p class="index-zishen-con-box-p-two">{{item.introduction}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {banner,recommend} from '@/http/api'
export default {
    data() {
        return {
            imglist:['03.jpg','04.jpg'],
            recommendlist:[]
        }
    },
    async created() {
        let {data:{data:res}} = await recommend()
        var imglist = ['10.png','11.png','12.jpeg','13.png']
        console.log(res,'res');
        res[0].list.forEach((item,key) => {
            item.teacher_avatar = imglist[key]
        });
        var imglist1 = ['10.png','11.png','12.jpeg','13.png','15.png','16.png']
        res[1].list.forEach((item,key) => {
            item.cover_img = imglist1[key]
        });
        var imglist2 = ['10.png','11.png','12.jpeg','13.png','15.png','16.png']
        res[2].list.forEach((item,key) => {
            item.teacher_avatar = imglist2[key]
        });
        this.recommendlist = res
        // console.log(data);
        console.log(this.recommendlist,'recommendlist');
    },
}
</script>

<style>
.index{
    width: 375px;
    height: 100%;
    background: rgb(245, 245, 245);
    overflow: auto;
}
/* 顶部 */
.index-top{
    width: 375px;
    height: 50px;
    display: flex;
    align-items: center;
    position: relative;
    background: #fff;
}
.index-top-p{
    width: 30px;
    height: 30px;
    margin-left: 15px;
}
.index-top-p img{
    width: 100%;
    height: 100%;
}
.index-top-img{
    width: 12px;
    height: 12px;
    position: absolute;
    top: 19px;
    left: 300px;
}
.index-top-img img{
    width: 100%;
    height: 100%;
}
.index-top span{
    width: 20px;
    height: 18px;
    margin-right: 15px;
}
.index-top span img{
    width: 100%;
    height: 100%;
}
.index-top input{
    width: 275px;
    height: 30px;
    border-radius: 15px;
    border: 1px solid #ccc;
    margin: 0 11px;
}
/* 轮播图 */
.van-swipe{
    width: 375px;
    height: 255px;
}
.van-swipe-item{
    width: 375px;
    height: 255px;
}
.van-swipe-item img{
    width: 100%;
    height: 100%;
}
.index-con{
    width: 375px;
    height: 355px;
    background: #fff;
    margin-bottom: 15px;
}
.index-con-list{
    width: 375px;
    height: 100px;
    box-sizing: border-box;
    padding: 10px;
}
.index-con-list ul{
    list-style: none;
    display: flex;
    align-items: center;
}
.index-con-list ul li{
    width: 78px;
    height: 78px;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
}
.index-con-list ul li p{
    width: 20px;
    height: 20px;
    display: block;
    margin-left: 20px;
    margin-top: 10px;
}
.index-con-list ul li p img{
    width: 100%;
    height: 100%;
}
.index-con-list ul li span{
    font-size: 14px;
    margin-top: 10px;
    display: inline-block;
}

/* 资深讲师 */
.index-zishen{
    width: 375px;
}
.index-zishen-top{
    width: 375px;
    height: 16px;
    display: flex;
    justify-content: space-around;
}
.index-zishen-top-left{
    width: 200px;
    line-height: 16px;
    display: flex;
}
.index-zishen-top-left span{
    display: inline-block;
    width: 3px;
    height: 16px;
    background: #f00;
}
.index-zishen-top-left p{
    margin-left: 20px;
    font-size: 15px;
}
.index-zishen-top-right{
    width: 90px;
    line-height: 16px;
    text-align: right;
}
.index-zishen-top-right span{
    font-size: 14px;
    display: inline-block;
    margin-right: 5px;
}
.index-zishen-top-right img{
    width: 9px;
    height: 13px;;
}
.index-zishen-con{
    width: 375px;
    box-sizing: border-box;
    padding: 15px;
}
.index-zishen-con-box{
    width: 345px;
    height: 81px;
    background: #fff;
    box-sizing: border-box;
    padding: 15px;
    margin-bottom: 15px;
    display: flex;
    justify-content: flex-start;
}
.index-zishen-con-box-img{
    width: 40px;
    height: 40px;
    margin-right: 12px;
}
.index-zishen-con-box-img img{
    width: 100%;
    height: 100%;
    border-radius: 20px;
}
.index-zishen-con-box-p{
    width: 260px;
    height: 51px;
}
.index-zishen-con-box-p-one{
    width: 260px;
    line-height: 25px;
    margin-bottom: 5px;
}
.index-zishen-con-box-p-two{
    color: #b7b7b7;
}
</style>
