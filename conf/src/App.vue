<script setup>
import teams from './data/teams.json';
import { useConfStore } from './stores/confStore';
const confStore = useConfStore();
confStore.setTeams(teams);

</script>

<template>
  <div>
    <router-view/>
  </div>
</template>

<style scoped>
</style>
