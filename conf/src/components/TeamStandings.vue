<template>
   <div v-if="getTeams">
      <div>
         <h1>Blue</h1>
         <div>
            <h3>Blue A</h3>
            <p v-for="team in getTeams.blue.blueA">{{ team.name }}</p>
         </div>
         <div>
            <h3>Blue B</h3>
            <p v-for="team in getTeams.blue.blueB">{{ team.name }}</p>
         </div>
         <div>
            <h3>Blue C</h3>
            <p v-for="team in getTeams.blue.blueC">{{ team.name }}</p>
         </div>
      </div>
      <div>
         <h1>Green</h1>
         <div>
            <h3>Green A</h3>
            <p v-for="team in getTeams.green.greenA">{{ team.name }}</p>
         </div>
         <div>
            <h3>Green B</h3>
            <p v-for="team in getTeams.green.greenB">{{ team.name }}</p>
         </div>
         <div>
            <h3>Green C</h3>
            <p v-for="team in getTeams.green.greenC">{{ team.name }}</p>
         </div>
      </div>
      <div>
         <h1>Yellow</h1>
         <div>
            <h3>Yellow A</h3>
            <p v-for="team in getTeams.yellow.yellowA">{{ team.name }}</p>
         </div>
         <div>
            <h3>Yellow B</h3>
            <p v-for="team in getTeams.yellow.yellowB">{{ team.name }}</p>
         </div>
         <div>
            <h3>Yellow C</h3>
            <p v-for="team in getTeams.yellow.yellowC">{{ team.name }}</p>
         </div>
      </div>
      <div>
         <h1>Orange</h1>
         <div>
            <h3>Orange A</h3>
            <p v-for="team in getTeams.orange.orangeA">{{ team.name }}</p>
         </div>
         <div>
            <h3>Orange B</h3>
            <p v-for="team in getTeams.orange.orangeB">{{ team.name }}</p>
         </div>
      </div>
      <div>
         <h1>Red</h1>
         <div>
            <h3>Red A</h3>
            <p v-for="team in getTeams.red.redA">{{ team.name }}</p>
         </div>
         <div>
            <h3>Red B</h3>
            <p v-for="team in getTeams.red.redB">{{ team.name }}</p>
         </div>
      </div>
      <div>
         <h1>Purple</h1>
         <div>
            <h3>Purple A</h3>
            <p v-for="team in getTeams.purple.purpleA">{{ team.name }}</p>
         </div>
         <div>
            <h3>Purple B</h3>
            <p v-for="team in getTeams.purple.purpleB">{{ team.name }}</p>
         </div>
      </div>
      <div>
         <h1>White</h1>
         <div>
            <h3>White A</h3>
            <p v-for="team in getTeams.white.whiteA">{{ team.name }}</p>
         </div>
         <div>
            <h3>White B</h3>
            <p v-for="team in getTeams.white.whiteB">{{ team.name }}</p>
         </div>
      </div>
   </div>
</template>
<script>
import { useConfStore } from '../stores/confStore';
export default {
   setup () {
      const confStore = useConfStore();
      return {
         confStore
      }
   },
   computed: {
      getTeams () {
         console.log(this.confStore.confs.blue.blueA);
         return this.confStore.confs
      }
   }
}
</script>
<style lang="">
   
</style>