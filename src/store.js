import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      data:{},
      items:[],
      signInTag:true,
      username:''


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


      //来自的登录状态的存储
      getStorage: function (state) {
          for(let i in state){
              if(!state[i]){
                  state[i] = localStorage.getItem(i)
              }
          }
          return state;
      },
      setStorage(state,obj){
          for(let i in obj){
              for(let key in state){
                  if(i == key){
                      state[key] = obj[i];
                      localStorage.setItem(i,state[key]);
                  }
              }

          }
      },
      removeAll(state){
          for(let i in state){
              state[i] = "";
              if(localStorage.getItem(i)){
                  localStorage.removeItem(i);
              }
          }
      },
  },
  actions: {

  }
})
