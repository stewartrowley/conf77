<template>
   <div style="display: flex; flex-direction: row; gap: 3rem;">
      <!-- <DropDown />
      <TeamSelector/> -->
         <TeamStandings />
         <TeamSchedule />
   </div>
</template>
<script>
import TeamSchedule from '../components/TeamSchedule.vue';
import TeamStandings from '../components/TeamStandings.vue';

// import DropDown from '../components/DropDown.vue';
// import TeamSelector from '../components/TeamSelector.vue';

export default {
   components: {
      TeamStandings,
      TeamSchedule
   //  TeamSelector,
   //  DropDown
}
}
</script>
<style scoped>
   
</style>