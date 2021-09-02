<template>
    <div id="detail">
      <div class="top">
        <img :src="teacher.avatar" alt="">
        <p>{{teacher.real_name}}</p>
      </div>
      <div class="tabBar">
        <van-tabs v-model="active">
          <van-tab title="讲师介绍">
            <p class="inc">老师简介</p>
            <p class="des">{{teacher.introduction}}</p>
          </van-tab>
          <van-tab title="主讲课程">
            <div v-for="(item,index) in class_list" :key="index" class="class_item" @click="toClasses(item.id)">
              <div class="img">
                <img :src="item.cover_img" alt="">
              </div>
              <div class="des">
                <p><span>券</span><span>{{item.title}}</span></p>
                <p>
                  <span>{{item.sales_num}}人已报名</span>
                  <span></span>
                </p>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
</template>
<script>
import { teacher_des, classes } from "@/http/api";
export default {
  data() {
    return {
      id: 0,
      teacher: [],
      active: 0,
      class_list: [],
      id_class:0
    };
  },
  methods: {
    async getDetail() {
      let {
        data: { data: res }
      } = await this.$axios.get(
        "http://120.53.31.103:84/api/app/teacher/" + this.id + "?"
      );
      console.log(res);
      this.teacher = res.teacher;
    },
    async getClasses() {
      let {
        data: { data: res }
      } = await this.$axios.post(
        "http://120.53.31.103:84/api/app/teacher/mainCourse?teacher_id=" +
          this.id
      );
      console.log(res);
      this.class_list = res.list;
      console.log(this.class_list);
    },
    toClasses(id){
      this.$router.push('/classes?id='+id)
      
    }
  },
  created(id) {
    this.id = this.$store.state.id;
    console.log(this.id, "id");
    // this.id = this.$route.params.id
    // console.log(this.id);
    this.getDetail();
    this.getClasses();
  },
  mounted() {}
};
</script>
<style lang="scss">
#detail {
  width: 100%;
  .top {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    img {
      display: inline-block;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-top: 30px;
      margin-left: 40px;
    }
    p {
      padding-top: 50px;
      padding-left: 20px;
      font-size: 15px;
    }
  }
  .tabBar {
    width: 100%;
    .inc {
      color: #ddd;
      margin-top: 20px;
      margin-left: 20px;
    }
    .des {
      margin-top: 20px;
      margin-left: 20px;
    }
    .class_item{
      width: 100%;
      display: flex;
      justify-content: flex-start;
      .img{
        width: 30%;
        img{
          width: 80px;
          height: 80px;
          margin-left: 20px;
        }
      }
      .des p:nth-child(1) span:nth-child(1){
        color: white;
        width: 14px;
        height: 14px;
        background-color: red;
        border-radius: 5px;
        margin-right: 10px;
      }
      .des p:nth-child(2){
        margin-top: 25px;
        color: #ddd;
      }
    }
  }
}
</style>
