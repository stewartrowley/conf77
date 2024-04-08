<template>
   <div>
      <!-- <DropDown :options="getYear"/> -->
      <button @click="this.handleGenerate">Generate Schedule</button>
      <div v-if="getSchedule">
      <div v-for="games in getSchedule[0].schedule">
         <h4 @click="this.handleScheduleView(games)">{{ games.teamName }}</h4>                
         <div v-if="games.isSelected === true" v-for="game, index in games.games" :key="index">
            <p v-if="game.location === 'home'" @click="this.handleScore(games)">{{index + 1}}. {{ game.matchup[1].name }} vs {{ game.matchup[0].name }} </p>
            <p v-else @click="this.handleScore(games)">{{index + 1}}. {{ game.matchup[0].name }} vs {{ game.matchup[1].name }} </p>
            <ScoreForm :item="getSchedule[0]" :game="game" :location="game.location" />
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
         team.isSelected = team.isSelected ? false : true;
      },
      handleScore () {
         this.isInput = true;
      }
   }
}
</script>
<style scoped>
   
</style>