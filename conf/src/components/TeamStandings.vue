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
                     <div v-for="team in this.getGroupData(conf, group)">
                        <tr>
                           <td>{{ team.name }}</td>
                           <td>{{ this.getRecord(team) }}</td>
                        </tr>
                     </div>
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
      }
   },
   methods: {
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
            const teamGames = teamSchedule.games;
            teamGames.forEach((item) => {
               if (item.result != undefined) {
                  if (item.result === 'W') {
                     winCount = winCount + 1;
                  } else {
                     loseCount = loseCount + 1;
                  }
               }
            })
            return winCount + '-' + loseCount;
         }
      }
   }
}
</script>
<style lang="">

</style>