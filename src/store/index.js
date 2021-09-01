import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    value: "",
    password: "",
    smsCode: "",
    text: "登录/注册",
    id:0
  },
  mutations: {
    login(state,data){

    },
    log(state,data){
      state.text = data
    },
    toDetail(state,data){
      state.id = data
      console.log(state.id);
    }
  },
  actions: {
  },
  modules: {
  }
})
