<template>
    <div id="teachers">
        <div class="teachers" v-for="(item,index) in teachers_list" :key="index" @click="toDetail(item)">
            <div class="img">
                <img :src="item.avatar" alt="">
            </div>
            <div class="des">
                <p>{{item.real_name}}</p>
                <p>{{item.introduction}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {teachers,recommend} from '@/http/api'
export default {
    data(){
        return{
            teachers_list:[]
        }
    },
    methods:{
        toDetail(item){
            this.$router.push('/detail?id='+item.id)
            this.$store.commit('toDetail',item.id)
        }
    },
    async created(){
        let {data:{data:res}} = await teachers({page:1,limit:10})
        console.log(res);
        this.teachers_list = res.list;
        console.log(this.teachers_list);
        
    }
}
</script>

<style>
#teachers{
    width: 100%;
    background-color: aliceblue;
    margin-bottom: 60px;
}
.teachers{
    width: 90%;
    height: 100px;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #ddd;
    align-items: center;
    margin-top: 10px;
    margin-left: 5%;
    border-radius: 5px;
}
.teachers .img {
    width: 20%;
}
.teachers .img img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 10px;
}
</style>
