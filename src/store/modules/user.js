import UserApi from '@/assets/js/axios/user'
let state = {
  userInfo: null
}

let mutations = {
  SET_USERINFO (state, userInfo) {
    state.userInfo = userInfo
  }
}

let actions = {
  setUserInfo (context, payload) {
    UserApi.getContractAllList().then(res => {

    })
  }
}

export default {
  state,
  mutations,
  actions
}