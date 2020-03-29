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
      state.selectedRiver = river
    },
    REMOVE_RIVER: (state, id) => {
      const index = state.rivers.findIndex(river => river.id == id)
      state.rivers.splice(index, 1)
     },
  },
  actions: {
    async callRivers({commit}) {
      await $axios.get('/rivers').then((response)=>{
        console.log(response)
        commit('SET_RIVERS', response.data);
      }).catch((error) => {
        console.warn(error);
    });
  },
    async addRiver({commit}, payload){
      await $axios.post('/rivers/create', payload).then((response) => {
        commit('SET_RIVERS', response.data);
        console.log(response.data)
    }).catch((error) => {
      console.warn(error);
  });
          
  },
  async updateRiver({commit}, payload){
    await $axios.put(`/rivers/${payload.id}/update`, payload).then((response) => {
      commit('SET_RIVERS', response.data);
      console.log(response.data)
    }).catch((error) => {
      console.warn(error);
  });
  },
  async deleteRiver({commit}, payload){
        await $axios.delete(`rivers/${payload.id}/delete`).then((response) => {
          commit('REMOVE_RIVER', payload.id)
          console.log(response.data)
        }).catch((error) => {
          console.warn(error);
      });
    }
  }
})
