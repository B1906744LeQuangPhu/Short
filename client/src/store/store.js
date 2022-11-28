import {createStore} from 'vuex';

const store = createStore({
  state: {
    IdUser:"",
    name : "",
    phone: "",
    password:"",
    isAuthenticated: false,
    idDiary:""
  },
  getters:{
    // safelyStoredNumber: state => state.safelyStoredNumber,
    getName(state){
      return state.name
    },
    getPass(state){
      return state.password
    },
    getPhone(state){
      return state.phone
    },
    getId(state){
      return state.idDiary
    },
    getIdUser(state){
      return state.IdUser
    },
    getisAuthenticated(state){
      return state.isAuthenticated
    }
  },
  mutations:{
    updateIdUser(state,id){
      state.IdUser=id
    },
    updatePass(state,pass){
      state.password=pass
    },
    updateName (state, name){
      state.name=name
    },
    updatePhone (state, phone){
      state.phone=phone
    },
    updateId (state, id){
      state.phone=id
    },
    updateisAuthenticated(state){
      state.isAuthenticated=!state.isAuthenticated
    }
  }
});
export default store