<template>
   <div>
      <!-- <DropDown :options="getYear"/> -->
      <button @click="this.handleGenerate">Generate Schedule</button>
      <div v-if="getSchedule">
      <div v-for="games in getSchedule[0].schedule">
         <h4 @click="this.handleScheduleView(games)">{{ games.teamName }}</h4>                
         <div v-if="games.isSelected === true" v-for="game, index in games.games" :key="index">
            <div @click="this.handleGameView(game)" style="display: flex; flex-direction: row;">
               <p v-if="game.location === 'home'" @click="this.handleScore(games)">{{index + 1}}. {{ game.matchup[1].name }} vs {{ game.matchup[0].name }} </p>
               <p v-else @click="this.handleScore(games)">{{index + 1}}. {{ game.matchup[0].name }} vs {{ game.matchup[1].name }} </p>
               <p style="padding-left: 5px;" v-if="game.result">{{game.result}}</p>
               <p style="padding-left: 5px;" v-if="game.result">{{game.scoreRecord}}</p>
            </div>
            <ScoreForm v-if="game.isCurrent" :item="getSchedule[0]" :game="game" :location="game.location" :team="games"/>
         </div>
      </div>
      </div>
   </div>
</template>
<script>
import { useScheduleStore } from '../stores/scheduleStore';
import ScoreForm from './ScoreForm.vue';
// import DropDown from './DropDown.vue';
export default {
   setup () {
      const scheduleStore = useScheduleStore();
      return {
         scheduleStore
      }
   },
   components: {
      ScoreForm
      // DropDown
   },
   data () {
      return {
         year: [
            {value: 1, name: "One"}
         ],
         isInput: false,
      }
   },
   computed: {
      getYear () {
         return this.year;
      },
      getSchedule () {
         return this.scheduleStore.schedules;
      }
   },
   methods: {
      handleGenerate () {
         this.scheduleStore.generateSchedule();
      },
      handleScheduleView (team) {
         console.log(team);
         team.games.forEach((element) => {
            element.isCurrent = false;
         });
         team.isSelected = team.isSelected ? false : true;
      },
      handleGameView (game) {
         game.isCurrent = game.isCurrent ? false : true;
      },
      handleScore () {
         this.isInput = true;
      }
   }
}
</script>
<style scoped>
   
</style>