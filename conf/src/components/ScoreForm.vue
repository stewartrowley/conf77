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
      const teamName = this.$props.game.matchup[0].name;
      const opponentName = this.$props.game.matchup[1].name;
      const schedule = this.$props.item.schedule;
      const teamSchedule = schedule.find(o => o.teamName === this.$props.team.teamName);
      const opponentTeamSchedule = schedule.find(o => o.teamName === opponentName);
      const opponentTeamScheduleIndex = schedule.findIndex(o => o.teamName === opponentName);
      const opponentsSchedule = opponentTeamSchedule.games;
      let opponentTeamGameIndex = null;
      opponentsSchedule.forEach((word, index) => {
         if (word.location === propOpponentGame.location && word.matchup[0].name === propOpponentGame.matchup[0].name && word.matchup[1].name === propOpponentGame.matchup[1].name) {
         
            opponentTeamGameIndex = index;
         }
      });
      const teamEvents = teamSchedule.games;
      const teamGameIndex = teamEvents.indexOf(this.$props.game);
      const opponentGame = this.$props.item.schedule[parseInt(opponentTeamScheduleIndex)].games[parseInt(opponentTeamGameIndex)];
      if (this.$props.game.location === 'away') {
         this.$props.game.keysForged = this.awayScore;
         this.$props.game.keysAgainst = this.homeScore;
         this.$props.game.aemberGained = this.awayAember;
         this.$props.game.aemberAgainst = this.homeAember;
         this.$props.game.scoreRecord = this.awayScore + '-' + this.homeScore;;
         opponentGame.keysForged = this.homeScore;
         opponentGame.keysAgainst = this.awayScore;
         opponentGame.aemberGained = this.homeAember;
         opponentGame.aemberAgainst = this.awayAember;
         opponentGame.scoreRecord = this.homeScore + '-' + this.awayScore;
         if (this.awayScore > this.homeScore) {
            this.$props.game.result = 'W';
            opponentGame.result = 'L';
         } else {
            this.$props.game.result = 'L';
            opponentGame.result = 'W';
         }
      } else {
         this.$props.game.keysForged = this.homeScore;
         this.$props.game.keysAgainst = this.awayScore;
         this.$props.game.aemberGained = this.homeAember;
         this.$props.game.aemberAgainst = this.awayAember;
         this.$props.game.scoreRecord = this.homeScore + '-' + this.awayScore;
         opponentGame.keysForged = this.awayScore;
         opponentGame.keysAgainst = this.homeScore;
         opponentGame.aemberGained = this.awayAember;
         opponentGame.aemberAgainst = this.homeAember;
         opponentGame.scoreRecord = this.awayScore + '-' + this.homeScore;
         if (this.homeScore > this.awayScore) {
            this.$props.game.result = 'W';
            opponentGame.result = 'L';
         } else {
            this.$props.game.result = 'L';
            opponentGame.result = 'W';
         }
      }
      const scheduleStore = useScheduleStore();
      scheduleStore.setCurrentGame(this.$props.item);
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
