<template>
   <div v-if="getTeamStandings">
      <div v-for="conferance in getConferances">
         <h1>{{ conferance }}</h1>
         <div v-for="group in getGroups">
            <div v-if="group.slice(0, -1) === conferance">
               <h3>{{ group }}</h3>
               <table>
                  <thead>
                     <tr>
                        <th v-for="header in getHeaders">{{ header }}</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr v-for="team in this.getTeams(group)">
                        <td>{{ team.name }}</td>
                        <td>{{ team.record }}</td>
                        <td>{{ team.homeRecord }}</td>
                        <td>{{ team.awayRecord }}</td>
                        <td>{{ team.keysForged }}</td>
                        <td>{{ team.keysAgainst }}</td>
                        <td>{{ team.kfScore }}</td>
                        <td>{{ team.aemberGained }}</td>
                        <td>{{ team.aemberAgainst }}</td>
                        <td>{{ team.netPoint }}</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import { useConfStore } from '../stores/confStore';
import { useScheduleStore } from '../stores/scheduleStore';
export default {
   setup() {
      const confStore = useConfStore();
      // confStore.getTeamStandings();
      const scheduleStore = useScheduleStore();
      return {
         confStore,
         scheduleStore
      }
   },

   data() {
      return {
         groupData: [],
         standingsHeaders: [
            'Team Name',
            'Record',
            'Home',
            'Away',
            'Keys Foraged',
            'Keys Against',
            'Kf Score',
            'Aember Gained',
            'Aember Against',
            'Net Score'
         ],
         homeRecord: '0-0',
         awayRecord: '0-0',
         keysForged: 0,
         keysAgainst: 0,
         aemberGained: 0,
         aemberAgainst: 0
      }
   },
   computed: {
      getTeamStandings () {
         return this.confStore.getTeamStanding;
      },
      getHeaders() {
         return this.standingsHeaders;
      },
      getConferances() {
         return this.confStore.conferances;
      },
      getGroups() {
         return this.confStore.groups;
      },
      getTeamData () {
         return this.confStore.teamStandings;
      }
      // getTeams() {
      //    console.log(this.confStore.confs.blue.blueA);
      //    return this.confStore.confs
      // },
   },
   methods: {
      getTeams (group) {
         console.log(this.getTeamStandings);
         const item = this.getTeamStandings.filter((a) => a.group === group);
         item.sort((a, b) => b.kfScore - a.kfScore)
         console.log(item);
         return item;
      },
      // getFormattedData () {
      //    this.getConferances.forEach((conf) => {   
      //       let confData = this.confStore.confs[conf];
      //       this.getGroups.forEach((group) => {
      //          if(group.slice(0, -1) == conf) {
      //             console.log('it made it')
      //             console.log(confData[group]);
      //             const groups = confData[group];
      //             this.groupData.[...confData[group]];
      //             // groups.forEach((element) => {
      //             //    console.log(element);
      //             //    const team = this.getRecord(element);
      //             //    console.log(team);
      //             //    this.groupData.push(team);
      //             // })
      //          }
      //          // group.forEach((team) => {
      //          //    console.log(team);
      //          // })
      //       })
      //    })
      //    console.log(this.groupData);
      // },
      getHomeRecord () {
         return this.homeRecord;
      },
      getAwayRecord () {
         return this.awayRecord;
      },
      getKeysForged () {
         return this.keysForged;
      },
      getKeysAgainst () {
         return this.keysAgainst;
      },
      getAemberGained () {
         return this.aemberGained;
      },
      getAemberAgainst () {
         return this.aemberAgainst;
      },
      // getRecord(team) {
      //    if (this.scheduleStore.getSchedule) {
      //       const schedule = this.scheduleStore.getSchedule[0].schedule;
      //       const teamSchedule = schedule.find(o => o.teamName === team.name)
      //       let winCount = 0;
      //       let loseCount = 0;
      //       let homeWinCount = 0;
      //       let homeLossesCount = 0;
      //       let awayWinCount = 0;
      //       let awayLossesCount = 0;
      //       let keysForged = 0;
      //       let keysAgainst = 0;
      //       let aemberGained = 0;
      //       let aemberAgainst = 0;
      //       console.log(teamSchedule);
      //       const teamGames = teamSchedule.games;
      //       teamGames.forEach((item) => {
      //          if (item.result != undefined) {
      //             keysForged = keysForged + JSON.parse(item.keysForged);
      //             keysAgainst = keysAgainst + JSON.parse(item.keysAgainst);
      //             aemberGained = aemberGained + JSON.parse(item.aemberGained);
      //             aemberAgainst = aemberAgainst + JSON.parse(item.aemberAgainst)
      //             if (item.result === 'W') {
      //                if (item.location === 'home') {
      //                   homeWinCount = homeWinCount + 1;
      //                } else {
      //                   awayWinCount = awayWinCount + 1;
      //                }
      //                winCount = winCount + 1;
      //             } else {
      //                if (item.location === 'home') {
      //                   homeLossesCount = awayLossesCount + 1;
      //                } else {
      //                   awayLossesCount = awayLossesCount + 1;
      //                }
      //                loseCount = loseCount + 1;
      //             }
      //          }
      //       })
      //       this.keysForged = keysForged;
      //       this.keysAgainst = keysAgainst;
      //       this.aemberGained = aemberGained;
      //       this.aemberAgainst = aemberAgainst;
      //       this.homeRecord = homeWinCount + '-' + homeLossesCount;
      //       this.awayRecord = awayWinCount + '-' + awayLossesCount;
      //       return winCount + '-' + loseCount;
      //    }
      // },
   }
}
</script>
<style lang="">

</style>