import { defineStore } from 'pinia'

export const useConfStore = defineStore('conf', {
  state () {
    return {
      teams: [],
      confs: {
         red: [],
         orange: [],
         yellow: [],
         green: [],
         blue: [],
         purple: [],
         white: []
      }

      
    };
  },
  getters: {
    getTeams () {
      return this.teams;
    },
    formatConfByColor () {
      console.log(this.teams.length);
      this.teams.forEach((element) => {
         const color = element.cardColor;
         this.confs[color].push(element)
      })
      console.log(this.confs);
    }
  },
  actions: {
    setTeams (item) {
      this.teams = item;
      console.log(this.teams);
    },
  }
})
