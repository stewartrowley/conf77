<template>
  <div>
    <!-- <InputField :scoreHandler="this.handleScore" />
      <InputField :scoreHandler="this.handleScore" /> -->
      <div style="display: flex; flex-direction: row;">
         <div style="display: flex; flex-direction: column;">
            <label>Away Score</label>
            <input type="num" @keyup="this.handleScore($event, 1)" />
            <label>Away Aember</label>
            <input type="num" @keyup="this.handleAember($event, 1)" />
         </div>
         <div style="display: flex; flex-direction: column;">
            <label>Home Score</label>
            <input type="num" @keyup="this.handleScore($event, 2)" />
            <label>Home Aember</label>
            <input type="num" @keyup="this.handleAember($event, 2)" />
         </div>
      </div>
    <button @click="this.setGame">Save</button>
  </div>
</template>
<script>
import { useScheduleStore } from '../stores/scheduleStore';

// import InputField from './form/InputField.vue';
export default {
  props: ["item", "team", "game", "location"],
  // components: {
  //    InputField
  // },
  data () {
     return {
        awayScore: null,
        homeScore: null,
        awayAember: null,
        homeAember: null,
     }
  },
  methods: {
    handleScore(event, inputNum) {
      if (inputNum === 1) {
         this.awayScore = event.target.value;
      } else {
         this.homeScore = event.target.value;
      }
    },
    handleAember (event, inputNum) {
      if (inputNum === 1) {
         this.awayAember = event.target.value;
      } else {
         this.homeAember = event.target.value;
      }      
    },
    setGame () {
      console.log(this.$props.game);
      let propOpponentGame = {};
      if (this.$props.game.location === 'home') {
         propOpponentGame.location = 'away'
      } else {
         propOpponentGame.location = 'home'
      }

      propOpponentGame.matchup = [
         this.$props.game.matchup[1],
         this.$props.game.matchup[0]
      ]
      console.log(propOpponentGame);
      console.log(this.$props.game);
      const teamName = this.$props.game.matchup[0].name;
      const opponentName = this.$props.game.matchup[1].name;
      console.log(opponentName);
      const schedule = this.$props.item.schedule;
      console.log(schedule);
      const teamSchedule = schedule.find(o => o.teamName === this.$props.team.teamName);
      const opponentTeamSchedule = schedule.find(o => o.teamName === opponentName);
      const opponentTeamScheduleIndex = schedule.findIndex(o => o.teamName === opponentName);
      console.log(opponentTeamSchedule);
      const opponentsSchedule = opponentTeamSchedule.games;
      console.log(opponentsSchedule);
      console.log(propOpponentGame);
      let opponentTeamGameIndex = null;
      opponentsSchedule.forEach((word, index) => {
         if (word.location === propOpponentGame.location && word.matchup === propOpponentGame.matchup) {
            
            opponentTeamGameIndex = index;
         }
      });;
      console.log(opponentTeamGameIndex);
      // const teamScheduleIndex = teamSchedule.indexOf(this.$props.team);
      const teamEvents = teamSchedule.games;
      console.log(teamEvents);
      const teamGameIndex = teamEvents.indexOf(this.$props.game);
      console.log(teamGameIndex);
      console.log(teamSchedule);
      if (this.$props.game.location === 'away') {
         this.$props.game.keysForged = this.awayScore;
         this.$props.game.keysAgainst = this.homeScore;
         this.$props.game.aemberGained = this.awayAember;
         this.$props.game.aemberAgainst = this.homeAember;
         this.$props.game.scoreRecord = this.awayScore + '-' + this.homeScore;
         console.log(this.$props.item.schedule[parseInt(opponentTeamScheduleIndex)].games[parseInt(teamGameIndex)]);
         this.$props.item.schedule[parseInt(opponentTeamScheduleIndex)].games[parseInt(teamGameIndex)].keysForged = this.homeScore;
         if (this.awayScore > this.homeScore) {
            this.$props.game.result = 'W';
         } else {
            this.$props.game.result = 'L';
         }
      } else {
         this.$props.game.keysForged = this.homeScore;
         this.$props.game.keysAgainst = this.awayScore;
         this.$props.game.aemberGained = this.homeAember;
         this.$props.game.aemberAgainst = this.awayAember;
         this.$props.game.scoreRecord = this.homeScore + '-' + this.awayScore;
         if (this.homeScore > this.awayScore) {
            this.$props.game.result = 'W';
         } else {
            this.$props.game.result = 'L';
         }
      }
      // const scheduleStore = useScheduleStore();
      // scheduleStore.setCurrentGame(this.$props.item);
      console.log(this.$props.game);
      console.log(this.$props.item);
    }
    // handleValues () {
    //    console.log(this.fieldOne);
    //    console.log(this.fieldTwo);
    //    console.log('it happened');
    // }
  },
};
</script>
<style scope></style>: { target: { value: any; }; }: number: { target: { value: any; }; }: number(: { teamName: any; })(: any)(: any)(: any)(: any)(: any)
