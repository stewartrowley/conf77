import { defineStore } from 'pinia'
import ApiServices from '../services/ApiServices';

export const useConfStore = defineStore('conf', {
  state () {
    return {
      teams: [],
      confs: {
         red: { 
          redA: [],
          redB: [],
          redC: []
         },
         orange: {
          orangeA: [],
          orangeB: []
         },
         yellow: {
          yellowA: [],
          yellowB: [],
          yellowC: []
         },
         green: {
          greenA: [],
          greenB: [],
          greenC: []
         },
         blue: {
          blueA: [],
          blueB: [],
          blueC: []
         },
         purple: {
          purpleA: [],
          purpleB: []
         },
         white: {
          whiteA: [],
          whiteB: []
         }
      },
      conferances: [
        "blue",
        "green",
        "yellow",
        "orange",
        "red",
        "purple",
        "white"
      ],
      groups: [
        "blueA",
        "blueB",
        "blueC",
        "greenA",
        "greenB",
        "greenC",
        "yellowA",
        "yellowB",
        "yellowC",
        "orangeA",
        "orangeB",
        "redA",
        "redB",
        "purpleA",
        "purpleB",
        "whiteA",
        "whiteB"
      ]

      
    };
  },
  getters: {
    getTeams () {
      return this.teams;
    },
    formatConfByColor () {
      this.teams.forEach((element) => {
         const color = element.cardColor;
         const group = element.group;
         const conf = this.confs[color];
         conf[group].push(element)
      })
    }
  },
  actions: {
    setTeams () {
      ApiServices.getTeams()
      .then((response) => {
        this.teams = response.data;
        this.formatConfByColor;
      })
      .catch((error) => {
        console.log(error);
      })
    },
  }
})
