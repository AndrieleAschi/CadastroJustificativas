<template>
  <v-app>
    <v-container>
        <UnsubscribeMsg/>
        <JustificationForm v-on:add-item-event="addItemMethod"/>
        <JustificationList v-bind:justifications="justifications"/>
    </v-container>
  </v-app>
</template>

<script>
import JustificationForm from '@/components/JustificationForm' 
import JustificationList from '@/components/JustificationList' 
import UnsubscribeMsg from '@/components/UnsubscribeMsg' 
export default {
  name: 'Home',
  components: {
    JustificationForm,
    JustificationList,
    UnsubscribeMsg,
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

</style>
