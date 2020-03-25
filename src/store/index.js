import Vue from 'vue'
import Vuex from 'vuex'
import $axios from '@/service/config'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rivers: [],
    selectedRiver: ''
  },
  plugins: [createPersistedState()],
  getters: {
    getRivers: state => {
      return state.rivers
    },
    getRiver: (state) => {
      return state.selectedRiver
    }
  },
  mutations: {
    SET_RIVERS: (state, rivers) =>{
      state.rivers = rivers
    }
    ,
    ADD_RIVER: (state, river) => {
      state.rivers.push(river)
    },
   SELECT_RIVER : (state, river) => {
     console.log('river', river)
      state.selectedRiver = river
    },
    REMOVE_RIVER: (state, id) => {
      const index = state.rivers.findIndex(river => river.id == id)
      state.rivers.splice(index, 1)
     },
  },
  actions: {
    async getRivers({commit}) {
      const res = await $axios.get('/rivers');
      commit('SET_RIVERS', res.data);
  
  },
    async addRiver({commit}, payload){
      await $axios.post('/rivers/create', payload).then((response) => {
        commit('SET_RIVERS', response.data);
    });
          
  },
  async updateRiver({commit}, payload){
    console.log(payload.id)
    await $axios.put(`/rivers/${payload.id}/update`, payload).then((response) => {
      commit('SET_RIVERS', response.data);
    });
  },
  async deleteRiver({commit}, payload){
        await $axios.delete(`rivers/${payload.id}/delete`).then((response) => {
          console.log(response.data)
          commit('REMOVE_RIVER', payload.id)
        });
    }
  }
})
