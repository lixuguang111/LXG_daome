<template>
    <div class="tabbar">
        <router-link :to="item.url" v-for="(item,index) in tabbarlist" :key="index">
            <p><img :src="active == index ? item.nav_img_checked : item.nav_img" alt="" @click="add(index)"></p>
            <span>{{item.name}}</span>
        </router-link>
    </div>
</template>

<script>
import {tabbar} from '@/http/api'
export default {
    data() {
        return {
            tabbarlist:[],
            active:0
        }
    },
    async created() {
        let {data:{data:{index:res}}} = await tabbar()
        var list = ['/index','/class','/zixun','/books','/my']
        res.forEach((item,k) => {
            item.url = list[k]
        });
        this.tabbarlist = res
    },
    methods: {
        add(id){
            this.active = id
        }
    },
}
</script>

<style>
.tabbar{
    width: 100%;
    height: 80px;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    text-align: center;
    background: #fff;
}
.tabbar a{
    flex: 1;
    text-align: center;
}
.tabbar a p{
    width: 40px;
    height: 40px;
    margin-left: 17px;
    margin-top: 10px;
}
.tabbar a p img{
    width: 100%;
    height: 100%;
}
.tabbar a span{
    font-size: 15px;
}
.router-link-active{
    color: red;
}
</style>
