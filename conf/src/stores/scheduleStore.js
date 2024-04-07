
import { defineStore } from 'pinia'
import { useConfStore } from './confStore';
import ApiServices from '../services/ApiServices';

export const useScheduleStore = defineStore('schedule', {
  state () {
    return {
      schedules: null,
    };
  },
  getters: {
  },
  actions: {
      getSchedules () {
         ApiServices.getSchedule()
         .then((response) => {
            this.schedules = response.data;
            this.schedules[0].schedule.forEach((element) => {
               element.isSelected = false;
            })
         })
         .catch((error) => {
            console.log(error);
         })
      },
      generateSchedule () {
         function shuffle(array) {
            let currentIndex = array.length;
          
            // While there remain elements to shuffle...
            while (currentIndex != 0) {
          
              // Pick a remaining element...
              let randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
          
              // And swap it with the current element.
              [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
          }
         const confStore = useConfStore();         
         const groups = confStore.groups;
         const confsSchedule = {
            year: null,
            schedule: []
         };
         const currSched = [];
         groups.forEach((element) => {
            console.log(element);
            const conferance = element.slice(0, -1);
            const currConf = confStore.confs[conferance];
            const currGroup = currConf[element];
            const games = ["home", "away"];
            const sched = element + "schedule"; 
            currConf[sched] = [];
            
            currGroup.forEach((item) => {
               const schedule = [];
               const team = item;
               const teams = [];
               currGroup.forEach((element) => {
                  if (element != item) {
                     teams.push(element);
                  }
               })
               games.forEach((opponent) => {
                  teams.forEach((item) => {
                     console.log(team);
                     schedule.push(
                        {
                           location: opponent,
                           matchup: [
                              team,
                              item
                           ]
                        }
                     )
                  });
               })
               shuffle(schedule);
               currConf[sched].push({
                  teamName: team.name,
                  conferance: conferance,
                  group: team.group,
                  games: schedule
               })
               currSched.push({
                  teamName: team.name,
                  conferance: conferance,
                  group: team.group,
                  games: schedule                 
               })
               // console.log(sched);
            })
         })
         confsSchedule.schedule = currSched
   
         confsSchedule.year = 1;
         const payload = confsSchedule;
         let isReady = false;
         this.schedules.forEach((sched) => {
            if (sched.year != confStore.confs.year) {
               isReady = false;
            }
         });
         isReady = true;
         if (isReady) {
            ApiServices.setSechedule(payload)
            .then((response) => {
               console.log(response);
            }) 
            .catch((error) => {
               console.log(error);
            })
         }
      }
  }
})
