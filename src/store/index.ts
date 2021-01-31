import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});
export default new Vuex.Store({
  state: {
    pictures: [] as any,
  },
  mutations: {
    SET_CART_SENDING: (state, payload: number) => {
      let find = state.pictures.find((item: { id: number; status: string }) => {
        return item.id === payload;
      });
      if (!find) {
        state.pictures.push({
          id: payload,
          status: 'sending'
        });
      }

    },
    SET_CART_DONE: (state, payload: number) => {
      let findd : number = 5;
      state.pictures.forEach((item: { id: number; status: string },index:number) => {
        if(item.id === payload){
          findd = index
        }
      });
      state.pictures[findd].status = 'done'

    },
  },
  actions: {
    ADD_PICTURES({ commit,state }:any, payload: number) {

      commit('SET_CART_SENDING', payload);
      const getExchangeRate = async () => {
        try {
          const response = await axios.get('https://reqres.in/api/products');
          await response.data;
          return 'ok'

        } catch (e) {
          console.log(e.response); // this is the main part. Use the response property from the error object

          return 'not ok'
        }

      };
      getExchangeRate()
        . then(r => {
          if(r === 'ok'){
            setTimeout(() => { commit('SET_CART_DONE', payload)},1000)
          }
        });
    },
  },
  getters: {
    getTodoById: state => (id: any) => {
      if (state.pictures) {
        if (state.pictures.find((item: { id: any; }) => item.id === id)) {

          return state.pictures.find((item: { id: any; }) => item.id === id).status;

        }
        return 0;
      }
      return 0;
    }

  },
  modules: {},
  plugins: [vuexLocal.plugin],
});
