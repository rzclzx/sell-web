
let state = {
  productList: []
}

let mutations = {
  SET_PRODUCTLIST (state, list) {
    state.productList = list
  }
}

export default {
  state,
  mutations
}