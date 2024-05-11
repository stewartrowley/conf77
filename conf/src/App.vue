<script setup>
import teams from './data/teams.json';
import { useConfStore } from './stores/confStore';
import { useScheduleStore } from './stores/scheduleStore';
const confStore = useConfStore();
const scheduleStore = useScheduleStore();
scheduleStore.getSchedules()
confStore.setTeams();

</script>

<template>
  <div>
    <router-view/>
  </div>
</template>

<style scoped>
</style>
