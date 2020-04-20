import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    veiculos: [{
      placa: "mbr5566",
      cor: "branco"
    }, {
      placa: "xdr9988",
      cor: "azul"
    }, {
      placa: "tyu3245",
      cor: "azul"
    }]
  },
  mutations: {
    cadastrarVeiculo(state, veiculo) {
      state.veiculos.push(veiculo)
    }
  },
  actions: {
  },
  modules: {
  }
})
