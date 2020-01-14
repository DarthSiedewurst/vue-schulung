import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    heroes: [
      {name: 'Jabba The Hut' , id: 0},
      {name: 'Aquaman' , id: 1},
      {name: 'Iron Man' , id: 2},
    ],
  },
  mutations: {
    setHeroes(state: any, heroes:object[]){
      state.heroes = heroes;
    },
  },
});
