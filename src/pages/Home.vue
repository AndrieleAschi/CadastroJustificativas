<template>
  <v-app>
    <NewJustification v-on:add-item-event="addItemMethod"/>
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
          //spread operator adds value to the end of the array
          //this.todo_items = [...this.todo_items, newTodoItem]
          //Use unshift: modifies the existing array by adding the value to the front:
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #app {
  padding: 20px;
 }
</style>
