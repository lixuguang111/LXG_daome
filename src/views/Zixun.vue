<template>
    <div class="zi_zi">
        <van-tabs v-model="active" @change="daa">
  <van-tab :title="item.name" v-for="(item,index) in tab" :key="index"  >
     <div class="zisheng">
            <!-- 信息 -->
            <div class="zi_xin" v-for="(item,index) in ke" :key="index" @click="$router.push('/zx_detail?id='+item.id)">
                <img class="ke_img" :src="item.thumb_img" alt="">
                <div class="zi_r">
                    <p class="ke_p1" style="font-size:14px">{{item.title}}</p>
                    <p class="ke_p">{{item.description}}</p>
                    <p class="ke_p3"> <van-icon name="browsing-history-o" />{{item.click_rate}}</p>
                </div>
            </div>
        </div>
  </van-tab>
</van-tabs>
   </div>
</template>
<script>
import { Service ,content} from "@/http/api";
export default {
  data() {
    return {
      tab: [],
      active: "",
      ke: [],
      cid: 0,
      page: 1,
      limit: 10
    };
  },
  methods: {
    async gettab() {
      let res = await Service();
      console.log(res, "资讯页面的title");
      this.tab = res.data.data;
    },
    async getaas() {
      let res = await content({
        page: this.page,
        limit: this.limit,
        classify_id: this.cid
      });
      console.log(res, "xxx");
      this.ke = res.data.data.list;
    },
    daa(e) {
        console.log(e);
      if (e == 0) {
        this.cid = 0;
        this.getaas();
      }
      if (e == 1) {
        this.cid = 9;
        this.getaas();
      }
      if (e == 2) {
        this.cid = 10;
        this.getaas();
      }
      if (e == 3) {
        this.cid = 33;
        this.getaas();
      }
      if (e == 4) {
        this.cid = 33;
        this.getaas();
      }
    }
  },
  created() {
    this.gettab();
    this.getaas();
  }
};
</script>
<style>
.zi_zi {
  width: 100%;
  height: 100%;
  background: #f7f8fa;
}
.ke_img {
  width: 35%;
  height: 90%;
  margin-top: 5px;
  margin-left: 5px;
  border-radius: 5px;
}
.ke_p {
  margin-top: 15px;
}
.ke_r {
  margin-top: 36px;
  margin-left: 103px;
}
.zisheng {
  width: 100%;
}
.zi_xin {
  width: 90%;
  height: 75px;
  background: white;
  border-radius: 5px;
  margin-left: 5%;
  display: flex;
  margin-top: 20px;
}
.zi_r {
  margin-left: 20px;
}
.ke_p1 {
  margin-top: 5px;
}
.ke_p {
  margin-top: 5px;
  color: darkgrey;
}
.ke_p3 {
  color: #ddd;
  margin-top: 10px;
}
</style>
