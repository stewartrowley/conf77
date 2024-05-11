import { defineStore } from 'pinia'
import ApiServices from '../services/ApiServices';
import { useScheduleStore } from './scheduleStore';

export const useConfStore = defineStore('conf', {
  state () {
    return {
      teamStandings: [],
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
    getTeamStanding () {
      return this.teamStandings;
    },
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
    getTeamStandings () {
      console.log(this.confs);
      this.conferances.forEach((conf) => {
        let confData = this.confs[conf];
        console.log(confData);
        this.groups.forEach((group) => {
           if(group.slice(0, -1) == conf) {
              console.log('it made it')
              const groups = confData[group];
              console.log(groups);
            console.log(groups);
              groups.forEach((team) => {
                let item = this.getRecord(team);
                team = item;
              })
              console.log(groups)
              this.teamStandings.push(...groups);
           }
           // group.forEach((team) => {
           //    console.log(team);
           // })
        })
      })
      // this.teamStandings.forEach((team) => {
      //   this.getRecord(team);
      // })
      // console.log(this.teamStandings);
      return this.teamStandings;
    },
    getRecord(team) {
      const scheduleStore = useScheduleStore();
      if (scheduleStore.getSchedule) {
         const schedule = scheduleStore.getSchedule[0].schedule;
         const teamSchedule = schedule.find(o => o.teamName === team.name)
         let winCount = 0;
         let loseCount = 0;
         let homeWinCount = 0;
         let homeLossesCount = 0;
         let awayWinCount = 0;
         let awayLossesCount = 0;
         let keysForged = 0;
         let keysAgainst = 0;
         let aemberGained = 0;
         let aemberAgainst = 0;
         const teamGames = teamSchedule.games;
         teamGames.forEach((item) => {
            if (item.result != undefined) {
               keysForged = keysForged + JSON.parse(item.keysForged);
               keysAgainst = keysAgainst + JSON.parse(item.keysAgainst);
               aemberGained = aemberGained + JSON.parse(item.aemberGained);
               aemberAgainst = aemberAgainst + JSON.parse(item.aemberAgainst)
               if (item.result === 'W') {
                  if (item.location === 'home') {
                     homeWinCount = homeWinCount + 1;
                  } else {
                     awayWinCount = awayWinCount + 1;
                  }
                  winCount = winCount + 1;
               } else {
                  if (item.location === 'home') {
                     homeLossesCount = homeLossesCount + 1;
                  } else {
                     awayLossesCount = awayLossesCount + 1;
                  }
                  loseCount = loseCount + 1;
               }
            }
         })
         team.keysForged = keysForged;
         team.keysAgainst = keysAgainst;
         team.aemberGained = aemberGained;
         team.aemberAgainst = aemberAgainst;
         team.homeRecord = homeWinCount + '-' + homeLossesCount;
         team.awayRecord = awayWinCount + '-' + awayLossesCount;
         team.kfScore = keysForged - keysAgainst;
         team.netPoint = winCount - loseCount;
         team.totalWins = winCount;
         team.totalLosses = loseCount;
         team.record = winCount + '-' + loseCount;
         return team;
      }
   },
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
