<template>
  <div>
    <!-- <InputField :scoreHandler="this.handleScore" />
      <InputField :scoreHandler="this.handleScore" /> -->
    <input type="text" @keyup="this.handleScore($event, 1)" />
    <input type="text" @keyup="this.handleScore($event, 2)" />
  </div>
</template>
<script>
// import InputField from './form/InputField.vue';
export default {
  props: ["item", "game", "location"],
  // components: {
  //    InputField
  // },
  // data () {
  //    return {
  //       fieldOne: null,
  //       fieldTwo: null,
  //    }
  // },
  methods: {
    handleScore(event, inputNum) {
      console.log(event.target.value);
      console.log(this.$props.game);
      console.log(this.$props.item);
    },
    // handleValues () {
    //    console.log(this.fieldOne);
    //    console.log(this.fieldTwo);
    //    console.log('it happened');
    // }
  },
};
</script>
<style scope></style>
