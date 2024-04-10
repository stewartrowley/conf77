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
      <
      <div>
         <h1>Blue</h1>
         <div>
            <h3>Blue A</h3>
            <div v-for="team in getTeams.blue.blueA" style="display: flex; flex-direction: row;">
               <p>{{ team.name }}</p>
               <p style="padding-left: 5px;">{{ this.getRecord(team) }}</p>
            </div>
         </div>
         <div>
            <h3>Blue B</h3>
            <div v-for="team in getTeams.blue.blueB" style="display: flex; flex-direction: row;">
               <p>{{ team.name }}</p>
               <p style="padding-left: 5px;">{{ this.getRecord(team) }}</p>
            </div>
         </div>
         <div>
            <h3>Blue C</h3>
            <div v-for="team in getTeams.blue.blueC" style="display: flex; flex-direction: row;">
               <p>{{ team.name }}</p>
               <p style="padding-left: 5px;">{{ this.getRecord(team) }}</p>
            </div>
         </div>
      </div>
      <div>
         <h1>Green</h1>
         <div>
            <h3>Green A</h3>
            <div v-for="team in getTeams.green.greenA" style="display: flex; flex-direction: row;">
               <p>{{ team.name }}</p>
               <p style="padding-left: 5px;">{{ this.getRecord(team) }}</p>
            </div>
         </div>
         <div>
            <h3>Green B</h3>
            <div v-for="team in getTeams.green.greenB" style="display: flex; flex-direction: row;">
               <p>{{ team.name }}</p>
               <p style="padding-left: 5px;">{{ this.getRecord(team) }}</p>
            </div>
         </div>
         <div>
            <h3>Green C</h3>
            <div v-for="team in getTeams.green.greenC" style="display: flex; flex-direction: row;">
               <p>{{ team.name }}</p>
               <p style="padding-left: 5px;">{{ this.getRecord(team) }}</p>
            </div>
         </div>
      </div>
      <div>
         <h1>Yellow</h1>
         <div>
            <h3>Yellow A</h3>
            <div v-for="team in getTeams.yellow.yellowA" style="display: flex; flex-direction: row;">
               <p>{{ team.name }}</p>
               <p style="padding-left: 5px;">{{ this.getRecord(team) }}</p>
            </div>
         </div>
         <div>
            <h3>Yellow B</h3>
            <div v-for="team in getTeams.yellow.yellowB" style="display: flex; flex-direction: row;">
               <p>{{ team.name }}</p>
               <p style="padding-left: 5px;">{{ this.getRecord(team) }}</p>
            </div>
         </div>
         <div>
            <h3>Yellow C</h3>
            <div v-for="team in getTeams.yellow.yellowC" style="display: flex; flex-direction: row;">
               <p>{{ team.name }}</p>
               <p style="padding-left: 5px;">{{ this.getRecord(team) }}</p>
            </div>
         </div>
      </div>
      <div>
         <h1>Orange</h1>
         <div>
            <h3>Orange A</h3>
            <div v-for="team in getTeams.orange.orangeA" style="display: flex; flex-direction: row;">
               <p>{{ team.name }}</p>
               <p style="padding-left: 5px;">{{ this.getRecord(team) }}</p>
            </div>
         </div>
         <div>
            <h3>Orange B</h3>
            <div v-for="team in getTeams.orange.orangeB" style="display: flex; flex-direction: row;">
               <p>{{ team.name }}</p>
               <p style="padding-left: 5px;">{{ this.getRecord(team) }}</p>
            </div>
         </div>
      </div>
      <div>
         <h1>Red</h1>
         <div>
            <h3>Red A</h3>
            <div v-for="team in getTeams.red.redA" style="display: flex; flex-direction: row;">
               <p>{{ team.name }}</p>
               <p style="padding-left: 5px;">{{ this.getRecord(team) }}</p>
            </div>
         </div>
         <div>
            <h3>Red B</h3>
            <div v-for="team in getTeams.red.redB" style="display: flex; flex-direction: row;">
               <p>{{ team.name }}</p>
               <p style="padding-left: 5px;">{{ this.getRecord(team) }}</p>
            </div>
         </div>
      </div>
      <div>
         <h1>Purple</h1>
         <div>
            <h3>Purple A</h3>
            <div v-for="team in getTeams.purple.purpleA" style="display: flex; flex-direction: row;">
               <p>{{ team.name }}</p>
               <p style="padding-left: 5px;">{{ this.getRecord(team) }}</p>
            </div>
         </div>
         <div>
            <h3>Purple B</h3>
            <div v-for="team in getTeams.purple.purpleB" style="display: flex; flex-direction: row;">
               <p>{{ team.name }}</p>
               <p style="padding-left: 5px;">{{ this.getRecord(team) }}</p>
            </div>
         </div>
      </div>
      <div>
         <h1>White</h1>
         <div>
            <h3>White A</h3>
            <div v-for="team in getTeams.white.whiteA" style="display: flex; flex-direction: row;">
               <p>{{ team.name }}</p>
               <p style="padding-left: 5px;">{{ this.getRecord(team) }}</p>
            </div>
         </div>
            <h3>White B</h3>
            <div v-for="team in getTeams.white.whiteB" style="display: flex; flex-direction: row;">
               <p>{{ team.name }}</p>
               <p style="padding-left: 5px;">{{ this.getRecord(team) }}</p>
            </div>
      </div>
   </div>
</template>
<script>
import { useConfStore } from '../stores/confStore';
import { useScheduleStore } from '../stores/scheduleStore';
export default {
   setup () {
      const confStore = useConfStore();
      const scheduleStore = useScheduleStore();
      return {
         confStore,
         scheduleStore
      }
   },
   data () {
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
      getHeaders () {
         return this.standingsHeaders;
      },
      getConferances () {
         return this.confStore.conferances;
      },
      getGroups () {
         return this.confStore.groups;
      },
      getTeams () {
         console.log(this.confStore.confs.blue.blueA);
         return this.confStore.confs
      }
   },
   methods: {
      getGroupData (conf, group) {
         const confData = this.confStore.confs[conf]
         console.log(confData[group])
         return confData[group];
      },
      getRecord (team) {
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