<template>
  <div>
    <input type="text" v-model="value" @change="this.$props.scoreHandler()"/>
  </div>
</template>
<script>
export default {
   props: {
      scoreHandler: function
   },
   data () {
      return {
         value: null
      }
   },

};
</script>
<style scope></style>
