<template>
  <v-app>
    <NewJustification v-on:add-item-event="addItemMethod"/>
    <hr/>
    <Unsubscribe v-bind:justifications="justifications"/>
  </v-app>
</template>
<script>
import Unsubscribe from '@/components/templates/Unsubscribe'
import NewJustification from '@/components/templates/NewJustification'

export default {
  name: 'Home',
  components: {
    Unsubscribe,
    NewJustification
  },
  data() {
    return {
      justifications : [],
    }
  },
  methods: {
    addItemMethod(newJustItem){
      this.justifications.unshift(newJustItem);
    },
  },
  mounted(){
    console.log('App Mounted');
      if (localStorage.getItem('justifications'))
          this.justifications = JSON.parse(localStorage.getItem('justifications'));
  },
  watch: {
    justifications: {
      handler() {
        console.log('Todo Items array changed!');
        localStorage.setItem('justifications', JSON.stringify(this.justifications));
      },
      deep: true,
    },
  },
}
</script>
<style  lang="scss" scoped>
#app {
  padding: 20px;

  hr {
    margin: 5% 0;
    width: 50%;
    border-width: 0; 
    height: 1px;
    border-top-width: 1px;
    margin-left: 25%

  }
}
</style>
