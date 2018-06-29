import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      data:{},
      items:[],
      signInTag:true,
      loginMsg:{
          username:''
      }


  },
    getters:{

    },
  mutations: {
      changeTag(state){
          state.signInTag = !state.signInTag;
      },
      add(state,OneFloor){
        state.data.OneFloor = OneFloor;
      },
      addnickname(state,nickname){
          state.data.nickname = nickname;
      },
      addCartMsg(state,cartsMsg){
        state.items.push(cartsMsg);
      },
      detailId(state,getId){
        state.data.getId = getId;
      },


      //来自李超大佬的登录状态的存储
      getStorage: function (state) {
          for(let i in state.loginMsg){
              if(!state[i]){
                  state[i] = localStorage.getItem(i)
              }
          }
          return state.loginMsg;
      },
      setStorage(state,obj){
          for(let i in obj){
              for(let key in state.loginMsg){
                  if(i == key){
                      state.loginMsg[key] = obj[i];
                      localStorage.setItem(i,state.loginMsg[key]);
                  }
              }

          }
      },
      removeAll(state){
          for(let i in state.loginMsg){
              state.loginMsg[i] = "";
              if(localStorage.getItem(i)){
                  localStorage.removeItem(i);
              }
          }
      },
  },
  actions: {

  }
})
