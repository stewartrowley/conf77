<template>
   <div>
      {{ getTeams }}
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
         return this.confStore.formatConfByColor
      }
   }
}
</script>
<style lang="">
   
</style>