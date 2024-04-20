<template>
   <div v-if="getTeams">
      <div v-for="conf in getConferances">
         <h1>{{ conf }}</h1>
         <div v-for="group in getGroups">
            <div v-if="group.slice(0, -1) === conf">
               <h3>{{ group }}</h3>
               <table>
                  <thead>
                     <tr>
                        <th v-for="header in getHeaders">{{ header }}</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr v-for="team in this.getGroupData(conf, group)">
                        <td>{{ team.name }}</td>
                        <td>{{ this.getRecord(team) }}</td>
                        <!-- <td>{{ this.getAwayRecord() }}</td>
                        <td>{{ this.getHomeRecord() }}</td>
                        <td>{{ this.getKeysForged() }}</td>
                        <td>{{ this.getKeysAgainst() }}</td>
                        <td>{{ this.getAemberGained() }}</td>
                        <td>{{ this.getAemberAgainst() }}</td> -->
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
      const scheduleStore = useScheduleStore();
      return {
         confStore,
         scheduleStore
      }
   },
   data() {
      return {
         standingsHeaders: [
            'Team Name',
            'Record',
            'Home',
            'Away',
            'Keys Foraged',
            'Keys Against',
            'Aember Gained',
            'Aember Against'
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
      getHeaders() {
         return this.standingsHeaders;
      },
      getConferances() {
         return this.confStore.conferances;
      },
      getGroups() {
         return this.confStore.groups;
      },
      getTeams() {
         console.log(this.confStore.confs.blue.blueA);
         return this.confStore.confs
      },
   },
   methods: {
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
      getGroupData(conf, group) {
         const confData = this.confStore.confs[conf]
         console.log(confData[group])
         return confData[group];
      },
      getRecord(team) {
         if (this.scheduleStore.getSchedule) {
            const schedule = this.scheduleStore.getSchedule[0].schedule;
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
            console.log(teamSchedule);
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
                        homeLossesCount = awayLossesCount + 1;
                     } else {
                        awayLossesCount = awayLossesCount + 1;
                     }
                     loseCount = loseCount + 1;
                  }
               }
            })
            this.keysForged = keysForged;
            this.keysAgainst = keysAgainst;
            this.aemberGained = aemberGained;
            this.aemberAgainst = aemberAgainst;
            this.homeRecord = homeWinCount + '-' + homeLossesCount;
            this.awayRecord = awayWinCount + '-' + awayLossesCount;
            return winCount + '-' + loseCount;
         }
      },
   }
}
</script>
<style lang="">

</style>