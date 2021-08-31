import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    value: "",
    password: "",
    smsCode: "",
    text: "登录/注册"
  },
  mutations: {
    login(state,data){

    },
    log(state,data){
      state.text = data
    }
  },
  actions: {
  },
  modules: {
  }
})
