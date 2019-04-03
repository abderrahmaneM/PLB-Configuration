import Vue from 'vue'
import Vuex,{Store} from 'vuex'

Vue.use(Vuex)
export const store=new Store({

    state:{
        name:'TOTO',
        cryptocurrencies:[],
        loading:true,
    },
    getters :{

        name: state => state.name,
        const
    },
    mutations:{
               setCryptourrencies(state,ReultatDuFetch){
                   state.cryptocurrencies=ResultatDuFetch
               },
        toggleLoadinf(state){
                   state.loading=!state.loading
        }
    }
})